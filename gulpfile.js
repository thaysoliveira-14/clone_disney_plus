// Importa o pacote Gulp
const gulp = require('gulp');

// Importa o pacote gulp-sass e o configura para utilizar o Sass
const sass = require('gulp-sass')(require('sass'));

const imagemin = require('gulp-imagemin')

const uglify = require('gulp-uglify')

function scripts() {
    return gulp.src ('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

// Função para processar os estilos SCSS
function styles() {
    
    // Seleciona todos os arquivos .scss no diretório src/styles/
    return gulp.src('./src/styles/*.scss')

        // Compila o SCSS para CSS, configurando a saída para 'compressed' (comprimido)
        .pipe(sass({ outputStyle: 'compressed' }))

        // Salva o CSS resultante no diretório dist/css/
        .pipe(gulp.dest('./dist/css'));
}

function imagens() {
    return gulp.src('./src/imagens/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/imagens'));
}

exports.default = gulp.parallel(styles, imagens, scripts);
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}