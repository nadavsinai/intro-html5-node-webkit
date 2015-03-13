describe('file module tests', function () {
    var file, fs = require('fs');

    beforeEach(function () {
        file = require('file.js');
    });

    it('checks that functions are defined', function () {
        expect(file.open).toBeDefined();
        expect(file.save).toBeDefined();
    });

    it('checks that open reads a file then gets its content into the editor', function () {
        var testArea = document.createElement('textarea');
        testArea.setAttribute('id', 'editor');
        document.body.appendChild(testArea);
        fs.readFile = function () {
            arguments[arguments.length - 1].call(this, '',123);
        };
        file.open('',document);
        expect(document.getElementById('editor').value).toBe('123');
    });
});