# Shadows

Three preset shadows defined in [`theme-rds.json`](../theme-rds.json), available on any block that supports the shadow control.

| Name     | Slug       | Value                                                             |
| -------- | ---------- | ----------------------------------------------------------------- |
| Natural  | `natural`  | `6px 6px 9px rgba(0, 0, 0, 0.2)`                                  |
| Sharp    | `sharp`    | `6px 6px 0px rgba(0, 0, 0, 0.2)`                                  |
| Outlined | `outlined` | `6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(214, 214, 214)` |

## How to reference

| Context               | Syntax                               |
| --------------------- | ------------------------------------ |
| `theme.json` / editor | `"var:preset\|shadow\|natural"`      |
| CSS / SCSS            | `var(--wp--preset--shadow--natural)` |
| CSS via design token  | `var(--rds--shadow-natural)`         |
