<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# Vidhi Jain Physiotherapy — site guide

The person asking you for changes is **not a developer**. They do not read
code and should never be asked to. Make the change, check it builds, deploy
it, and reply in plain language.

Live: https://vidhijain.embarko.app · Embarko app name: `vidhijain`

## Where everything is

**Almost every change they ask for is in one file: `src/lib/clinic.ts`.**
Phone, email, address, opening hours, the five services and their
descriptions, the testimonials, and the bookable days and times all live
there as plain text. Look there first, before anything else.

| They ask to change | Edit |
| --- | --- |
| Phone, email, address, hours | `src/lib/clinic.ts` → `clinic` |
| A service, its text or duration | `src/lib/clinic.ts` → `services` |
| A patient review | `src/lib/clinic.ts` → `testimonials` |
| The "why choose us" points | `src/lib/clinic.ts` → `reasons` |
| Available days and times | `src/lib/clinic.ts` → `bookingDays` |
| Headline or intro on the main page | `src/app/page.tsx` |
| A photograph | replace the file in `public/images/`, keep the filename |

## The four pages

`/` is the live design. `/v1`, `/v2` and `/v3` are alternative designs kept
for comparison. **A content change must be made in `src/lib/clinic.ts`**, which
updates all four at once. Only edit a `page.tsx` for wording that is unique to
one design, and if they ask to change "the website", they mean `/`.

## Before you deploy, always

```bash
npm install     # first time only
npm run build   # must finish without errors
```

If the build fails, fix it before deploying. Never deploy a failing build —
it takes the live site down and they cannot recover it themselves.

## Deploying

Use the Embarko connector if you have it. Otherwise:

```bash
tar -czf /tmp/app.tar.gz --exclude=node_modules --exclude=.git \
  --exclude='.env*' --exclude=.next --exclude=tsconfig.tsbuildinfo -C . .

curl -sS -X POST 'https://ship.embarko.ai/apps' \
  --oauth2-bearer 'THE_EMBARKO_KEY' \
  -H 'X-App-Name: vidhijain' -H 'X-Agent-Name: assistant' \
  -F 'source=@/tmp/app.tar.gz'
```

Then poll `https://ship.embarko.ai/apps/vidhijain/status` every 10 seconds
until it says `live`. A build takes two to three minutes. Tell them when it
is actually live, not when the upload finished.

## Rules

- **`embarko.json` must not be deleted or edited.** It is how a deploy finds
  this app.
- **Renaming the app is limited to once a week** and the old address dies
  immediately with no redirect. Confirm with them before renaming.
- **The booking form does not work.** It is appearance only — choosing a time
  and pressing the button sends nothing to anyone. If they believe patients
  are booking through it, tell them plainly that they are not. Making it real
  needs a backend and is a project, not an edit.
- **The clinic details are placeholders.** The testimonials, patient names,
  address, phone number and the "1,400+ patients" figure were all invented as
  samples. If they have not been replaced with real details, say so — this is
  publicly live under a real person's name.
- The photographs are free-licence stock, not the real clinic or Dr. Jain.
