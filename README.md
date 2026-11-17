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

The site is one page. You only need to edit files in `src/content/`. Each file starts with a comment explaining its fields.

### Change a link (group chat, Instagram, LinkedIn, email)
Edit `src/content/site.config.ts`. A link set to `null` is simply not shown, so nothing broken is ever published.

### Add or change an event
Edit `src/content/events.ts`. Give a new event a `date` like `"2027-02-10"`: it shows as **Next event** until the day passes, then moves into **Past events** by itself. Add `instagramUrl` to make a past-event card link to the post.

### Add or replace a photo
1. Put the original in `_incoming/` (this folder is never uploaded to GitHub).
2. Run, for example:
   ```bash
   npm run photos -- "_incoming/MTC Kickoff/IMG_1234.HEIC" events/kickoff
   ```
   This saves a web-sized copy to `public/assets/events/kickoff.jpg` and removes location data. HEIC, JPEG, PNG, WebP and Canon `.CR2` work. Add `--brighten=1.3` to lighten a dark photo.
3. In `src/content/photos.ts`, set that slot's `file` to `"/assets/events/kickoff.jpg"` and write the `alt` text (what is in the picture). If the crop cuts something off, set `focus` on the slot, e.g. `"50% 70%"` to keep more of the lower part.

Only publish photos of people who are fine with being on the website.

### Add the team
Edit `src/content/team.ts`. The Team section and its menu link appear as soon as the list has people in it. For headshots, add a photo slot per person in `photos.ts` and use its id as `photo`.

### Add a project
Edit `src/content/projects.ts`.

### Change the four "What we do" blocks
Edit `src/content/pillars.ts`.

## Design

- Black and white from the MTC logo, plus one accent colour. All colours are defined once at the top of `src/app/globals.css`; change `--color-accent` to change the accent everywhere.
- Fonts: Archivo (headings), Instrument Sans (text).
- Each section of the page is its own file in `src/components/sections/`; `src/app/page.tsx` lists them in order.
- Logo files are in `public/assets/brand/`.

## Deploying

The site is set up for [Vercel](https://vercel.com): import the GitHub repository and accept the defaults. Before going live:

1. Run `npm run check -- --strict` and fix anything it lists.
2. Set `site.url` in `src/content/site.config.ts` to the real address.

See `TODO-ASSETS.md` for what is still missing.
