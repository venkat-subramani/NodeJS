var gulp = require('gulp');
var imagemin = require('imagemin');
 
 gulp.task('images', function() {
   return gulp.src('src/images/*')
   .pipe(imagemin(['src/images/*'], 'dist/images'))
   //.pipe(gulp.dest('dist/images'));
});

