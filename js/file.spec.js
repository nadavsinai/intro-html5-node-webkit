describe('file module tests', function () {
    var file, fs = require('fs'), testArea;

    beforeEach(function () {
        file = require('file.js');
        testArea = document.createElement('textarea');
        testArea.setAttribute('id', 'editor');
        document.body.appendChild(testArea);
    });

    afterEach(function () {
        document.body.removeChild(testArea);
    });

    it('checks that functions are defined', function () {
        expect(file.open).toBeDefined();
        expect(file.save).toBeDefined();
    });

    it('checks that open reads a file then gets its content into the editor', function () {
        fs.readFile = function () {
            arguments[arguments.length - 1].call(this, '', 123);
        };
        file.open('', document);
        expect(document.getElementById('editor').value).toBe('123');
    });

    it('checks that save calls writeFile with the right arguments', function () {
        testArea.value = 123;
        fs.writeFile = function () {
        };
        spyOn(fs, 'writeFile');
        file.save('test', document);
        expect(fs.writeFile).toHaveBeenCalled();
        expect(fs.writeFile).toHaveBeenCalledWith('test', '123');
    })
});