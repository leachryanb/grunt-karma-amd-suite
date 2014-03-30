# grunt-karma-amd-suite

> Generate amd test suites for karma-runner with jasmine or mocha.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-karma-amd-suite --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-karma-amd-suite');
```

## The "karma_amd_suite" task

### Overview
In your project's Gruntfile, add a section named `karma_amd_suite` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  karma_amd_suite: {
      options: {
        // specify options
      },
      target: {
        src: ['src/spec/*_spec.js'],
        dest: 'src/spec/unit-suite.js'
      }
  }
});
```

### Options

#### options.helpers
Type: `Array`
Default value: `null`

A list of helpers to be loaded into the env prior to executing the test suite

#### options.frameworks
Type: `String`
Default value: `mocha`

The testing framework to generate the runner for.  Either `mocha` or `jasmine`.

#### options.mochaMode
Type: `String`
Default value: `bdd`

The assertion style to use with mocha.  If 'bdd', Chai 'BDD' will be used.

#### options.baseUrl
Type: `String`
Default value: `app`

Your requirejs config baseUrl.

#### options.cleanPath
Type: `String`
Default value: ``

Used to clean off substrings from your amd paths.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  karma_amd_suite: {
      options: {
        helpers: [
          'sinon',
          'squire',
          'chai',
          'app'
        ],
        framework: 'mocha',
        mochaMode: 'bdd',
        baseUrl: 'src',
        cleanPath: 'src/'
      },
      browser: {
        src: ['src/spec/*_spec.coffee'],
        dest: 'src/spec/unit-suite.js'
      },
      karma: {
        options: {
          baseUrl: 'base'
        },
        src: ['src/spec/*_spec.coffee'],
        dest: 'src/spec/main-test.js'
      }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

