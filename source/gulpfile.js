var gulp            = require('gulp');
// Requires the gulp-sass plugin
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
//var browserSync = require('browser-sync').create();
var cssnano         = require('gulp-cssnano');
var gulpIf          = require('gulp-if');
var runSequence     = require('run-sequence');



gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('../css'))
    // .pipe(browserSync.reload({
    //   stream: true
    // }))
});

gulp.task('watch', function (){
    gulp.watch('scss/**/*.scss', ['sass']); 
    gulp.watch('../*.css', ['autoprefixer']);
});

gulp.task('autoprefixer', function (){
    gulp.src('../css/screen.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('../css'))
});

gulp.task('minifycss', function(){
    return gulp.src('../css/**/*.css')
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('../css'))
});

// gulp.task('browserSync', function() {
//   browserSync.init({
//     server: {
//       baseDir: '/'
//     },
//   })
// })

// gulp.task('watch', ['browserSync', 'sass'], function(){
gulp.task('default', function(callback) {
    runSequence('sass', 'autoprefixer', 'watch', callback);
})

// gulp.task('watch', ['browserSync', 'sass'], function(){
gulp.task('build', function(){
    gulp.watch('../css/**/*.css', ['minifycss']); 
})