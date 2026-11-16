# MTC UW–Madison website

The website for the Muslim Tech Collaborative chapter at the University of Wisconsin–Madison.

Built with Next.js (App Router), TypeScript, and Tailwind CSS. There is no database, login, or backend: all content lives in a few plain files in `src/content/`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Other commands:

| Command | What it does |
|---|---|
| `npm run build` | Production build |
| `npm run lint` / `npm run typecheck` | Code checks |
| `npm run check` | Lists links and photo slots that are still empty |
| `npm run photos` | Adds a photo or refreshes photo sizes (see below) |

## Officer guide: updating the site

You only need to edit files in `src/content/`. Each file starts with a comment explaining its fields.

### Add or change an event
Edit `src/content/events.ts`. Copy an existing entry and change it. Give it a `date` like `"2027-02-10"`. The site moves it from **Upcoming** to **Past** by itself the day after. Plans without a date go in `inPlanning` in the same file.

### Change a link (email, Instagram, signup, calendar)
Edit `src/content/site.config.ts`. A link set to `null` is hidden everywhere on the site, so nothing broken is ever shown. In development you will see a dashed "Not configured" note where the button will appear.

### Add or replace a photo
1. Put the original in `_incoming/` (this folder is never uploaded to GitHub).
2. Run, for example:
   ```bash
   npm run photos -- "_incoming/MTC Kickoff/IMG_1234.HEIC" events/kickoff-01
   ```
   This saves a web-sized copy to `public/assets/events/kickoff-01.jpg` and removes location data. HEIC, JPEG, PNG and WebP work. Export RAW files as JPEG first.
3. In `src/content/photos.ts`, set that slot's `file` to `"/assets/events/kickoff-01.jpg"` and write the `alt` text (what is in the picture) and a `caption`.

Only publish photos of people who are fine with being on the website.

### Add the leadership team
Edit `src/content/team.ts`. While the list is empty the About page shows a short paragraph instead of a roster.

### Add or update a project
Edit `src/content/projects.ts`. Every project has a `status` (`shipped`, `in-development`, or `planned`) that is shown on the page. Keep it accurate.

### Change the wording of the four pillars or the "ways in"
Edit `src/content/pillars.ts`.

## Design

- Colours, type sizes, and the grid are defined once in `src/app/globals.css`.
- Fonts: Bricolage Grotesque (headings), IBM Plex Sans (text), IBM Plex Mono (labels).
- Shared pieces are in `src/components/`. Pages are in `src/app/<page>/page.tsx`.

## Deploying

The site is set up for [Vercel](https://vercel.com): import the GitHub repository and accept the defaults. Before going live:

1. Run `npm run check -- --strict` and fix anything it lists.
2. Set `site.url` in `src/content/site.config.ts` to the real address.

See `TODO-ASSETS.md` for what is still missing.
