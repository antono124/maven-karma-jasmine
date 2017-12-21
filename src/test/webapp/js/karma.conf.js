//Load base configuration
var baseConfig = require('./karma.conf.ci.js');

module.exports = function(config) {
    baseConfig(config);

    // Override base configuration
    config.set({
        browsers: ['Chrome'],
        singleRun : false,
        autoWatch : true
    });
};