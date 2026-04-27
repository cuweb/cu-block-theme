# Build pipeline

Two tools handle everything. No custom build script.

## Tools

| Tool                                                       | Job                                                        |
| ---------------------------------------------------------- | ---------------------------------------------------------- |
| [`sass`](https://sass-lang.com/)                           | Compile `.scss` → `.css`, minify with `--style=compressed` |
| [`esbuild`](https://esbuild.github.io/)                    | Bundle and minify JavaScript                               |
| [`npm-run-all`](https://github.com/mysticatea/npm-run-all) | Run multiple watchers in parallel via `run-p`              |

## Source → output

```
src/styles.scss        →  assets/css/styles.css
src/editor.scss        →  assets/css/editor.css
src/css/blocks/*.scss  →  assets/css/blocks/*.css
src/script.js          →  assets/js/script.js
```

The block stylesheets in `src/css/blocks/` are batch-compiled (sass `dir:dir` syntax) and **auto-loaded per block** — `classes/class-enqueues.php` calls `wp_enqueue_block_style()` for each one, so a block's CSS only ships when the block is on the page.

## Scripts

| Command                 | Notes                                                                    |
| ----------------------- | ------------------------------------------------------------------------ |
| `pnpm run build`        | `clean` + compile everything in parallel (production: minified, no maps) |
| `pnpm run start`        | Watch all four streams in parallel (dev: source maps included)           |
| `pnpm run build:css`    | `styles.scss` and `editor.scss`                                          |
| `pnpm run build:blocks` | All `src/css/blocks/*.scss`                                              |
| `pnpm run build:js`     | `script.js`                                                              |
| `pnpm run clean`        | Remove `assets/css` and `assets/js`                                      |

## Watch mode

`pnpm run start` runs three watchers concurrently via `run-p`:

- `start:css` — sass watching `styles.scss` and `editor.scss`
- `start:blocks` — sass watching `src/css/blocks/`
- `start:js` — esbuild watching `script.js` (with `--sourcemap`)

Source maps are emitted in watch mode, suppressed in production.

## Adding a new entry

| If you're adding       | Do this                                                                   |
| ---------------------- | ------------------------------------------------------------------------- |
| A new SCSS partial     | Drop it in `src/css/`, `@use` it from `styles.scss` and `editor.scss`     |
| A per-block stylesheet | Create `src/css/blocks/core-blockname.scss`. Auto-picked up.              |
| A new JS module        | Drop it in `src/js/`, `import` it from `src/script.js`                    |
| A new top-level entry  | Add an input/output pair to `build:css` and `start:css` in `package.json` |
