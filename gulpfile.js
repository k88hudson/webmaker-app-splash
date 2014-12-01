var gulp = require('gulp');
var webserver = require('gulp-webserver');

// Todo: clean
var less = require('./gulp/less');
var copyStatic = require('./gulp/copy-static');

gulp.task('less', less);
gulp.task('copy-static', copyStatic);
gulp.task('build', ['less', 'copy-static']);

// Watch
gulp.task('watch', ['build'], function () {
    gulp.watch(['./{less,static}/**/*.{js,json,less,html}'],['build']);
});

// Serve
gulp.task('dev', ['build', 'watch'], function() {
  gulp.src('build')
    .pipe(webserver({
        port: 1999,
        livereload: true,
        fallback: 'index.html'
    }));
});
