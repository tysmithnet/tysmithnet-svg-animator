"use strict";

var gulp = require("gulp");
var filenames = require("gulp-filenames");
var path = require("path");
var injectString = require("gulp-inject-string");
var concatStream = require("concat-stream");

const testboot = "src/client/test/boot.js";
const testDir = path.resolve("./dist/client/test");
const sources = [
    "dist/client/test/templates.js",    // prime the templatecache for mock http backend
    "dist/client/**/*.spec.js",         // test files
    "!dist/client/jspm_packages/**/*"]; // dependencies

/**
 * Gather all the vinyl objects for the files to be injected
 */
function getVinyls() {
    return new Promise((res, rej) => {
        gulp
            .src(sources)
            .pipe(concatStream({
                encoding: "object"
            }, (vinyls) => {
                res(vinyls);
            }));
    });
}

/**
 * Get import path for file to be injected
 */
function getImportPath(vinyl) {
    let relativePath = path.relative(testDir, vinyl.path);
    if(!relativePath.startsWith("../"))
        relativePath = "./" + relativePath;
    return relativePath;
}

/**
 * Inject the import path for the test files into the test bootstrap file
 */
gulp.task("inject", () => {
    let vinylsPromise = getVinyls();

    return new Promise((res, rej) => {
        vinylsPromise.then((vinyls) => {
            let text = vinyls.map((e) => {
                return 'import "' + getImportPath(e) + '";';
            });
            text.sort();
            text = text.join("\n");
            gulp
                .src(testboot)
                .pipe(injectString.prepend(text))
                .pipe(gulp.dest("dist/client/test"))
                .on("finish", res)
                .on("error", rej);
        });
    });
});
