# Getting started

Bring the theme up locally.

## Prerequisites

| Tool     | Version                                     |
| -------- | ------------------------------------------- |
| Node.js  | 22 (see `.nvmrc`)                           |
| pnpm     | 10 (see `packageManager` in `package.json`) |
| PHP      | 8+                                          |
| Composer | 2+                                          |

## Install

```bash
pnpm install
composer install
```

The `prepare` script runs `husky` during `pnpm install`, wiring up the pre-commit hook automatically.

## Common commands

| Command           | What it does                                          |
| ----------------- | ----------------------------------------------------- |
| `pnpm run start`  | Watch SCSS and JS, rebuild on save                    |
| `pnpm run build`  | Production build (minified, no maps)                  |
| `pnpm run lint`   | Run all linters: ESLint → Stylelint → PHPCS → PHPStan |
| `pnpm run format` | Auto-format with Prettier and `phpcbf`                |

For granular subsets see [linting](linting.md) and [build pipeline](build-pipeline.md).

## Where things live

- Source SCSS / JS — `src/`
- Compiled output — `assets/` (generated; don't hand-edit)
- Templates — `templates/` (HTML), parts in `parts/`
- PHP modules — `classes/` (Composer-autoloaded)
- Design system source of truth — `theme-rds.json` (injected via filter) + `theme.json` (local overrides) + `src/css/tokens.scss`
