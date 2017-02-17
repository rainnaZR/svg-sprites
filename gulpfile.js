/**
 * Created by zourong on 12/2/16.
 */

var gulp = require('gulp'),
    svgSymbols = require('gulp-svg-symbols'),
    fileInclude = require('gulp-file-include');

gulp.task('svgsprites',function () {
   return gulp.src('./src/svg/*.svg')
       .pipe(svgSymbols())
       .pipe(gulp.dest('./pub/svg'))
});

gulp.task('fileinclude',['svgsprites'],function(){
    return gulp.src('./src/index.html')
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./pub/'))
});