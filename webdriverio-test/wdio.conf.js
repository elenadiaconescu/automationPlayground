exports.config = {
    runner: 'local',
    // protocol: 'https',
    path: '/',
    specs: [
        './feature/**/*.feature',
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {

        },
    }],
    logLevel: 'debug',
    bail: 0,
    // baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    specFileRetries: 0,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: ['spec'],

    suites: {
        launchPage: ['./feature/launchPage/launch-page.feature'],
        videoPage: ['./feature/videoPage/video-page.feature'],
    },

    cucumberOpts: {
        require: ['./feature/steps-definition/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        timeout: 180000,
        tags: [],
        ignoreUndefinedDefinition: false,
    },
};
