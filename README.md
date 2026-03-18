# Carleton Block Theme

A modern WordPress block theme for Carleton University, built with `theme.json` v3 and a PostCSS-based build pipeline.

## Requirements

- WordPress 6.4+
- PHP 7.4+
- Node.js (for front-end build tools)
- Composer (for PHP linting)

## Getting Started

Install dependencies:

```bash
npm install
```

## Build Commands

| Command | Description |
| --- | --- |
| `npm run build` | Clean and compile all CSS and JS for production |
| `npm run start` | Watch all source files and rebuild on change |
| `npm run build:css` | Compile main stylesheet |
| `npm run build:editor` | Compile editor stylesheet |
| `npm run build:blocks` | Compile per-block stylesheets |
| `npm run build:js` | Bundle and minify JavaScript |
| `npm run clean` | Remove compiled assets |

## Linting

| Command | Description |
| --- | --- |
| `composer lint` | Run PHP_CodeSniffer (WPCS) |
| `composer format` | Auto-fix PHP coding standards |

## Project Structure

```
├── assets/              # Compiled assets (do not edit directly)
│   ├── css/             # Compiled stylesheets
│   │   ├── styles.css   # Main frontend styles
│   │   ├── editor.css   # Editor-specific styles
│   │   └── blocks/      # Per-block stylesheets
│   ├── fonts/           # Self-hosted web fonts (Inter, Playfair Display)
│   ├── images/          # Theme images
│   └── js/              # Compiled JavaScript
├── classes/             # PHP classes (autoloaded via Composer)
│   └── class-enqueues.php
├── parts/               # Block template parts
│   ├── header.html
│   └── footer.html
├── src/                 # Source files (edit these)
│   ├── styles.css       # Main CSS entry point
│   ├── editor.css       # Editor CSS entry point
│   ├── script.js        # JS entry point
│   ├── css/
│   │   ├── tokens.css   # Design tokens (colors, spacing, typography)
│   │   ├── base.css     # Base element styles
│   │   ├── layout.css   # Layout styles
│   │   ├── utilities.css
│   │   └── blocks/      # Per-block source styles
│   └── js/              # JS modules
├── styles/              # Block style variations
│   └── buttons/
├── templates/           # Block templates
│   ├── index.html
│   └── page.html
├── functions.php        # Theme bootstrap
├── style.css            # Theme metadata
└── theme.json           # Global settings and styles (v3)
```

## Theme Configuration

Configuration is managed through `theme.json` and includes:

- **Color palette** — Carleton brand colors (primary red, secondary blue, neutral greys)
- **Typography** — Inter font family with fluid font sizes
- **Spacing** — Responsive spacing scale using `min()` with viewport units
- **Layout** — 1024px content width, 1280px wide width
- **Shadows** — Five preset shadow styles
- **Gradients** — Brand-aligned gradient presets

## How It Works

- Source CSS in `src/` is processed through PostCSS (with `postcss-import` and `cssnano`) and output to `assets/css/`
- JavaScript in `src/` is bundled with esbuild and output to `assets/js/`
- The `Enqueues` class in `classes/` handles all asset registration, including automatic per-block stylesheet loading from `assets/css/blocks/`
- Block style variations are defined as JSON files in `styles/`

## License

GNU General Public License v2 or later. See [LICENSE](http://www.gnu.org/licenses/gpl-2.0.html).