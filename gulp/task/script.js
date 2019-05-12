var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync');

gulp.task('js', function () {
  return gulp.src(config.origin.js)
    .pipe($.changed('js', { extension: '.js' }))
    .pipe($.concat('app.js'))
    .pipe(gulp.dest(config.dest.js))
    .pipe(browserSync.stream());
});