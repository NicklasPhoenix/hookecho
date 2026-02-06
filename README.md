# Warranty Wallet

Keep every warranty in one place.

Store receipts, track warranty expiry dates, and generate claim-ready exports in
seconds.

## MVP path B (no SMS)

This repo currently targets **B**: **Push + Email only** for v1.

- OCR/extraction runs **client-side** (PDF.js + Tesseract.js)
- Reminders: email (console provider) + push (skeleton)

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
# optional: protects /api/reminders/run
CRON_SECRET="dev"
# optional: where email reminders go in console mode
DEFAULT_REMINDER_EMAIL_TO="you@example.com"
```

Then run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Try the vertical slice

- Go to `/upload`
- Upload a PDF/JPG/PNG
- Confirm fields (name, retailer, purchase date, country)
- Click **Save item** → stores item + extracted text in Postgres and schedules reminders

## Trigger due reminders (dev)

Open:

`/api/reminders/run?secret=dev`

Email sending is console-only for now (it logs to server stdout).

## Push notes

- `public/sw.js` is registered from `/upload`.
- Real web push sending (VAPID + `web-push`) is TODO.
- iOS requires **Add to Home Screen** for push to work.

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
