"use strict";

var gulp = require('gulp');
var finalhandler = require("finalhandler");
var http = require("http");
var serveStatic = require("serve-static");
var open = require("gulp-open");

/**
 * Open a browser and load the test files
 */
gulp.task("test", function(){
    var serve = serveStatic("dist/client");
    
    var server = http.createServer(function(req, res){
       var done = finalhandler(req, res);
       serve(req, res, done); 
    });
    
    server.listen(8080);
    
    gulp
        .src(__filename)
        .pipe(open({uri: "http://localhost:8080/test/index.html"}))
});