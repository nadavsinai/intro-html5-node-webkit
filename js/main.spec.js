var main, open, save;
open = document.createElement('input');
open.setAttribute('id', 'open');
save = document.createElement('input');
save.setAttribute('id', 'save');
document.body.appendChild(open);
document.body.appendChild(save);

describe('main tests', function () {

    var file;
    beforeEach(function () {
        file = require('js/file');
    });
    xit('check open via event', function () {

        spyOn(document, 'dispatchEvent').and.callThrough();
        var key = document.createEvent('KeyboardEvent');
        key.initKeyboardEvent("keyup", true, true,
            window, "O".charCodeAt(0), 79,
            'ctrl');
        console.log(key.getModifierState('ctrl'));
        document.dispatchEvent(key);
        expect(document.dispatchEvent.calls.count()).toEqual(2);
    });
    it('checks the file open fn is called on change of file open inut', function (done) {
        spyOn(file, 'open');
        clickInput('open');
        expect(file.open).toHaveBeenCalled();
        done();
    });
});