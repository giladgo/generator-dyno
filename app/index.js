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

Dyno.prototype.welcome = function welcome () {
  if (!this.options['skip-message']) {
    this.log(yosay(
      'I am scaffolding number 1 web apps for you.'
    ));
  }
};


    }

Dyno.prototype.askForPrecompiler = function askForPrecompiler () {

    }
};

