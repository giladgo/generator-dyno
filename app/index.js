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



    }

Dyno.prototype.askForPrecompiler = function askForPrecompiler () {

    }
};

