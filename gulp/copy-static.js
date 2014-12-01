var gulp = require('gulp');
var handleErrors = require('./error');

module.exports = function() {
    var src = gulp.src('./static/**/*');
    var dest = gulp.dest('./build');
    var stream = src
        .pipe(handleErrors())
        .pipe(dest);

    return stream;
};
