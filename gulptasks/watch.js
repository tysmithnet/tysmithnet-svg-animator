"use strict";

var gulp = require("gulp");

/**
 * Watch any build files for changes
 */
gulp.task("watch", function(){
    gulp.watch("src/**/*", {debounceDelay: 2000}, ["build"]);
});
