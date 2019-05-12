var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync');

gulp.task('pug', function () {
  return gulp.src(config.origin.views)
    .pipe($.changed('pug', { extension: '.pug' }))
    .pipe($.pug({ pretty: true }))
    .pipe(gulp.dest(config.dest.views))
    .pipe(browserSync.stream());
});
