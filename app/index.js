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

Dyno.prototype.askForProjectDetails = function askForProjectDetails () {
  var done = this.async();
  var _ = this._;

  this.prompt([{
    type: 'input',
    name: 'name',
    message: 'Please tell me how your project wants to be called.',
    default: this.appname,
    filter: function (val) {
      return _.camelize(_.slugify(_.humanize(val)));
    }
  }, {
    type: 'input',
    name: 'version',
    message: 'What\'s the version of this neat project?',
    default: '0.0.1',
    validate: function (value) {
      if (value == semver.valid(value)) {
        return true;
      } else {
        return "Please use a semantic version number (http://semver.org/)"
      }
    }
  }], function (opts) {
    this.opts = opts;
    done();
  }.bind(this))
}

Dyno.prototype.askForPrecompiler = function askForPrecompiler () {
  var done = this.async();

  this.prompt([{
    type: 'confirm',
    name: 'usePrecompiler',
    message: 'Do you want to use a css precompiler in your project?'
  }, {
    type: 'list',
    name: 'precompiler',
    message: 'What precompiler do you want to use?',
    choices: [
      { name: 'Sass', value: 'sass' },
      { name: 'Scss', value: 'scss' },
      { name: 'Stylus', value: 'stylus' },
      { name: 'LESS', value: 'less' }
    ],
    when: function (opts) {
      return opts.usePrecompiler
    }
  }], function (opts) {
    this.args['precompiler'] = opts.precompiler;

    done();
  }.bind(this));
};

