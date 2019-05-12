var gulp = require('gulp');
var config = require('../config');
var imagemin = require('gulp-imagemin');

gulp.task('copy', function () {
  return gulp.src(config.origin.assetsImg)
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(gulp.dest(config.dest.assetsImg));
});