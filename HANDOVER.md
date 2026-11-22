# Handover — Vidhi Jain Physiotherapy site

Live at **https://vidhijain.embarko.app**
Source at **https://github.com/parakhjain23/visdhijain**

## What this is

A Next.js site with three designs. `/` serves the booking-first design.
`/v1`, `/v2` and `/v3` serve the alternatives, kept so they can be compared.

## The one file most changes need

Every fact on the site — phone, email, address, opening hours, services,
testimonials — lives in **`src/lib/clinic.ts`**. Nothing is hardcoded into
the pages. Change a value there and it updates on all four routes at once.

Everything in that file is currently **placeholder data**, including the
patient testimonials, the clinic address and the "1,400+ patients" figure.
These should be replaced with real details before the site is promoted.

## Changing text without installing anything

1. Open https://github.com/parakhjain23/visdhijain
2. Click `src` → `lib` → `clinic.ts`
3. Click the pencil icon (Edit)
4. Change the text between the quote marks, leaving the punctuation alone
5. Click "Commit changes"

This edits the source. It does **not** update the live site on its own —
someone has to redeploy (below).

## Running it locally

Needs Node.js 20 or newer.

```bash
git clone https://github.com/parakhjain23/visdhijain.git
cd visdhijain
npm install
npm run dev          # open http://localhost:3000
```

Before deploying, confirm it still builds:

```bash
npm run build
```

## Deploying a change

The site is hosted on Embarko. Deploying needs the **Embarko key** for this
app, which is not in this repository and must be passed on separately by
Parakh.

```bash
tar -czf /tmp/app.tar.gz \
  --exclude=node_modules --exclude=.git --exclude='.env*' \
  --exclude=.next --exclude=tsconfig.tsbuildinfo -C . .

curl -sS -X POST 'https://ship.embarko.ai/apps' \
  --oauth2-bearer 'EMBARKO_KEY_HERE' \
  -H 'X-App-Name: vidhijain' \
  -H 'X-Agent-Name: handover' \
  -F 'source=@/tmp/app.tar.gz'
```

Then poll until it reports `live`:

```bash
curl -sS 'https://ship.embarko.ai/apps/vidhijain/status' \
  --oauth2-bearer 'EMBARKO_KEY_HERE'
```

A build takes two to three minutes.

`embarko.json` holds the `appId`. It is not a secret, and it is what lets a
deploy find this app even if the name changes. Do not delete it.

## Things worth knowing

- **The booking form does not work.** It is UI only. Selecting a time and
  pressing the button changes the label and sends nothing to anyone. Real
  bookings need a backend, which was out of scope.
- **The app name can only be changed once a week**, and the old address stops
  working immediately with no redirect.
- **The photographs** are free-licence stock from Pexels, cleared for
  commercial use without attribution. They are not photographs of the real
  clinic or of Dr. Jain.
