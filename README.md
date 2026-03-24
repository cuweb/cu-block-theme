# Carleton Block Theme

A design-system-driven WordPress block theme built for Carleton University. Powered by `theme.json` v3, fluid typography, responsive spacing, and a modern PostCSS + esbuild build pipeline — delivering a consistent, branded experience from the editor to the front end.

---

## Why This Theme?

- **Brand consistency** — Carleton's red, navy, and neutral palette is baked into every block, ensuring on-brand pages without manual colour picking.
- **Fluid & responsive** — Typography and spacing scale fluidly between viewports using `clamp()` and `min()`, so content looks great on any screen.
- **Design tokens** — A single source of truth for colours, spacing, shadows, and typography lives in CSS custom properties, making updates effortless.
- **Editor parity** — The same stylesheets load in the block editor, so what you see while editing is what visitors see on the front end.
- **Per-block styling** — Block-specific stylesheets are auto-registered and only load when a block is present on the page, keeping performance lean.
- **Zero lock-in** — Built entirely on WordPress core block APIs. No proprietary page builders, no plugin dependencies.

---

## At a Glance

| Feature | Details |
| --- | --- |
| WordPress | 6.4+ |
| PHP | 7.4+ |
| Theme JSON | Version 3 (WP 7.0 schema) |
| Font | Inter — self-hosted, 6 weights |
| Colour Palette | 12 brand & neutral colours |
| Spacing Scale | 7-step responsive scale |
| Shadow Presets | 5 styles (Natural → Crisp) |
| Build Tools | PostCSS + esbuild |
| Code Standards | WPCS via PHP_CodeSniffer |

---

## Quick Start

```bash
# Install front-end dependencies
npm install

# Development — watch & rebuild on change
npm run start

# Production — clean build with minification
npm run build
```

---

## Documentation

In-depth documentation for the design system, templates, and development workflow lives in the [`docs/`](docs/) directory. Start with the [Documentation Overview](docs/README.md).

---

## License

GNU General Public License v2 or later — [read the full license](http://www.gnu.org/licenses/gpl-2.0.html).