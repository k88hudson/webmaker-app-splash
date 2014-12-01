var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-minify-css');
var handleErrors = require('./error');

module.exports = function() {
    var src = gulp.src('./less/styles.less');
    var dest = gulp.dest('./build/styles');
    var stream = src
        .pipe(handleErrors())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minifyCSS({keepBreaks:false}))
        .pipe(sourcemaps.write())
        .pipe(dest);

    return stream;
};
