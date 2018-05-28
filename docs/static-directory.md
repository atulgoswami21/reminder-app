# `static` directory - frontend files

The static directory holds all the frontend files,
some of which are named pretty in a self-explantory way:
  * `static/js` - Holds all the javascript files for the frontend,
  we use commonjs syntax, which is compiled by webpack to make it run in
  a browser, it is possible to use ES6 `export/import` syntax, most of the files
  currently don't use, simply because we want to require the code in tests
  without any special syntax.

  * `static/scss` - This directory contains all the css files, we use `scss` for the
  css. If you are not familir with scss take a look at [this documentation](https://sass-lang.com/guide).
  Couple of intresting files in that directory `var.scss` holds all the variables like, `$font-size`, `$theme-color`
  which we can modifiy and it should update the color, of font-size across the app which is awesome.
  Another note, since we use webpack any update to scss files in devlopment are hot-reloaded in browsers,
  meaning updated without reload in browser, which make devlopment and design much more pleasant.

  * `static/templates` - All the frontend html templates lives here, all the main page files should
  go on top level here, but there is one more directory called `partials` which holds, handlebars templates
  which we can require anywhere in templates, like `{{> partial-name-without-.hbs.extension }}`. Its possible
  to use handlebars helpers here, all the helpers are currently located at `app/handlebars-helpers.js` files,
  if you want to add one you will need to create the helper there and export it.
  <!-- TODO: Add a note about render_bundle handlebars helper. -->

  * `static/webpack-bundles` - created when you run `npm run build`, holds all the created frontend
  files by webpack, all the files will have sourcemaps, and hashes in files names. The file name are updated
  across templates using the `render_bundle` handlebars helpers.

<!-- TODO: Add a section explaining the webpack process. -->
