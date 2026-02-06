import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";

export const runtime = "nodejs";

type Body = {
  subscription: { endpoint?: string } & Record<string, unknown>;
  userId?: string;
};

export async function POST(request: Request) {
  const sql = getSql();
  if (!sql) {
    return NextResponse.json(
      { error: "database_not_configured" },
      { status: 501 }
    );
  }

  const body = (await request.json().catch(() => null)) as Body | null;
  const endpoint = body?.subscription?.endpoint;
  if (!endpoint) {
    return NextResponse.json({ error: "invalid_subscription" }, { status: 400 });
  }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS push_subscriptions (
        id SERIAL PRIMARY KEY,
        user_id TEXT,
        endpoint TEXT UNIQUE,
        subscription_json TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    await sql`
      INSERT INTO push_subscriptions (user_id, endpoint, subscription_json)
      VALUES (
        ${body?.userId ?? null},
        ${endpoint},
        ${JSON.stringify(body?.subscription ?? {})}
      )
      ON CONFLICT (endpoint)
      DO UPDATE SET subscription_json = EXCLUDED.subscription_json;
    `;

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "db_error" },
      { status: 500 }
    );
  } finally {
    await sql.end({ timeout: 5 });
  }
}
