var babelify = require('babelify'),
browserify = require('browserify'),
gulp = require('gulp'),
rename = require('gulp-rename'),
sass = require('gulp-sass'),
source = require('vinyl-source-stream'),
eslint = require('gulp-eslint'),
jasmineBrowser = require('gulp-jasmine-browser'),
postcss = require('gulp-postcss'),
sourcemaps   = require('gulp-sourcemaps'),
autoprefixer = require('autoprefixer'),
reporters = require('jasmine-reporters'),
webserver = require('gulp-webserver'),
livereload = require('gulp-livereload');

const src = 'src';
const dist = 'dist';
const paths = {
  js: src + '/js/**/*.js',
  scss: src + '/styles/**/*.scss'
};

gulp.task('default', [ 'build' ]);

gulp.task('build', [
  'copy:html',
  'js:bundle',
  'css:bundle',
  'autoprefixer'
]);

gulp.task('dev', [
  'build',
  'watch',
  // 'jasmine',
  'webserver'
]);

gulp.task('copy:html', () => gulp
  .src('src/index.html')
  .pipe(gulp.dest('dist'))
);

// gulp.task('jasmine', () =>
//     gulp.src('src/**/*Spec.js')
//         .pipe(jasmine({
//             verbose: true,
//             includeStackTrace: true,
//             reporter: new reporters.TerminalReporter()
//         }))
// );

gulp.task('webserver', () => {
  gulp.src(dist)
  .pipe(webserver({
    open: true,
    port: 5050,
    fallback: 'index.html'
  }));
});

gulp.task('lint', () => {
  return gulp.src([paths.js,'!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('autoprefixer', () => {
  return gulp.src('./src/**/*.css')
  .pipe(sourcemaps.init())
  .pipe(postcss([ autoprefixer() ]))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./' + dist));
});

gulp.task('css:bundle', () => {
  gulp.src('./src/styles/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('js:bundle', () => {
  var bundler = browserify({
    entry: './src/main.js',
    debug: true
  });

  return bundler
  .add('./src/main.js')
  .transform(babelify)
  .bundle()
  .pipe(source('./src/main.js'))
  .pipe(rename('main.js'))
  .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch('src/**/*.js', [
    'js:bundle',
    'lint'
    // 'jasmine'
  ]);
  gulp.watch('src/styles/**/*.scss', ['css:bundle', 'autoprefixer']);
  gulp.watch('www/**').on('change', livereload.changed);
});
