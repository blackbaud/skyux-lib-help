# Skyux-Lib-Help

### The SKYUX library for interacting with the Help Widget.

## Getting Started
This library depends on the (feature-page-context)[https://github.com/blackbaud/help-client/tree/feature-page-context] branch of `help-client`.

To run this project locally:

- Clone the (feature-page-context)[https://github.com/blackbaud/help-client/tree/feature-page-context] branch locally.
- `npm install` required dependencies.
- run `npm run build`.
- copy the contents of the `dist` folder to the `node_modules/@blackbaud/help-client` in `skyux-lib-help`.
- update the reference in `node_modules/@blackbaud/skyux-builder/src/app/app.component.ts` to import and use `BBHelpClient` instead of `BBHelp`.
- run `skyux serve` from `skyux-lib-help`
