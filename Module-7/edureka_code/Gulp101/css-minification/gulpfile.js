var gulp=require('gulp');
var cssnano = require('gulp-cssnano');
var concat=require('gulp-concat');

gulp.task('cssmin', function() {

        return gulp.src('css/*.css')
        .pipe(concat('combined.min.js'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist'));

});

gulp.task('default',['cssmin']);
