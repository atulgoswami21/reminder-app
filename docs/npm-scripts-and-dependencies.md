# npm-scripts and dependencies

npm-scripts:
   * `npm run dev` - starts the dev envoirment.
   * `npm run build` - build the frontend files for production
   * `npm test` - runs all the tests, `tools/test-all`
   * `npm run prod` - runs the app in production mode.
   * `npm run coverage` - gets the coverage report of test, will be
   * `npm run lint` - Runs the `tools/lint` linter for `js` and `ts` files.
   * `npm run eslint-fix` - runs eslint with `--fix` flag.
   at `var/nyc/lcov-report/index.html`, you can access coverage report in
   dev-server at `/coverage`.

#### npm dependencies
We prefer to have pinned npm dependencies in `package.json`, the
`devDependencies` are not pinned. This just makes sure we have same version
so any accidental breakage is not introduced.
