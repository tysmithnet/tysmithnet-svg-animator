module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jspm', 'jasmine'],
        jspm: {
            config: "config.js",
            loadFiles: [
                "./domain/**/*.js",
                "./app/**/*.js",
                "./app/**/*.html"
            ],
            serveFiles: [
                "./**/*.js"
            ]
        },
        files: [
            "../../node_modules/babel-polyfill/dist/polyfill.js"
        ],
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
        preprocessors: {
            "**/*.html": ['ng-html2js'],
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
        ngHtml2JsPreprocessor: {
            moduleName: "templates",
            prependPrefix: "/"
        },
        reporters: ['coverage', 'progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    });

    function normalizationBrowserName(browser) {
        return browser.toLowerCase().split(/[ /-]/)[0];
    }
}
