# Portfolio refresh plan (JacquesAttinger.github.io)

## TLDR

Your website is old.
We will update it to match your new resume: new headline, new jobs, new major, new projects, and the new paper.
Then, in a second change, we will remove the leftover parts of the website template you copied, fix small broken things, and add a check that runs before each commit.
Each change goes in its own pull request, and you merge them yourself.

## Context

The site (Next.js static export on GitHub Pages, built from Corey Chiu's MIT portfolio template) was last updated in Nov 2025.
Since then: Hemut internship, CS added to the major, new projects, and an MRS Communications paper.
Source of truth is `~/Documents/resume_non_icloud/SWE/Jacques_Attinger_Resume.tex` (edited 2026-10-02).
All content lives in `src/config/*.ts` plus a few strings in pages and components.

## Decisions (from the grilling session)

| Topic | Decision |
|---|---|
| Headline | "ML Engineer and researcher" |
| Job titles | Keep official titles from the resume |
| Work list | Match resume exactly: 4 entries, Iowa State removed |
| Education | "B.S. in Mathematics and Computer Science", GPA 3.82/4.0, Sep 2024 – May 2028 |
| Projects | Remove Storely. Add ChessBuddy, Project Marshall, job-watcher, TickTick. Keep RHEED, Mini-MBE, SLADS-Net |
| ChessBuddy | No link, "Private repo" tag (repo is private and owned by dvairus) |
| Project cards | Add tech-stack tags; ML-first order |
| MRS paper | Title links to the manuscript PDF hosted on the site |
| Social links | LinkedIn (new URL), GitHub, Google Scholar, Email (UChicago), X |
| Resume PDF | New resume, phone number removed on the public copy, stable filename |
| Extras | All four: template leftovers, broken bits + link preview, dead code, pre-commit lint hook |
| Shipping | 2 PRs (content first, cleanup stacked on it), one worktree, no merge by me |
| Linear | Skip |

## Setup

1. `git -C ~/code/JacquesAttinger.github.io fetch origin` and fast-forward `main` (a bot pushes to `main` daily, so re-check at start).
   Stop if the tree is dirty or the fast-forward fails.
2. Create a worktree at `~/code/JacquesAttinger.github.io/.worktrees/portfolio-refresh` on branch `content/portfolio-refresh-2026-10` from `origin/main`.
   Add `.worktrees/` to `.gitignore` (committed in PR 1).
   There is no `.env` to copy (only `.env.example`).
3. Copy this plan to `docs/portfolio_refresh_plan.md` in the worktree as the first commit.
4. Tooling: pnpm is not installed and CI uses pnpm 9, so run it via `npx -y pnpm@9 …` (CI uses Node 20; local is Node 26).
5. Every `.ts`/`.tsx` file I edit gets a top comment with the last-edited date and time (global rule).

## PR 1 — Content update (branch `content/portfolio-refresh-2026-10` → `main`)

### Headline, intro, SEO — `src/config/infoConfig.ts`
- `headline` → `'ML Engineer and researcher'`.
  This also changes the tab title and default page title via `src/app/layout.tsx` (`${name} - ${headline}`).
- `introduction` → `"I'm Jacques, a machine learning engineer and researcher studying math and computer science at the University of Chicago. I build LLM and computer-vision systems, from RAG pipelines at Hemut to autonomous electron-microscope workflows at Argonne National Laboratory."`
  This also becomes the meta description.

### Work — `src/config/career.ts` + `src/components/shared/CustomIcon.tsx`
New list, newest first (company / title / start – end / logo key):
1. `Hemut (YC X25)` / `Software Engineering Intern` / `Jun 2026` – `Present` / `hemut` (new)
2. `Argonne National Laboratory` / `Software Engineering Intern` / `Jun 2025` – `Aug 2025` / `argonne`
3. `University of Chicago Department of Physics` / `Undergraduate Researcher` / `Feb 2025` – `May 2026` / `uchicago`
4. `Princeton University Department of Mechanical & Aerospace Engineering` / `Computational Research Intern` / `Jun 2023` – `Aug 2023` / `princeton`

- Add a `hemut` case to `CustomIcon`, using a copy of `~/code/hemut3/Command/public/favicon-square.png` (512×512 yellow mark) saved as `public/images/icon/hemut.png`.
- Start dates now carry the year (today they read `'Jun'`, `'Feb'`).

### Education — `src/config/education.ts` + `src/components/home/Education.tsx`
- `major` → `'B.S. in Mathematics and Computer Science'`, `end` → `'May 2028'`.
- Add optional `gpa?: string` to `EducationItemType`; set `'3.82/4.0'`; render `GPA: 3.82/4.0` as a `text-xs text-muted-foreground` line under the major.

### Projects — `src/config/projects.ts` + `src/components/project/GithubProjectCard.tsx`
- `ProjectItemType`: make `link` optional and add `isPrivate?: boolean` (reuse existing `techStack`).
- Card: render `techStack` as small tags; with no link, render no overlay `Link` and no arrow, and show a "Private repo" tag (Phosphor `Lock` icon, already a dependency).
  Fix `gitStars && …` / `gitForks && …` so a `0` never renders.
  Remove unused `ArrowRightIcon`/`HashIcon` imports.
- New `githubProjects`, in this order:
  1. **ChessBuddy** (private, no link) — "Upload a chess game and get plain-English coaching for every move: Stockfish evaluates each position, Claude explains it, and an LLM-as-judge pipeline checks the explanations against human-labeled data." Tags: Python, TypeScript, React, LangChain, LangSmith, Claude, Stockfish.
  2. **Project Marshall** — `github.com/JacquesAttinger/Project_Marshall` — "Autonomous coding pipeline that watches a Linear board and runs Claude Code agents to plan, build, and open a pull request for each issue." Tags: TypeScript, Bun, SQLite, Zod, Claude Code, Linear API.
  3. **job-watcher** — `github.com/JacquesAttinger/job-watcher` — "Hourly Claude routine that scans six internship boards, uses an LLM to pick the postings that fit, and sends a phone alert for each new match." Tags: Python, Claude, pytest, ntfy.
  4. **SLADS-Net** — description unchanged; tags from the repo's actual imports (check `requirements`/notebooks before writing them).
  5. **RHEED Camera Viewer** — description unchanged; link case fixed to `github.com/JacquesAttinger/RHEED-Viewer`; tags from the repo (Python, Allied Vision `vmbpy`, GUI lib as found).
  6. **Mini-MBE Graphical User Interface** — description unchanged; tags Python, Modbus, plus GUI lib as found.
  7. **TickTick** — `github.com/JacquesAttinger/TickTick` — "macOS menu bar timer and to-do app: the countdown shows the current task, the screen flashes when time is up, and a Notes window holds quick notes." Tags: Swift, SwiftUI, macOS.
- Storely entry deleted.
- `src/app/projects/page.tsx`: section heading `Github` → `GitHub`.

### Research — `src/config/research.ts` + `src/app/research/page.tsx`
- Add at the top:
  - title: `Towards autonomous imaging workflows using scanning electron microscopy for materials research`
  - authors: `Ankush Kumar Mishra, Jacques W. Attinger, Tongchao Liu, Charudatta M. Phatak`
  - venue: `MRS Communications`, date: `accepted 2026`
  - link: `/papers/Mishra_Attinger_2026_MRS_Communications.pdf`
- Copy `~/Downloads/Ankush_SEM_ANL_MRS (1).pdf` (14-page author manuscript, 13.5 MB) to `public/papers/Mishra_Attinger_2026_MRS_Communications.pdf`.
- Author bolding: match `Jacques Attinger` or `Jacques W. Attinger` (today only the exact first form is bolded).
- A local link (`/papers/…`) must still open in a new tab, as the journal links do.

### Social links — `src/config/infoConfig.ts` + `src/components/home/SocialLinks.tsx`
- LinkedIn `href` → `https://www.linkedin.com/in/jacquesattinger/`.
- `email` → `'jacquesa@uchicago.edu'`; re-enable the email icon (`mailto:`), placed after GitHub.
- `name: 'Github'` → `'GitHub'` (aria-label reads "Follow on GitHub").
- Remove the `?utm_source=${utm_source}` suffix in `SocialLinks.tsx` and `GithubProjectCard.tsx` (the env var is never set, so every link ends in `?utm_source=undefined`, and it breaks the Google Scholar URL).
- Google Scholar and X stay.

### Resume PDF — `public/` + `src/app/page.tsx`
- Copy the `.tex` to the scratchpad, delete only `515-567-0981 $|$ ` from the header, compile with `tectonic`.
  Original `.tex`/`.pdf` stay unchanged.
- Render both PDFs to PNG (`pdftoppm`) and compare: same layout, still one page, no phone.
- Save as `public/Jacques_Attinger_Resume.pdf`; delete `public/Resume_November_24.pdf`; update the `href` in `src/app/page.tsx`.

### PR 1 description
Short summary of the above, plus an unchecked pre-merge item: "Co-authors (Ankush Mishra / Charudatta Phatak) agree to host the manuscript PDF."
That PDF is the author manuscript, not the journal's typeset version; when the DOI is live, change the link to the DOI in one line.

## PR 2 — Cleanup (branch `chore/portfolio-template-cleanup`, based on PR 1's branch, PR base = PR 1's branch)

### A. Template leftovers
- Delete the live `/friends` and `/changelog` routes and their only-used-there code: `src/app/friends/`, `src/app/changelog/`, `src/components/friends/`, `src/components/changelog/`, `src/config/friends.ts`, `src/config/changelog.ts`, and their re-exports in `infoConfig.ts`.
- Icons: build from `src/images/JacquesFinalLogo.jpg` (orange pi logo), cropped to the orange square, with `sips`.
  Replace in place `public/apple-touch-icon.png` (180), `public/android-chrome-192x192.png`, `public/android-chrome-512x512.png`, `public/favicon-16x16.png`, `public/favicon-32x32.png`.
  Replace `src/app/favicon.ico` with `src/app/icon.png` (Next app-dir convention; `sips` cannot write `.ico`).
- Delete `.github/FUNDING.yml` (Sponsor button for Corey) and `README.zh.md`.
- Rewrite `README.md` short: what the site is, `pnpm` dev/build, deploy on push to `main`, credit to Corey Chiu's MIT template.
- `package.json`: `name` → `jacques-attinger-portfolio`, `author` → `Jacques Attinger`.
- `LICENSE`: keep Corey's copyright line (MIT requires it) and add `Copyright (c) 2026 Jacques Attinger`.

### B. Broken bits + link preview
- Footer visit counter: remove `VisitData` from `Footer.tsx`, delete the component and `src/app/api/visit-stats/` (it cannot work on a static host and shows `-`).
- Add `siteUrl = 'https://jacquesattinger.github.io'` in `siteConfig.ts` (env var as override); use it in `sitemap.ts`, `robots.ts`, and `metadataBase`.
  Sitemap entries become `/`, `/projects`, `/research` (drop `changelog`, `friends`, and the missing `resources`).
  Remove the dead RSS `alternates` and the `feed` route (it returns 404 text).
- `CustomIcon.tsx`: one size for all logos, `object-contain` so non-square logos are not squashed; fix the `pritzermolecularengineering` key typo or delete the case if unused after PR 1.
- Header avatar: replace the 1.5 MB `geminiswirlypainting.png` with a 256 px copy (the image stays the same).
- `public/site.webmanifest`: `name`/`short_name` → `Jacques Attinger`.
- OpenGraph + Twitter card metadata in `layout.tsx` (title, description, url, site name) with `src/app/opengraph-image.jpg` (1200×630 crop of `zoomedoutJacques.jpg`).
- Plausible script: render only when its env vars are set.
- Small fixes: `text-md` (no-op class) → `text-base`; Education `sr-only` labels `Company`/`Title` → `School`/`Degree`; remove empty intro `<p>` on Projects and Research.

### C. Dead code and files (delete only after `grep` shows no importer)
- The 9 template entries in the `projects` array and anything only they use (`ProjectCard` if unused, the 7 template logo PNGs).
- `src/config/activity.ts`, `techIcons`, `aboutMeHeadline`, `aboutParagraphs`, commented-out blog strings, `src/config/page.tsx`, `src/content/blog/test-blog.mdx`, `Newsletter.tsx`, `Feed.tsx`, `GithubRepo.tsx`, `about/SocialLinks.tsx`, unused imports in `page.tsx`/`projects/page.tsx`/`Header.tsx`.
- Unused images: `src/images/avatar.jpg`, `portrait.jpg`, `Jacquesphoto.jpg`; `public/images/icon/` duplicates (`argonne.jpeg`, `argonne.jpg`, `iowastate*`, `pritzkermolecularengineering.jpg`, `pmetransparent.png` if unused, `uchicago.svg`, `flux1.png`, `github-cards.png`).
  `JacquesFinalLogo.jpg` stays as the icon source.
- `.github/workflows/snk.yml`, `.github/snk.yml`, and `public/github-contribution-snake/`: the snake is not shown on the site, and this workflow adds a bot commit to `main` every day (634 so far).
- Stale `package-lock.json` (CI uses pnpm); the 5 tracked `.DS_Store` files, plus `.DS_Store` in `.gitignore`.
- Kept on purpose: MDX config (`mdx-components.tsx`, `withMDX`), `vercel.json` (harmless; a Vercel project may still point at the repo).

### D. Pre-commit lint hook
- Add `husky` + `lint-staged` dev dependencies, `"prepare": "husky"`, `.husky/pre-commit` → `pnpm exec lint-staged`.
- lint-staged: `*.{ts,tsx}` → `eslint --fix` + `prettier --write`; `*.{js,mjs,json,css,md,yml}` → `prettier --write`.
- `deploy.yml`: add a `pnpm lint` step before `pnpm build`.
- Prettier formats only the files a commit touches (no repo-wide reformat).
- Never `--no-verify`.

## Verification (both PRs)

1. `npx -y pnpm@9 install --frozen-lockfile`, then `pnpm lint` and `pnpm build` (static export to `out/`) with no errors.
2. Serve `out/` locally (`python3 -m http.server -d out 4321`) and check in Chrome at 1440 px and 390 px width, light and dark mode:
   - Home: headline, intro, resume link opens the new PDF (no phone), 5 social icons with clean URLs (no `utm_source`), Work (4 entries, Hemut logo), Education (degree, GPA, dates).
   - Projects: 7 cards in order, tags wrap cleanly, ChessBuddy not clickable with "Private repo" tag, other cards open the right repo.
   - Research: MRS paper first, PDF opens in a new tab, "Jacques W. Attinger" bolded.
   - After PR 2: `/friends` and `/changelog` give 404, pi favicon in tab, no visit counter, logos not squashed, `sitemap.xml`/`robots.txt` use the real domain, OG tags present in page source.
3. Commit with the hook active (PR 2) to prove it runs.
4. Kill the local server and any other process I started before reporting done.

## Out of scope / follow-ups for you
- Ask dvairus to make ChessBuddy public, then add its link (one line).
- Swap the paper link to the DOI when MRS Communications publishes it.
- Update the empty GitHub profile bio to match the new headline.
- A TickTick release build would make that card stronger.
