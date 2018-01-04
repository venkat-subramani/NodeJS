var gulp=require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var cssnano=require('gulp-cssnano');

gulp.task('cssmin', function() {
    return gulp.src('css/*.css')
        .pipe(concat('combined.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist'));
});

gulp.task('uglify', function() {
        return gulp.src('js/*.js')
        .pipe(concat('combined.min.js'))
        .pipe(uglify({mangle:false}))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('js/*.js',['uglify']);
  gulp.watch('css/*.css',['cssmin']);
});

gulp.task('default', ['watch']);
