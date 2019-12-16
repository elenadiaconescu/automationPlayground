exports.config = {
    runner: 'local',
    // protocol: 'https',
    path: '/',
    specs: [
        './feature/*.feature'
    ],
    maxInstances:10,
    exclude: [
        // 'path/to/excluded/files'
    ],
    capabilities: [{
        browserName: 'chrome',
    }],
    logLevel: 'debug',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    specFileRetries: 0,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./feature/steps/*.js'],
    },
};
