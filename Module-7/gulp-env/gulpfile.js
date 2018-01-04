var gulp = require('gulp');
var ngConstant = require('gulp-ng-constant');
var rename = require('gulp-rename');

var enviroment = require('./environments');

gulp.task('ngconstant:dev', function () {
    return ngConstant({
        name: 'atlasApp',
        constants: enviroment.dev,
        template: enviroment.template,
        stream: true
    })
    .pipe(rename('app.constants.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('ngconstant:test', function () {
    return ngConstant({
        name: 'atlasApp',
        constants: enviroment.test,
        template: enviroment.template,
        stream: true
    })
    .pipe(rename('app.constants.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('ngconstant:prod', function () {
    return ngConstant({
        name: 'atlasApp',
        constants: enviroment.prod,
        template: enviroment.template,
        stream: true
    })
    .pipe(rename('app.constants.js'))
    .pipe(gulp.dest('./'));
});