'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk')
var yosay = require('yosay');


var D3BasicGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies({
          bower: false,
          npm: true,
          callback: function() {
            this.spawnCommand("npm", ["run", "bundle"]);
            this.log(chalk.magenta('Installation is now complete'));
            this.log(yosay('To get started run the command: gulp'));
          }.bind(this)
        });
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(yosay('You\'re using the D3 Basic generator.'));


    done();
  },

  app: function () {
    this.mkdir('app');
    this.copy('index.jade', 'app/index.jade');
    this.copy('_package.json', 'package.json');
    this.copy('iris.json', 'app/iris.json');
    this.copy('iris.csv', 'app/iris.csv');
    this.copy('server.js', 'server.js');
    this.copy('bundle.js', 'bundle.js');
  },
});

module.exports = D3BasicGenerator;
