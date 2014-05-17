'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var D3BasicGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies({
          callback: function() {
            this.log(chalk.magenta('Installation is now complete'));
            this.log(chalk.magenta('To get started run the command:\n\t') + chalk.green("gulp"));
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
    this.log(chalk.magenta('You\'re using the D3 Basic generator.'));

    done();
  },

  app: function () {
    this.mkdir('app');
    this.copy('index.jade', 'app/index.jade');
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_gulpfile.js', 'gulpfile.js');
    this.copy('bowerrc', '.bowerrc');
    this.copy('iris.json', 'app/iris.json');
    this.copy('iris.csv', 'app/iris.csv');
    this.copy('server.js', 'server.js');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = D3BasicGenerator;
