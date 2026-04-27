# CI

[`.github/workflows/ci.yml`](../.github/workflows/ci.yml) — runs on every PR and on push to `main`.

## Triggers

| Event               | When                            |
| ------------------- | ------------------------------- |
| `pull_request`      | Any PR target                   |
| `push` to `main`    | After merge                     |
| `workflow_dispatch` | Manual run from the Actions tab |

A `concurrency` group cancels older in-progress runs on the same branch when a newer push arrives.

## Jobs

The two jobs run in parallel.

### Lint & Build (Node)

1. Checkout
2. Setup pnpm
3. Setup Node from `.nvmrc` (with `cache: pnpm`)
4. `pnpm install --frozen-lockfile`
5. `pnpm run lint:js`
6. `pnpm run lint:css`
7. `pnpm run format:check`
8. `pnpm run build`

### Lint (PHP)

1. Checkout
2. Setup PHP 8.2 (`shivammathur/setup-php@v2`, no coverage)
3. `ramsey/composer-install@v3` (caches `vendor/`)
4. `composer lint`
5. `composer phpstan`

## Why split commands instead of `pnpm run lint`?

The unified `pnpm run lint` calls `composer lint` internally, which would require the Node job to install PHP. Splitting by language lets each job run with minimal setup, in parallel.
