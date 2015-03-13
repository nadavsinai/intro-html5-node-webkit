var baseFile = __dirname + '/index.html';
exports.config = {
    directConnect: true,
    chromeDriver: '/usr/local/bin/chromedriver',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            // Path to NW.js binary goes here!
            binary: '/usr/local/bin/nw'
        }
    },
    // Spec patterns are relative to the location of this config.
    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.resetUrl = 'file://' + baseFile;
        browser.driver.get('file://' + baseFile);
    },
    onComplete: function () {
    },
    baseUrl: __dirname + '/index.html',
    specs: [
        './js/**/*.e2espec.js'
    ]
};