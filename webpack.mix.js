let mix = require('laravel-mix').mix;

mix.js('src/js/app.js', 'docs/assets/')
   .sass('src/scss/app.scss', 'docs/assets')
   .setPublicPath('docs');
