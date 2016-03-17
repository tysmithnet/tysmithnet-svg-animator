"use strict";

var gulp = require("gulp");
var newer = require("gulp-newer");

/**
 * Copy application files to the dist directory
 */
gulp.task("copy", function(){
    var dest = "dist"
    return gulp
        .src(["src/**", "!src/client/test/boot.js"])
        .pipe(newer(dest))
        .pipe(gulp.dest(dest));     
});