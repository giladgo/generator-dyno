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

Dyno.prototype.welcome = function welcome() {
  if (!this.options['skip-message']) {
    this.log(yosay(
      'I am scaffolding number 1 web apps for you.'
    ));
  }
};

Dyno.prototype.askForProjectDetails = function askForProjectDetails() {
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
  }, {
    type: 'confirm',
    name: 'defaults',
    message: 'Do you want me to use the default options for Dyno as stated on the GitHub page?',
    default: false
  }, {
    type: 'confirm',
    name: 'bower',
    message: 'Do you want me to configure bower for your project?',
    default: true,
    when: function (opts) {
      return !opts.defaults
    }
  }], function (opts) {
    this.opts = opts;
    done();
  }.bind(this))
}

Dyno.prototype.askForPrecompiler = function askForPrecompiler() {
  // Return nothing if defaults should be used
  if (this.opts['defaults']) return;
  var done = this.async();

  this.prompt([{
    type: 'confirm',
    name: 'compiler',
    message: 'Do you want to use a css precompiler in your project?'
  }, {
    type: 'list',
    name: 'css',
    message: 'What precompiler do you want to use?',
    choices: [
      { name: 'Sass', value: 'sass' },
      { name: 'Scss', value: 'scss' },
      { name: 'Stylus', value: 'stylus' },
      { name: 'LESS', value: 'less' }
    ],
    when: function (opts) {
      return opts.compiler
    }
  }], function (opts) {
    this.opts['css'] = opts.csscompiler;
    done();
  }.bind(this));
};

Dyno.prototype.askForScripting = function askForScripting() {
  // Return nothing if defaults should be used
  if (this.opts['defaults']) return;
  var done = this.async();

  this.prompt([{
    type: 'confirm',
    name: 'coffee',
    message: 'Do you want to use CoffeeScript in your project?'
  }, {
    type: 'confirm',
    name: 'browserify',
    message: 'Do you want to use Browserify in your project?'
  }], function (opts) {
    this.opts['js'] = (opts.coffee) ? 'coffee' : 'js';
    this.opts['browserify'] = opts.browserify;
    done();
  }.bind(this));
};

Dyno.prototype.askForTemplating = function askForTemplating() {
  // Return nothing if defaults should be used
  if (this.opts['defaults']) return;
  var done = this.async();

  this.prompt([{
    type: 'confirm',
    name: 'jade',
    message: 'Do you want to use Jade in your project?'
  }], function (opts) {
    this.opts['html'] = (opts.jade) 'jade' : 'html';
    done();
  }.bind(this));
};

Dyno.prototype.askForExtendedSettings = function askForExtendedSettings() {
  // Return nothing if defaults should be used
  if (this.opts['defaults']) return;
  // TODO: Ask for the extended settings (deploy method, etc.)
};

Dyno.prototype._populateWithDefaults = function _popuplateWithDefaults() {
  // TODO: Populate this.opts with the project defaults
};

Dyno.prototype.end = function end() {
  this.installDependencies({
    bower: this.opts['bower'],
    skipInstall: this.options['skip-install'],
    skipMessage: this.options['skip-message']
  });
};
