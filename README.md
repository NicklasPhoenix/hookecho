# Warranty Wallet

Keep every warranty in one place.

Store receipts, track warranty expiry dates, and generate claim-ready exports in
seconds.

## Features

- Receipt vault (upload, scan, or forward)
- Warranty expiry reminders
- Serial + model storage
- Claim checklist + exportable PDF
- Family sharing

## Local Development

```bash
npm install
```

Create `.env.local`:

```env
DATABASE_URL="postgresql://user:password@host:5432/warrantywallet"
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
  "email": "you@email.com",
  "company": "Apple, Dyson",
  "volume": "Monthly",
  "stack": "Electronics",
  "pain": "Missing warranty deadlines"
}
```

The API auto-creates a `waitlist` table on first write (Postgres required).
