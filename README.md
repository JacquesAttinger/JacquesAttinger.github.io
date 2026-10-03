# Jacques Attinger — portfolio

Personal site for Jacques Attinger, live at <https://jacquesattinger.github.io>.
It is a static [Next.js](https://nextjs.org) site (App Router, Tailwind CSS) exported to plain HTML.

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm lint
pnpm build    # static export to ./out
```

Page content lives in `src/config/*.ts` (work, education, projects, research, social links).

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `./out` to GitHub Pages.

## Credit

Built from the MIT-licensed [portfolio template](https://github.com/iamcorey/coreychiu-portfolio-template) by Corey Chiu.
