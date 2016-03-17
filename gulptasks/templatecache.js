"use strict";

var gulp = require("gulp");
var through = require("through2");
var Vinyl = require("vinyl");
var util = require("gulp-util");
var debug = require("gulp-debug");
var path = require("path");

/**
 * Create javascript versions of the angular templates
 */
gulp.task("templatecache", function(cb){
    var createTemplate = function(vinyl, encoding, callback){
        var url = path.normalize("/" + vinyl.path.replace(vinyl.cwd, ""));
        var contents = `
        try {
          angular.module("templates");
        }
        catch(err){
          angular.module("templates", []);
        }
        angular
          .module("templates")
          .run(function($templateCache){
            $templateCache.put("${url}", \`${vinyl.contents.toString()}\`);
          });
        `;
        vinyl.contents = new Buffer(contents);
        vinyl.path = vinyl.path + ".js";
        this.push(vinyl);
        callback();
    };

    return gulp
      .src("src/client/**/*.template.html", {base: "src"})
      .pipe(through.obj(createTemplate))
      .pipe(gulp.dest("dist/"))
});
