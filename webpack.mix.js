let mix = require('laravel-mix').mix;


// Use a temporary 'staging' folder which shouldn't be included in the repo
let path = 'staging'

// Only for production we use the 'docs' folder (for GitHub pages)
if (mix.config.inProduction) {
  path = 'docs'
}

mix.copy('src/assets', path + '/assets')
   .js('src/js/app.js', path + '/assets/')
   .sass('src/scss/app.scss', path + '/assets')
   .copy('src/index.html', path + '/')
   .setPublicPath(path);



// Full API
// mix.js(src, output);
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.combine(files, destination);
// mix.copy(from, to);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public'); <-- Useful for Node apps.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
