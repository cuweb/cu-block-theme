# Git hooks

Pre-commit hooks via [husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged).

## How it's wired

| Piece                                  | Role                                                                                 |
| -------------------------------------- | ------------------------------------------------------------------------------------ |
| `prepare` script in `package.json`     | Runs `husky` after `pnpm install`, registering `.husky/_` as the git hooks directory |
| `.husky/pre-commit`                    | One-line script: `pnpm exec lint-staged`                                             |
| `lint-staged` config in `package.json` | Maps file globs to commands                                                          |

## What runs on commit

lint-staged operates only on staged files, in parallel by glob:

| Glob                        | Commands (in order)                      |
| --------------------------- | ---------------------------------------- |
| `*.{js,mjs}`                | `eslint --fix` → `prettier --write`      |
| `*.{scss,css}`              | `stylelint --fix` → `prettier --write`   |
| `*.{json,md,yml,yaml,html}` | `prettier --write`                       |
| `*.php`                     | `vendor/bin/phpcbf` → `vendor/bin/phpcs` |

Auto-fixes are applied and re-staged automatically. If the final check still fails, the commit is blocked.

## Bypassing the hook

`git commit --no-verify` skips it. Don't use it for everyday work — CI will catch the same issues anyway and the round-trip is slower.

## After cloning

`pnpm install` triggers the `prepare` script, which sets up the hook automatically. No manual setup needed.
