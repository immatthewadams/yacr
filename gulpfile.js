var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('default', ['build', 'watch'], function() {
});

gulp.task('watch', function() {
    gulp.watch('src/scripts/**/*', ['browserify']);
});

gulp.task('build', ['browserify'], function() {
});

gulp.task('browserify', function() {
    return browserify('./src/scripts/main.js')
        .transform('reactify')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('public/js'));
});
