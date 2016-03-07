var gulp = require("gulp");
var util = require("gulp-util");
var filenames = require("gulp-filenames");
var debug = require("gulp-debug");
var path = require("path");
var injectString = require("gulp-inject-string");

gulp.task("inject", function (cb) {
    var testboot = "src/client/test/boot.js";
    gulp
        .src("src/client/**/*.spec.js")
        .pipe(filenames("inject"))
        .on("finish", function () {
            var imports = filenames.get("inject", "relative").map(function(e){
                return "import \"../" + e + "\";"; 
            });
            gulp
                .src(testboot)
                .pipe(injectString.prepend(imports.join("\n")))
                .pipe(gulp.dest(testboot))
                .on("end", cb);
        });
});