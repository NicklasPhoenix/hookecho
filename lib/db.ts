import postgres from "postgres";

export function getSql() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return null;

  return postgres(databaseUrl, {
    // local dev convenience
    ssl: databaseUrl.includes("localhost") ? false : "require",
  });
}
