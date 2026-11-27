# Still needed before launch

Run `npm run check` for the live list. Delete items here as they are done.

## Links (`src/content/site.config.ts`)
- [x] Group chat invite (the main Join button)
- [x] LinkedIn page URL
- [x] Chapter email
- [x] Final site address (`site.url`): https://mtc-uw-madison-web.vercel.app

## Photos (`src/content/photos.ts`)
- [ ] project-nfc (a real tag or build session, e.g. from the Feb 2027 hunt); the card shows text only on the live site until then
- [x] Confirm the people shown in the four published photos are fine with being on a public website

## Content
- [ ] Team: names, roles, headshots (`src/content/team.ts`). The section is hidden until then.
- [ ] Dates of the three past events, and Instagram post links if the cards should link out (`src/content/events.ts`)
- [ ] Any confirmed upcoming event
- [ ] Accent colour: currently UW red (`--color-accent` in `src/app/globals.css`)

## NFC Scavenger Hunt (`src/content/nfcHunt.ts`)
Every value below is `null` until confirmed; the page shows a visible placeholder meanwhile.
- [ ] `endTime`: shows "5:30 pm – end time TBA (about 2 hours)"
- [ ] `room`: currently the text "Room TBD"
- [ ] `prizes`: shows "Prizes for the top teams. Details TBA."
- [ ] `soloDates`: shows "(dates TBA)"; planned Feb 4–10
- [ ] `registerUrl`: the hunt app's /register page; button reads "Registration opens soon" (disabled) until set
- [ ] `huntAppUrl`: hunt app base URL; enables live slot/finisher counts and the registration link from `/api/public/stats`
