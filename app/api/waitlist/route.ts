import { NextResponse } from "next/server";
import postgres from "postgres";

export const runtime = "nodejs";

const emailRegex = /^\S+@\S+\.\S+$/;

export async function POST(request: Request) {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    return NextResponse.json(
      { error: "database_not_configured" },
      { status: 501 }
    );
  }

  const body = (await request.json().catch(() => null)) as {
    email?: string;
    company?: string;
    volume?: string;
    stack?: string;
    pain?: string;
    source?: string;
  } | null;

  if (!body?.email || !emailRegex.test(body.email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const sql = postgres(databaseUrl, {
    ssl: databaseUrl.includes("localhost") ? false : "require",
  });

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        company TEXT,
        volume TEXT,
        stack TEXT,
        pain TEXT,
        source TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    await sql`
      INSERT INTO waitlist (email, company, volume, stack, pain, source)
      VALUES (
        ${body.email},
        ${body.company ?? ""},
        ${body.volume ?? ""},
        ${body.stack ?? ""},
        ${body.pain ?? ""},
        ${body.source ?? ""}
      )
      ON CONFLICT (email)
      DO UPDATE SET
        company = EXCLUDED.company,
        volume = EXCLUDED.volume,
        stack = EXCLUDED.stack,
        pain = EXCLUDED.pain,
        source = EXCLUDED.source;
    `;
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "db_error" },
      { status: 500 }
    );
  } finally {
    await sql.end({ timeout: 5 });
  }

  return NextResponse.json({ ok: true });
}
