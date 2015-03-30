'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var path = require('path');
var mkdirp = require('mkdirp');
var yosay = require('yosay');
var semver = require('semver');

var Dyno = module.exports = function Dyno(args, opts) {
  yeoman.generators.Base.apply(this, arguments);
  this.opts = {};
};

// Let the dyno generator inherit from yeomans base generator
util.inherits(Dyno, yeoman.generators.Base);


  app: function () {
    mkdirp('src');
    mkdirp('src/scripts');

    if (!this.coffeescriptOption) {
      this.template('_main.js', 'src/scripts/main.js');
      this.template('_example.js', 'src/scripts/example.js');
    } else {
      this.template('_main.coffee', 'src/scripts/main.coffee');
      this.template('_example.coffee', 'src/scripts/example.coffee');
    }

    this.template('_index.'+this.templateOption, 'src/index.'+this.templateOption);
    this.copy('_gulpfile.js', 'gulpfile.js');

    mkdirp('src/images');
    this.copy('dyno-logo.png', 'src/images/dyno-logo.png');

    mkdirp('src/stylesheets');
    this.template('_main.'+this.styleOption, 'src/stylesheets/main.'+this.styleOption);

    this.template('_package.json', 'package.json');

    if(this.bowerOption) {
      this.template('_bower.json', 'bower.json');
      this.copy('_bowerrc', '.bowerrc');
    }
    this.copy('gitignore', '.gitignore');
    this.copy('editorconfig', '.editorconfig');
  },

  end: function () {
    this.installDependencies({
      bower: this.bowerOption,
      skipInstall: this.options['skip-install']
    });
  }
};

module.exports = DynoGenerator;
