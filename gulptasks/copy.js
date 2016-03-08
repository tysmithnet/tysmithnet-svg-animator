var gulp = require("gulp");
var newer = require("gulp-newer");

gulp.task("copy", function(){
    var dest = "dist"
    return gulp
        .src("src/**")
        .pipe(newer(dest))
        .pipe(gulp.dest(dest));     
});