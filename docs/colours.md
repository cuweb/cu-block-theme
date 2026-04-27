# Colours

Defined in [`theme-rds.json`](../theme-rds.json), injected as a default theme.json layer via `wp_theme_json_data_default`. WordPress default colours are disabled — only this palette appears in the editor.

## Editor palette

11 colors total.

### Brand

| Name         | Slug           | Hex       |
| ------------ | -------------- | --------- |
| Primary      | `primary`      | `#e91c24` |
| Primary Dark | `primary-dark` | `#a21218` |
| Secondary    | `secondary`    | `#426587` |

### Neutrals

| Name         | Slug           | Hex       |
| ------------ | -------------- | --------- |
| Black        | `black`        | `#191919` |
| Grey Dark    | `grey-dark`    | `#434343` |
| Grey         | `grey`         | `#767676` |
| Grey Light   | `grey-light`   | `#d6d6d6` |
| Grey Lighter | `grey-lighter` | `#e6e6e6` |
| Grey Pale    | `grey-pale`    | `#f5f5f5` |
| Grey Faint   | `grey-faint`   | `#fafafa` |
| White        | `white`        | `#ffffff` |

## Gradients

| Name                 | Slug                          | Source           |
| -------------------- | ----------------------------- | ---------------- |
| Red To Dark Red      | `custom-red-to-dark-red`      | `theme-rds.json` |
| Dark Grey To Black   | `custom-dark-grey-to-black`   | `theme-rds.json` |
| White To Grey Bottom | `custom-white-to-grey-bottom` | `theme.json`     |

Custom gradient input is disabled — only these presets can be selected.

## CSS-only feedback colours

These exist as design tokens for use in custom CSS, but are **not** part of the editor palette.

| Token                  | Hex       |
| ---------------------- | --------- |
| `--rds--color-success` | `#00a32a` |
| `--rds--color-warning` | `#dba617` |
| `--rds--color-error`   | `#e91c24` |
| `--rds--color-info`    | `#72aee6` |

There's also `--rds--color-secondary-dark: #2c3c4e` — used by the secondary button variation but not exposed in the palette.

## Defaults

Set globally in `theme-rds.json`:

| Surface           | Colour                 |
| ----------------- | ---------------------- |
| Page background   | White                  |
| Body text         | Black                  |
| Headings          | Black                  |
| Links             | Primary (Carleton red) |
| Button background | Primary                |
| Button text       | White                  |

## How to reference

| Context                                | Syntax                              |
| -------------------------------------- | ----------------------------------- |
| Inside `theme.json` / `theme-rds.json` | `"var:preset\|color\|primary"`      |
| Inside CSS / SCSS                      | `var(--wp--preset--color--primary)` |
| Inside custom CSS via tokens           | `var(--rds--color-primary)`         |

## Editor restrictions

Set in `theme-rds.json` under `settings.color`:

| Setting          | Value   | Effect                     |
| ---------------- | ------- | -------------------------- |
| `custom`         | `false` | No arbitrary hex input     |
| `customDuotone`  | `false` | No arbitrary duotone tints |
| `customGradient` | `false` | Only preset gradients      |
