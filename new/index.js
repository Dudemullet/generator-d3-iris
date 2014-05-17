'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var NewGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('Creating new page:' + this.name);
    this.template('_base.html', "app/"+this.name+"/index.html");
  },

  files: function () {
    // this.copy('somefile.js', 'somefile.js');
  }
});

module.exports = NewGenerator;
