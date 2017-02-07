const gulp = require('gulp'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      concat = require('gulp-concat'),
      del = require('del'),
      uglify = require('gulp-uglify'),
      print = require('gulp-print'),
      babel = require('gulp-babel');
    // babel-preset-es2015

const CacheBuster = require('gulp-cachebust');
const cachebust = new CacheBuster();

gulp.task('clean', (cb) => {
  del([
    'dist'
  ], cb);
});

// TESTING
gulp.task('watch', () => {
    return gulp.watch(['./index.html','./views/*.html', './assets/*.*css', './js/**/*.js'], ['build']);
});
//./partials/*.html
// ./styles/*.*css

gulp.task('build', ['clean', 'build-css', 'build-js'],
() => {
   return gulp.src('index.html')
      .pipe(cachebust.references())
      .pipe(gulp.dest('dist'));
});

gulp.task('build-css', () => {
  gulp.src('./styles/*')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cachebust.resources())
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-js', () => {
   return gulp.src('js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js'));
});


//#######################################//

// PRODUCTION
gulp.task('watch-prod', () => {
    return gulp.watch(['./index.html','./partials/*.html', './styles/*.*css', './js/**/*.js'], ['build-prod']);
});

gulp.task('build-prod', ['clean', 'build-css-prod', 'build-js-prod'],
() => {
   return gulp.src('index.html')
      .pipe(cachebust.references())
      .pipe(gulp.dest('dist'));
});

gulp.task('build-css-prod', () => {
  gulp.src('./styles/*')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cachebust.resources())
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-js-prod', () => {
   return gulp.src('js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js'));
});
