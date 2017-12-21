// Karma Continuous Integration configuration
module.exports = function(config) {
    config.set({
        basePath: '../../../../',
        frameworks: ['jasmine'],
        files: [
            'target/dependency/META-INF/resources/webjars/angular/**/angular.min.js',
            'target/dependency/META-INF/resources/webjars/angular-mocks/**/angular-mocks.js',
            'src/main/webapp/js/*.js',
            'src/main/webapp/js/**/*.js',
            'src/test/webapp/js/*.js'
        ],
        exclude: ['**/karma.*.js'],
        preprocessors: {},
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        concurrency: Infinity,

        //The next properties are overridden by the development mode configuration

        browsers: ['ChromeHeadless'],
        autoWatch: false,
        singleRun: true
    })
};