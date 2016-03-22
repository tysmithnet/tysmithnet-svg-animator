"use strict";

var gulp = require("gulp");
var path = require("path");
var templateCache = require("gulp-angular-templatecache")

/**
 * Create javascript versions of the angular templates
 */
gulp.task("templatecache", function(cb){
    const projectDir = path.resolve(__dirname + "/../");
    let options = {
        module: "app",
        transformUrl: function(url){
            url = url.replace(path.join(projectDir, "client"), "");
            return url;
        }
    }
    return gulp
      .src("src/client/**/*.template.html", {base: "src"})
      .pipe(templateCache(options))
      .pipe(gulp.dest("dist/client/test/"))
});
