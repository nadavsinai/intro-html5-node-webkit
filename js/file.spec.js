describe('file module tests',function(){
    var file,fs=require('fs'),doc = document;
   beforeEach(function () {
        file = require('file.js');
   });

    it('checks that functions are defined',function(){
        expect(file.open).toBeDefined();
        expect(file.save).toBeDefined();
    });

});