# HookEcho

Webhook Replay + Contract Tests.

Capture real webhook payloads, replay them safely, diff versions, and auto-generate
contract tests that keep integrations stable.

## Features

- Secure webhook capture endpoint
- Replay to staging/local with header/body overrides
- Signature on/off + secret handling
- Payload version diffs
- Contract test generator (planned)

## Local Development

```bash
npm install
```

Create `.env.local`:

```env
DATABASE_URL="postgresql://user:password@host:5432/hookecho"
```

Then run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Waitlist API

`POST /api/waitlist`

Body:

```json
{
  "email": "you@company.com",
  "company": "Acme Inc.",
  "volume": "100-1k / day",
  "stack": "Node.js",
  "pain": "Debugging flaky retries"
}
```

The API auto-creates a `waitlist` table on first write (Postgres required).
