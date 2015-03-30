<p align="center">
  <img src="https://raw.githubusercontent.com/jhendley25/generator-dyno/master/app/templates/dyno-logo.png" alt="generator-dyno"/>
</p>

## Dyno [![](https://img.shields.io/npm/v/generator-dyno.svg)](https://www.npmjs.com/package/generator-dyno) [![](https://img.shields.io/npm/dm/generator-dyno.svg)](https://www.npmjs.com/package/generator-dyno) [![](https://img.shields.io/david/jhendley25/generator-dyno.svg)](https://david-dm.org/jhendley25/generator-dyno)

### What is Dyno?

Dyno is a Yeoman generator that provides a nice set of defaults for ground-up web development. It scaffolds out a barebones webapp with cool tech, the defaults are the following:
- [Coffeescript](http://coffeescript.org/)
- [Browserify](http://browserify.org/) for dependency management
- [Gulp](http://gulpjs.com/) for running tasks
- [BrowserSync](http://browsersync.io/) for keeping browsers in sync
- [Jade](http://jade-lang.com/) instead of that pesky html
- [Compass](http://compass-style.org/) and [Sass](http://sass-lang.com/) for styling


### Installation

To install generator-dyno from npm, run (please make sure you have Yeoman's `yo`, `gulp` and optionally `bower` installed):

```
$ npm install -g generator-dyno
```

To run the dyno generator please have the following in mind: There are some options that you can use to speed up the process a little bit. [So please be sure to check out our guide to those options](#flags).
Make a new and switch in a new directory and initiate the generator:

```
$ mkdir your-project && cd $_
$ yo dyno [flags]
```

Once everything is ready, start the local server:

```
$ gulp serve
```

If you are ready to deploy the code you have written, run:

```
$ gulp build
```

### Prompts

### Flags

Available flags:
- [Skip Install](#skip-install)
- [Skip Message](#skip-message)
- [Defaults or Skip Prompts](#skip-prompts)

#### Skip Install

To skip installation of bower and npm at the end of running the generator append the `--skip-install` flag to the `yo dyno` command.

```
--skip-install
```

#### Skip Message

If you want to skip the useless but funny messages of the famous Yeoman append the `--skip-message` flag and Yeoman will silently scaffold your application.

```
--skip-message
```

#### Skip Prompts

To use the default settings of the dyno generator append the `--defaults` or `--skip-prompts` flag to the command.

```
--defaults || --skip-prompts
```


### Learn more about Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


#### License

To read something about the license `generator-dyno` is using, please check out the [LICENSE](LICENSE) file in the projects root.
