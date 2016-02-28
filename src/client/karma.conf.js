// Karma configuration
// Generated on Mon Feb 22 2016 15:45:42 GMT-0500 (Eastern Standard Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jspm', 'jasmine'],

        jspm: {
            config: "config.js",
            loadFiles: [
                "./domain/**/*.js",
                "./app/*.js"
            ],
            serveFiles: [
                "./**/*.js"
            ]
        },

        // list of files / patterns to load in the browser
        files: [
            "../../node_modules/babel-polyfill/dist/polyfill.js"
        ],


        // list of files to exclude
        exclude: [
            "coverage/**/*"
        ],

        babelPreprocessor: {
            options: {
                sourceMap: 'inline'
            },
            sourceFileName: function (file) {
                return file.originalPath;
            }
        },

        proxies: {
            "/app/": "/base/app/",
            "/jspm_packages/": "/base/jspm_packages/",
            "/domain/": "/base/domain/"
        },

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            "app/**/!(*.spec).js": ['babel', 'sourcemap', 'coverage']
        },

        coverageReporter: {
            instrumenters: { isparta: require('isparta') },
            instrumenter: {
                'app/**/*.js': 'isparta'
            },

            reporters: [
                {
                    type: 'text-summary',
                    subdir: normalizationBrowserName
                },
                {
                    type: 'html',
                    dir: 'coverage/',
                    subdir: normalizationBrowserName
                }
            ]
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['coverage', 'progress', 'kjhtml'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });

    function normalizationBrowserName(browser) {
        return browser.toLowerCase().split(/[ /-]/)[0];
    }
}
