// Importa o pacote Gulp
const gulp = require('gulp');

// Importa o pacote gulp-sass e o configura para utilizar o Sass
const sass = require('gulp-sass')(require('sass'));

// Função para processar os estilos SCSS
function styles() {
    
    // Seleciona todos os arquivos .scss no diretório src/styles/
    return gulp.src('./src/styles/*.scss')

        // Compila o SCSS para CSS, configurando a saída para 'compressed' (comprimido)
        .pipe(sass({ outputStyle: 'compressed' }))

        // Salva o CSS resultante no diretório dist/css/
        .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}