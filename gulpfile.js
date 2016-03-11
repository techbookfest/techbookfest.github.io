'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

const config = {
    dir: {
        sass: './assets/sass',
        css: './assets/css'
    }
}

gulp.task('sass', () => {
    return gulp.src(`${config.dir.sass}/*.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.dir.css));
});

gulp.task('sass:watch', () => {
    gulp.watch(`${config.dir.sass}/*.scss`, ['sass']);
});
