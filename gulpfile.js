'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browser = require('browser-sync');

const config = {
    dir: {
        sass: './assets/sass',
        css: './assets/css'
    }
}

gulp.task('sass', () => {
    return gulp.src(`${config.dir.sass}/**/*.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.dir.css))
        .pipe(browser.reload({stream:true}));
});

gulp.task('sass:watch', () => {
    gulp.watch(`${config.dir.sass}/**/*.scss`, ['sass']);
});

gulp.task("server", () => {
  browser({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("default", ['server', 'sass:watch'], () => {
    gulp.watch(['./*.html'], () => {
        gulp.src(['./*.html']).pipe(browser.reload({stream:true}));
    });
});
