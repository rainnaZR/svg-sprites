/**
 * Created by zourong on 12/2/16.
 */

var gulp = require('gulp');
var svgSymbols = require('gulp-svg-symbols');

gulp.task('svgsprites',function () {
   return gulp.src('./src/svg/*.svg')
       .pipe(svgSymbols())
       .pipe(gulp.dest('./src/svgsprites'))
});