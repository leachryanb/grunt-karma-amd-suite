/*
 * grunt-karma-amd-suite
 * https://github.com/leachryanb/grunt-karma-amd-suite
 *
 * Copyright (c) 2014 Ryan B Leach
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  function stringifyArray(arr) {
    return '["' + (arr || []).join('","') + '"]';
  }

  function getSpecs(files, opts) {
    var specs = [];
    files.forEach(function(file) {
      file.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        var cln = new RegExp(opts.cleanPath+'|\.js|\.coffee','gi');
        specs.push(filepath.replace(cln,''));
      });
    });
    return specs;
  }

  function getChaiPathFromHelpers(helpers) {
    var path = null;
    if (!grunt.util._.isArray(helpers)) {
      return null;
    }
    grunt.util._.each(helpers, function(helperPath) {
      if (/chai/.test(helperPath)) {
        path = helperPath;
      }
    });
    return path;
  }

  grunt.registerMultiTask('karma-amd-suite', 'Generate amd test suites for karma-runner with jasmine or mocha.', function() {
    var dest = this.data.dest,
        opts = this.options({
          specs: null,
          helpers: null,
          framework: 'mocha',
          chaiModuleId: null,
          mochaMode: 'bdd',
          baseUrl: 'app',
          cleanPath: ''
        }),
        tmpl = grunt.file.read(__dirname + '/tmpl/mocha.tmpl');

    if (!opts.chaiModuleId) {
      opts.chaiModuleId = getChaiPathFromHelpers(this.options().helpers);
    }

    if (opts.framework === 'jasmine') {
      // jasmine;
    }

    opts.helpers = stringifyArray(opts.helpers);
    opts.specs = stringifyArray(getSpecs(this.files, opts));

    grunt.log.writeln("Target: " + this.target + ", creating test suite '" + dest);
    grunt.log.debug("Options:\n", opts);
    grunt.file.write(dest, grunt.template.process(tmpl, { data: opts }));

    // Print a success message.
    grunt.log.writeln('File "' + dest + '" created.');
  });

};
