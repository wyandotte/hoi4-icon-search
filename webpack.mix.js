let mix = require('laravel-mix').mix;
let tailwindcss = require('tailwindcss');

mix.js('src/js/app.js', 'docs/assets/')
   .sass('src/scss/app.sass', 'docs/assets')
    .options({
        processCssUrls: false,        
        postCss: [ tailwindcss('./tailwind.js') ]
    })
   .setPublicPath('docs');
