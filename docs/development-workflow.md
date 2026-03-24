# Development Workflow

This guide covers the build tooling, project structure, and day-to-day development commands for the Carleton Block Theme.

---

## Prerequisites

| Tool | Version |
| --- | --- |
| Node.js | LTS recommended |
| npm | Included with Node |
| Composer | 2.x |
| WordPress | 6.4+ |
| PHP | 7.4+ |

---

## Installation

```bash
# Front-end dependencies (PostCSS, esbuild, etc.)
npm install

# PHP dependencies (WPCS linting)
composer install
```

---

## Build Commands

| Command | Description |
| --- | --- |
| `npm run build` | Clean output directories, then compile all CSS and JS for production |
| `npm run start` | Watch all source files and rebuild automatically on change |
| `npm run build:css` | Compile `src/styles.css` → `assets/css/styles.css` |
| `npm run build:editor` | Compile `src/editor.css` → `assets/css/editor.css` |
| `npm run build:blocks` | Compile `src/css/blocks/*.css` → `assets/css/blocks/` |
| `npm run build:js` | Bundle `src/script.js` → `assets/js/script.js` (minified) |
| `npm run clean` | Remove `assets/css/` and `assets/js/` |

### Watch Mode

`npm run start` launches four parallel watchers using `npm-run-all`:

- CSS main stylesheet
- CSS editor stylesheet
- CSS per-block stylesheets
- JavaScript bundle

All four run concurrently, so any change to a source file triggers an immediate rebuild of the relevant output.

---

## CSS Pipeline

### Tools

| Tool | Purpose |
| --- | --- |
| PostCSS | CSS processing engine |
| postcss-import | Resolves `@import` statements, bundling multiple files into one |
| cssnano | Minifies the output for production |

### Configuration

PostCSS is configured in `postcss.config.js`:

```js
module.exports = {
  plugins: [
    require('postcss-import'),  // resolves @imports first
    require('cssnano')({ preset: 'default' }),
  ],
};
```

### Entry Points

| Entry | Output | Purpose |
| --- | --- | --- |
| `src/styles.css` | `assets/css/styles.css` | Front-end stylesheet |
| `src/editor.css` | `assets/css/editor.css` | Block editor stylesheet |
| `src/css/blocks/*.css` | `assets/css/blocks/*.css` | Per-block stylesheets |

Both `src/styles.css` and `src/editor.css` import the same token and base files:

```css
@import './css/tokens.css';
@import './css/base.css';
```

Additional layers (`layout.css`, `utilities.css`) are stubbed out and can be uncommented as needed.

---

## JavaScript Pipeline

| Tool | Purpose |
| --- | --- |
| esbuild | Bundling and minification |

### Entry Point

`src/script.js` → `assets/js/script.js`

The entry point imports modules from `src/js/`. Currently it includes a single console log for development verification. Add new modules by creating files in `src/js/` and importing them in `src/script.js`.

---

## Source File Structure

```
src/
├── styles.css          # Main CSS entry — imports tokens, base, layout, utilities
├── editor.css          # Editor CSS entry — mirrors main for editor parity
├── script.js           # JS entry — imports modules from js/
├── css/
│   ├── tokens.css      # Design tokens (colours, spacing, typography, shadows)
│   ├── base.css        # Base element styles (links, etc.)
│   ├── layout.css      # Layout helpers (currently empty)
│   ├── utilities.css   # Utility classes (currently empty)
│   └── blocks/         # Per-block source styles
│       ├── core-button.css
│       └── core-table.css
└── js/
    └── console.js      # Development logging
```

---

## PHP & Linting

### Code Standards

The theme uses [WordPress Coding Standards (WPCS)](https://github.com/WordPress/WordPress-Coding-Standards) via PHP_CodeSniffer, installed through Composer.

| Command | Description |
| --- | --- |
| `composer lint` | Check PHP files against WPCS |
| `composer format` | Auto-fix coding standard violations |

### Autoloading

PHP classes in `classes/` are autoloaded via Composer's classmap:

```json
{
  "autoload": {
    "classmap": ["classes/"]
  }
}
```

After adding a new class, run `composer dump-autoload` to regenerate the classmap.

---

## Asset Enqueueing

The `CuBlockTheme\Enqueues` class in `classes/class-enqueues.php` handles all asset registration:

| Hook | Method | What It Does |
| --- | --- | --- |
| `after_setup_theme` | `setup()` | Adds editor style support; loads `styles.css` and `editor.css` in the editor |
| `wp_enqueue_scripts` | `enqueue_styles()` | Enqueues the front-end stylesheet with `filemtime()` cache-busting |
| `wp_enqueue_scripts` | `enqueue_scripts()` | Enqueues the front-end JS bundle (only if the file exists) |
| `init` | `enqueue_block_styles()` | Auto-registers all CSS files in `assets/css/blocks/` as block-specific stylesheets |
| `init` | `register_pattern_categories()` | Registers the "Carleton Patterns" block pattern category |

### Per-Block Auto-Registration

The `enqueue_block_styles()` method scans `assets/css/blocks/` for CSS files and registers each one using `wp_enqueue_block_style()`. The filename convention `core-blockname.css` is converted to the block name `core/blockname` automatically. These stylesheets only load on pages where the block is present.

---

## Block Style Variations

Style variations are JSON files in `styles/`, organized by block type:

```
styles/
└── buttons/
    └── secondary.json
```

Each file follows the `theme.json` schema and WordPress auto-discovers them. No PHP registration is needed.

---

## Block Patterns

The theme registers a "Carleton Patterns" pattern category. Pattern files go in the `patterns/` directory using the [standard WordPress pattern format](https://developer.wordpress.org/themes/features/block-patterns/) with a PHP file header comment.

---

## Adding New CSS Layers

1. Create or edit the CSS file in `src/css/`.
2. Import it in `src/styles.css` and `src/editor.css` to maintain editor parity.
3. Run `npm run build` or let the watcher pick up the change.

## Adding New Block Styles

1. Create `src/css/blocks/core-blockname.css`.
2. Run `npm run build:blocks` (or let the watcher handle it).
3. The `Enqueues` class will auto-register it on the next page load.

## Adding New JavaScript Modules

1. Create a new file in `src/js/`.
2. Import it in `src/script.js`.
3. Run `npm run build:js` (or let the watcher handle it).
