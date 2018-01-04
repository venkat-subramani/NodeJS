var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var OptiPng = require('optipng');
var smushit = require('gulp-smushit');

gulp.task('images', function() {
   return gulp.src('src/images/*')
   .pipe(imagemin({ progressive: true }))
   .pipe(gulp.dest('dist/images'));
});

gulp.task('imagesmin', function() {
   return gulp.src('src/images/*')
   .pipe(imagemin([
		imagemin.gifsicle({interlaced: true}),
		imagemin.jpegtran({progressive: true}),
		imagemin.optipng({optimizationLevel: 5}),
		imagemin.svgo({plugins: [{removeViewBox: true}]})
	]))
   .pipe(gulp.dest('dist/images'));
});

gulp.task('optipng', function() {
   gulp.src('src/images/*')
   .pipe(OptiPng())
   .pipe(gulp.dest('dist/images'));
});

gulp.task('smushit', function () {
    return gulp.src('src/images/*')
    .pipe(smushit())
    .pipe(gulp.dest('dist/smushit-img'));
});