var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync');

gulp.task('jslib', function () {
  return gulp.src(config.origin.jsLib)
    .pipe($.changed('jslib', { extension: '.js' }))
    .pipe($.concat('lib.js'))
    .pipe(gulp.dest(config.dest.js))
    .pipe(browserSync.stream());
});
