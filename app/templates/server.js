// Module Dependencies
var express = require('express'),
  app = express();
  http = require('http'),
  path = require('path'),
  fs = require("fs"),
  _ = require('lodash'),
  dir  = require('node-dir'),
  reload = require('express-livereload');


var conf = _.extend({
  dir : path.join(__dirname, 'app'),
  port : 8080
},conf);

app.use(require('connect-livereload')());
app.use(express.static(conf.dir));
app.set("views", conf.dir)
app.engine('jade', require('jade').__express);

app.get("/", function(req, res, next) {
  dir.paths(conf.dir, function(err,paths){
    if(err)
      res.send(500);
    var filtered_dirs = paths.dirs.filter(excluded_folders).map(relative_dirs);
    res.render("index.jade", {dirs:filtered_dirs});
  })
});

var relative_dirs = function(curr) {
  return path.relative(conf.dir, curr);
}

var excluded_folders = function(val) {
  return !val.match("bower_components");
}

app.get("/json", function(req, res, next) {
  var readable = fs.createReadStream("app/iris.json");
  readable.pipe(res);
});

app.get("/csv", function(req, res, next) {
  var readable = fs.createReadStream("app/iris.csv");
  readable.pipe(res);
});

reload(app, {watchDir: conf.dir});
app.listen(conf.port);
console.log("Server started in http://localhost:" + conf.port);
