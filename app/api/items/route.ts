import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";
import { suggestReminders } from "@/lib/policy";

export const runtime = "nodejs";

type CreateItemBody = {
  name: string;
  retailer?: string;
  purchaseDate: string; // ISO date
  countryCode: string;
  extractedText?: string;
  filename?: string;
  mimeType?: string;
  // v1: hardcoded channels; but allow override.
  channels?: Array<"email" | "push">;
};

export async function POST(request: Request) {
  const sql = getSql();
  if (!sql) {
    return NextResponse.json(
      { error: "database_not_configured" },
      { status: 501 }
    );
  }

  const body = (await request.json().catch(() => null)) as CreateItemBody | null;
  if (!body?.name || !body.purchaseDate || !body.countryCode) {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const purchaseDate = new Date(body.purchaseDate);
  if (Number.isNaN(purchaseDate.getTime())) {
    return NextResponse.json({ error: "invalid_purchase_date" }, { status: 400 });
  }

  const channels = body.channels?.length ? body.channels : (["email", "push"] as const);
  const { reminders, policy } = suggestReminders({
    countryCode: body.countryCode,
    purchaseDate,
    channels: [...channels],
  });

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS items (
        id SERIAL PRIMARY KEY,
        user_id TEXT,
        name TEXT NOT NULL,
        retailer TEXT,
        purchase_date DATE NOT NULL,
        return_window_days INT,
        warranty_months INT,
        country_code TEXT NOT NULL,
        policy_sources TEXT,
        policy_disclaimer TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS documents (
        id SERIAL PRIMARY KEY,
        item_id INT REFERENCES items(id) ON DELETE CASCADE,
        filename TEXT,
        mime_type TEXT,
        storage_url TEXT,
        extracted_text TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS reminders (
        id SERIAL PRIMARY KEY,
        item_id INT REFERENCES items(id) ON DELETE CASCADE,
        kind TEXT NOT NULL,
        remind_at TIMESTAMPTZ NOT NULL,
        channel TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending',
        sent_at TIMESTAMPTZ,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS push_subscriptions (
        id SERIAL PRIMARY KEY,
        user_id TEXT,
        endpoint TEXT UNIQUE,
        subscription_json TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    const inserted = await sql<
      { id: number }[]
    >`
      INSERT INTO items (
        user_id,
        name,
        retailer,
        purchase_date,
        return_window_days,
        warranty_months,
        country_code,
        policy_sources,
        policy_disclaimer
      ) VALUES (
        ${null},
        ${body.name},
        ${body.retailer ?? null},
        ${purchaseDate.toISOString().slice(0, 10)},
        ${policy.returnWindowDays ?? null},
        ${policy.warrantyMonths ?? null},
        ${body.countryCode.toUpperCase()},
        ${policy.sources.join("\n")},
        ${policy.disclaimer}
      )
      RETURNING id;
    `;

    const itemId = inserted[0]?.id;
    if (!itemId) throw new Error("failed_to_insert_item");

    if (body.extractedText || body.filename || body.mimeType) {
      await sql`
        INSERT INTO documents (item_id, filename, mime_type, storage_url, extracted_text)
        VALUES (
          ${itemId},
          ${body.filename ?? null},
          ${body.mimeType ?? null},
          ${null},
          ${body.extractedText ?? null}
        );
      `;
    }

    if (reminders.length) {
      for (const r of reminders) {
        await sql`
          INSERT INTO reminders (item_id, kind, remind_at, channel)
          VALUES (
            ${itemId},
            ${r.kind},
            ${r.remindAt.toISOString()},
            ${r.channel}
          );
        `;
      }
    }

    return NextResponse.json({ ok: true, itemId });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "db_error" },
      { status: 500 }
    );
  } finally {
    await sql.end({ timeout: 5 });
  }
}
