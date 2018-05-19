const mainBundle = {
  'main': './static/js/index.js',
  'main-css': './static/scss/reminder-app.scss'
};

const FontAwesomeBasePath = './node_modules/@fortawesome/fontawesome-free-webfonts/css/';
const vendorBundle = {
  'vendor': [
      FontAwesomeBasePath + 'fontawesome.css',
      FontAwesomeBasePath + 'fa-solid.css'
    ]
};

const bundles = {
  ...mainBundle,
  ...vendorBundle
};

module.exports = bundles;