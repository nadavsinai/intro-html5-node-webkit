var open, save;
open = document.createElement('input');
open.setAttribute('id', 'open');
open.setAttribute('type', 'file');
save = document.createElement('input');
save.setAttribute('id', 'save');
document.body.appendChild(open);
document.body.appendChild(save);

describe('main tests', function () {

    var file;
    beforeEach(function () {
        file = require('js/file');
        require('js/main')(document,file);
    });
    it('check open via event', function () {
        spyOn(open, 'dispatchEvent').and.callThrough();
        function fireKey(el, key) {
            key = key.charCodeAt(0);
            if (document.createEvent) {
                var eventObj = new KeyboardEvent("keyup", {
                    bubbles : true,
                    cancelable : true,
                    char : "O",
                    key : "o",
                    ctrlKey : true,
                    keyCode : 79
                });
                delete eventObj.keyCode;
                Object.defineProperty(eventObj, "keyCode", {"value" : 79})
                el.dispatchEvent(eventObj);
            }
        }
        fireKey(document, 'O');
        expect(open.dispatchEvent.calls.count()).toEqual(1);
    });
});