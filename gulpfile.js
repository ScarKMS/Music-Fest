const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');



/* PATHS */
const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

// Funcion que compila SASS

function compilarCSS() {
    return src(paths.scss)
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css'))

}

function minificarCSS() {
    return src(paths.scss)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'))
}

function javascript() {
    return src(paths.js)
        .pipe(concat('bundle.js'))
        .pipe(dest('./build/js'))
}

function imagenes() {
    return src(paths.imagenes)
        .pipe(imagemin())
        .pipe(dest('./build/img'))
        .pipe(notify({ message: 'Imagen Minificada' }));
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('./build/img'))
        .pipe(notify({ message: 'Imagen convertida' }));
}

function watchArchivos() {
    watch(paths.scss, compilarCSS);
    watch(paths.js, javascript)
}

//exports.compilarCSS = compilarCSS;
exports.minificarCSS = minificarCSS;
//exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;
//exports.versionWebp = versionWebp;

exports.default = series(compilarCSS, javascript, watchArchivos);