var gulp = require("gulp");
var runSequence = require("run-sequence");

gulp.task("build", function(cb){
    runSequence(["inject", "copy"], cb); 
});