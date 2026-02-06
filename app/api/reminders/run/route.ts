import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";
import { getEmailProvider } from "@/lib/email";
import { getPushSender } from "@/lib/push";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const url = new URL(request.url);
    const provided = url.searchParams.get("secret") || request.headers.get("x-cron-secret");
    if (provided !== secret) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
  }

  const sql = getSql();
  if (!sql) {
    return NextResponse.json(
      { error: "database_not_configured" },
      { status: 501 }
    );
  }

  const email = getEmailProvider();
  const push = getPushSender();

  try {
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

    const due = await sql<
      {
        id: number;
        item_id: number;
        kind: string;
        remind_at: string;
        channel: "email" | "push";
        name: string;
        retailer: string | null;
      }[]
    >`
      SELECT r.id, r.item_id, r.kind, r.remind_at, r.channel, i.name, i.retailer
      FROM reminders r
      JOIN items i ON i.id = r.item_id
      WHERE r.status = 'pending' AND r.remind_at <= NOW()
      ORDER BY r.remind_at ASC
      LIMIT 100;
    `;

    let sent = 0;

    for (const r of due) {
      const subject =
        r.kind === "return-window"
          ? `Return window ending soon: ${r.name}`
          : `Warranty expiring soon: ${r.name}`;
      const text =
        `Reminder: ${r.name}` +
        (r.retailer ? ` (Retailer: ${r.retailer})` : "") +
        `\nKind: ${r.kind}\nScheduled: ${r.remind_at}`;

      if (r.channel === "email") {
        const to = process.env.DEFAULT_REMINDER_EMAIL_TO || "test@example.com";
        await email.send({ to, subject, text });
      } else {
        // TODO: pull user subscriptions from DB once user accounts exist.
        await push.send({ subscription: null, title: subject, body: text });
      }

      await sql`
        UPDATE reminders
        SET status = 'sent', sent_at = NOW()
        WHERE id = ${r.id};
      `;

      sent += 1;
    }

    return NextResponse.json({ ok: true, due: due.length, sent });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "run_failed" },
      { status: 500 }
    );
  } finally {
    await sql.end({ timeout: 5 });
  }
}
