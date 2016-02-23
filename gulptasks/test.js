var gulp = require('gulp');
var KarmaServer = require('karma').Server;

gulp.task('test', function(cb){
    new KarmaServer({
        configFile: __dirname + "/../src/client/karma.conf.js"
    }, cb).start(); 
});