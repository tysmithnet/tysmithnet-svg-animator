"use strict";

var gulp = require("gulp");
var util = require("gulp-util");
var filenames = require("gulp-filenames");
var debug = require("gulp-debug");
var path = require("path");
var injectString = require("gulp-inject-string");
var through = require("through2");
var concatStream = require("concat-stream");
var path = require("path");

const testboot = "src/client/test/boot.js";

function getVinyls() {
    return new Promise((res, rej) => {
        gulp
            .src("dist/client/**/*.spec.js")
            .pipe(concatStream({
                encoding: "object"
            }, (vinyls) => {
                res(vinyls);
            }));
    });
}

gulp.task("inject", (cb) => {
    let vinylsPromise = getVinyls();

    vinylsPromise.then((vinyls) => {
        let text = vinyls.map((e) => {
            return 'import "' +
                path.normalize("../" + e.path.replace(e.cwd, "")) + '";';
        }).join("\n");

        gulp
            .src(testboot)
            .pipe(injectString.prepend(text))
            .pipe(gulp.dest("dist/client/test"))
            .on("finish", () => {
                util.log("complete!");
                cb();
            });
    });
});
