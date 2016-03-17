"use strict";

var gulp = require("gulp");
var del = require("del");

/**
 * Clean the project dist directory
 */
gulp.task("clean", function(){
    return del(["dist"]);
});