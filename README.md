# Carleton Block Theme

A design-system-driven WordPress block theme built for Carleton University. Powered by `theme.json` v3, fluid typography, responsive spacing, and a SCSS + esbuild build pipeline.

---

## Why This Theme?

- **Brand consistency** — Carleton's red, navy, and neutral palette is baked into every block.
- **Fluid & responsive** — Typography and spacing scale with the viewport via `clamp()` and `min()`.
- **Design tokens** — A single source of truth for colours, spacing, shadows, and typography lives in CSS custom properties.
- **Editor parity** — The same stylesheets load in the block editor and on the front end.
- **Per-block styling** — Block-specific stylesheets are auto-registered and only load when the block is present.
- **Zero lock-in** — WordPress core block APIs only; no page builders, no plugin dependencies.

---

## At a Glance

| Feature        | Details                                            |
| -------------- | -------------------------------------------------- |
| WordPress      | 6.4+                                               |
| PHP            | 8+                                                 |
| Theme JSON     | Version 3                                          |
| Font           | Inter — self-hosted, 3 weights × 2 styles          |
| Colour Palette | 11 brand & neutral colours                         |
| Spacing Scale  | 7-step responsive scale                            |
| Shadow Presets | 3 (Natural, Sharp, Outlined)                       |
| Build Tools    | sass + esbuild                                     |
| Code Standards | ESLint, Stylelint, Prettier, PHPCS (WPCS), PHPStan |
| CI             | GitHub Actions on PR and `main`                    |
| Pre-commit     | husky + lint-staged                                |

---

## Quick Start

```bash
pnpm install     # front-end dependencies + husky setup
composer install # PHP dependencies (PHPCS, PHPStan)

pnpm run start   # watch and rebuild on change
pnpm run build   # production build
pnpm run lint    # all linters: ESLint, Stylelint, PHPCS, PHPStan
```

---

## Documentation

In-depth docs live in [`docs/`](docs/). Start with the [Documentation Overview](docs/README.md).

---

## License

GNU General Public License v2 or later — [read the full license](http://www.gnu.org/licenses/gpl-2.0.html).
