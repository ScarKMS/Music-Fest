const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

// Funcion que compila SASS

function compilarCSS() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css'))

}

function minificarCSS() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'))
}

function watchArchivos() {
    watch('src/scss/**/*.scss', compilarCSS);
}

exports.compilarCSS = compilarCSS;
exports.minificarCSS = minificarCSS;
exports.watchArchivos = watchArchivos;