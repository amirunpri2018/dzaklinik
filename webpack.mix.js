const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.options({
    hmrOptions: {
        host: "localhost",
        port: "8787"
    }
});

mix.webpackConfig({
    devServer: {
        proxy: {
            "*": "http://localhost:8000"
        }
    }
});

mix.react("resources/js/app.js", "public/js")
    .react("resources/js/registrasi.js", "public/js")
    .sass("resources/sass/app.scss", "public/css");
