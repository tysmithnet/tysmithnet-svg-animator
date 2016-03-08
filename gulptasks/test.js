var gulp = require('gulp');
var finalhandler = require("finalhandler");
var http = require("http");
var serveStatic = require("serve-static");

gulp.task("test", function(){
    var serve = serveStatic("dist/client");
    
    var server = http.createServer(function(req, res){
       var done = finalhandler(req, res);
       serve(req, res, done); 
    });
    
    server.listen(8080);
});