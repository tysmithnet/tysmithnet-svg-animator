"use strict";

var gulp = require("gulp");
var filenames = require("gulp-filenames");
var path = require("path");
var injectString = require("gulp-inject-string");
var concatStream = require("concat-stream");

const testboot = "src/client/test/boot.js";
const testDir = path.resolve("./dist/client/test");

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

function getImportPath(vinyl) {
    return path.relative(testDir, vinyl.path);
}

gulp.task("inject", () => {
    let vinylsPromise = getVinyls();

    return new Promise((res, rej) => {
        vinylsPromise.then((vinyls) => {
            let text = vinyls.map((e) => {
                return 'import "' + getImportPath(e);
            }).join("\n");
            gulp
                .src(testboot)
                .pipe(injectString.prepend(text))
                .pipe(gulp.dest("dist/client/test"))
                .on("finish", res)
                .on("error", rej);
        });
    });
});
