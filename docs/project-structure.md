# Project Structure

An overview of every directory and key file in the Carleton Block Theme.

---

## Directory Map

```
cu-block-theme/
├── assets/                  # Compiled output (do not edit directly)
│   ├── css/
│   │   ├── styles.css       # Compiled front-end stylesheet
│   │   ├── editor.css       # Compiled editor stylesheet
│   │   └── blocks/          # Compiled per-block stylesheets
│   │       ├── core-button.css
│   │       └── core-table.css
│   ├── fonts/
│   │   └── inter/           # Self-hosted Inter font files (.woff2)
│   ├── images/              # Theme images
│   └── js/
│       └── script.js        # Compiled JavaScript bundle
│
├── classes/                 # PHP classes (Composer autoloaded)
│   └── class-enqueues.php   # Asset enqueueing & pattern registration
│
├── docs/                    # Documentation (you are here)
│
├── parts/                   # Block template parts
│   ├── header.html          # Site header with logo, title, CTA buttons
│   └── footer.html          # Site footer with two sections
│
├── patterns/                # Block patterns (empty — ready for additions)
│
├── src/                     # Source files (edit these)
│   ├── styles.css           # Main CSS entry point
│   ├── editor.css           # Editor CSS entry point
│   ├── script.js            # JS entry point
│   ├── css/
│   │   ├── tokens.css       # Design tokens
│   │   ├── base.css         # Base element styles
│   │   ├── layout.css       # Layout helpers (stub)
│   │   ├── utilities.css    # Utility classes (stub)
│   │   └── blocks/          # Per-block source styles
│   └── js/
│       └── console.js       # Development logging module
│
├── styles/                  # Block style variations (JSON)
│   └── buttons/
│       └── secondary.json   # Secondary button style
│
├── templates/               # Block templates
│   ├── index.html           # Fallback / archive template
│   └── page.html            # Static page template
│
├── vendor/                  # Composer dependencies (gitignored in production)
│
├── composer.json            # PHP dependencies & linting scripts
├── functions.php            # Theme bootstrap — autoload & module init
├── package.json             # Node dependencies & build scripts
├── postcss.config.js        # PostCSS plugin configuration
├── style.css                # Theme metadata (name, version, license)
└── theme.json               # Global settings & styles (v3)
```

---

## Key Files

| File | Purpose |
| --- | --- |
| `theme.json` | The central configuration file. Defines colours, typography, spacing, shadows, layout widths, global styles, element styles, block-level styles, and template part registration. |
| `functions.php` | Bootstraps the theme by loading Composer's autoloader and initializing PHP module classes. |
| `style.css` | Contains only the WordPress theme header comment (name, version, license). No actual styles. |
| `postcss.config.js` | Configures PostCSS with `postcss-import` (bundling) and `cssnano` (minification). |
| `src/css/tokens.css` | Single source of truth for all design tokens as CSS custom properties. |
| `classes/class-enqueues.php` | Handles front-end and editor asset loading, per-block stylesheet auto-registration, and pattern category registration. |

---

## Source → Output Flow

```
src/styles.css ──────┐
  ├─ css/tokens.css   │  PostCSS
  └─ css/base.css     ├────────→  assets/css/styles.css
                      │
src/editor.css ──────┤
  ├─ css/tokens.css   │  PostCSS
  └─ css/base.css     ├────────→  assets/css/editor.css
                      │
src/css/blocks/*.css ─┤  PostCSS
                      ├────────→  assets/css/blocks/*.css
                      │
src/script.js ────────┤  esbuild
  └─ js/console.js    └────────→  assets/js/script.js
```

Files in `assets/` are generated output. Always edit the corresponding source in `src/`.
