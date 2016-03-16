var gulp = require("gulp");
var runSequence = require("run-sequence");

gulp.task("build", function(cb){
    runSequence(["copy", "templatecache"], "inject", cb); 
});
