var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var imageop = require('gulp-image-optimization');

gulp.task('cssmin', function(){
	return gulp.src('src/css/*.css')
	//.pipe(concat('combined.min.css'))
	.pipe(cssnano())
	.pipe(gulp.dest('dist/css/*.min.css'));
});

gulp.task('uglify', function(){
	return gulp.src('src/js/*.js')
	//.pipe(concat('combined.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

gulp.task('imagemin', function() {
   
   gulp.src('src/images/*')
   //.pipe(changed(imgDst))
   .pipe(imagemin())
   .pipe(gulp.dest('dist/images'));
});

gulp.task('imageopti', function(cb) {
    gulp.src(['src/images/*'])
	.pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
	.pipe(gulp.dest('dist/images'));
});

gulp.task('default', ['cssmin', 'uglify']);