describe('checks textbox functionality', function () {
    var fs = require('fs');
    var path = require('path');
    var path2File = path.resolve(__dirname, '../package.json');
    var pkg;
    beforeEach(function (done) {
        fs.readFile(path2File, 'utf-8', function (err, content) {
            if (!err) {
                pkg = content
            }
            done();
        });
    });

    it('editor textarea exists', function () {
        expect(element(by.id('editor')).isDisplayed()).toBeTruthy();
    });

    it('checks file open', function () {
        //$('body').sendKeys(protractor.Key.CONTROL, "O", protractor.Key.NULL)
        $('#open').sendKeys(path2File);
        browser.sleep(500);
        expect($('#editor').getAttribute('value')).toEqual(pkg);
        //browser.pause();
    });
    it('checks file new', function (done) {
        $('body').sendKeys(protractor.Key.CONTROL, "N", protractor.Key.NULL)
        browser.getWindowHandle().then(function (thisHandle) {
            browser.getAllWindowHandles().then(function (windows) {
                windows.splice(windows.indexOf(thisHandle), 1);
                browser.switchTo().window(windows[1]).then(function () {
                    expect($('#editor').getAttribute('value')).toEqual('');
                    done();
                });
            });
        });

    });

    it('checks file save', function (done) {
        var str = 'testing';
        $('#editor').sendKeys(str);
        path2File = path.resolve(__dirname, '../test.txt');
        $('#save').sendKeys(path2File);
        browser.sleep(1500);
        //$('body').sendKeys(protractor.Key.CONTROL, "S", protractor.Key.NULL)
        fs.readFile(path2File, 'utf8', function (err,content) {
            if (!err){
                expect(content).toEqual(str);
                fs.unlink(path2File, function () {
                    done();
                });}
        });

    });
})