var gulp = require('gulp'),
  path = require('path'),
  EXPRESS_ROOT = path.join(__dirname, 'app');

var startExpress = function() {
    var server = require('./server.js');
    server({
      dir:EXPRESS_ROOT,
      port: 8080
    });
}

var startLiveReload = function() {
  var lr = require('tiny-lr')();
  lr.listen(35729);
  return lr;
}

var notifyLivereload = function(event, lr) {
  var fileName = require('path').relative(EXPRESS_ROOT, event.path);
  lr.changed({
    body: {
      files: [fileName]
    }
  });
}

// `gulp.task()` defines task that can be run calling `gulp xyz` from the command line
// The `default` task gets called when no task name is provided to Gulp
gulp.task('default', function () {

  startExpress();
  var lr = startLiveReload();

  gulp.watch('app/**', function(event){
    notifyLivereload(event, lr);
  });

});
