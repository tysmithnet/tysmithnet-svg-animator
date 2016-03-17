"use strict";

var gulp = require("gulp");
var runSequence = require("run-sequence");

/**
 * Build the application
 */
gulp.task("build", function(cb){
    runSequence(["copy", "templatecache"], "inject", cb); 
});
