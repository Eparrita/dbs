    var gulp = require('gulp'),
        sass = require('gulp-sass'),
      rename = require('gulp-rename')
autoprefixer = require('gulp-autoprefixer');

// Compile SASS
gulp.task('compiled', function () {
  gulp.src('./assets/sass/*.sass')
  .pipe(sass({outputStyle:'compact'}).on('error', sass.logError))
  .pipe(autoprefixer({browsers: ['last 2 versions'],cascade: false}))
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('./assets/css'))
});

// detect changes in SASS

gulp.watch('./assets/sass/*.sass',['compiled']);
// Run tasks
gulp.task('default', ['compiled']);
