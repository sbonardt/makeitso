var gulp            = require('gulp');
// load 'em all'
var plugins         = require('gulp-load-plugins')();
//
// load specifics
var gutil           = require('gulp-util');
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var runSequence     = require('run-sequence');
var cleanCss        = require('gulp-clean-css');
var sourcemaps      = require('gulp-sourcemaps');

// Allows gulp --dev to be run for a more verbose output.
// So if you want readable css, do "gulp --dev"
var isProduction = true;
var sassStyle = 'compressed';

if (gutil.env.dev === true) {
  sassStyle = 'expanded';
  isProduction = false;
}

var jsFiles = [
    '../js/lib/modernizr.custom.40091.js',
    '../js/lib/jquery-1.11.1.min.js',
    '../js/lib/viewportSize-min.js',
    '../js/custom.js'
];

var jsDest = '../js/';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
    .pipe(plugins.concat('scripts.min.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(jsDest));
});

gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['sass']); 
    gulp.watch('../*.css', ['autoprefixer']);
    gulp.watch('../js/**/*.js', ['scripts']);
});

gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
    .pipe(! isProduction ? plugins.sourcemaps.init() : gutil.noop())
    .pipe(plugins.sass({
        outputStyle: sassStyle
    }))
    .pipe(plugins.autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(isProduction ? plugins.cleanCss() : gutil.noop())
    .pipe(! isProduction ?  plugins.sourcemaps.write() : gutil.noop())
    .pipe(gulp.dest('../css/'))
});

gulp.task('default', function(callback) {
    runSequence('sass', 'watch', callback);
});
