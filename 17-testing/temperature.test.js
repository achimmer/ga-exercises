var expect = require("chai").expect;

// CODE THAT WE ARE TESTING
var Converter = {
    celToFar: function(celTemp) {
        return celTemp * 9 / 5 + 32;
    },
    kelvToFar: function(kelvTemp) {
        var f = kelvTemp * 9 / 5 - 459.67;
        return Math.round(f * 100) / 100;
    }
};

// MOCHA TESTING
describe('Converter', function() {
    describe('#celToFar()', function() {
        it('Converts celsius to farenheight', function() {
            expect(Converter.celToFar(0)).to.equal(32);
        });
    });
    describe('#kelvToFar()', function() {
        it('Converts kelvin to farenheight', function() {
            expect(Converter.kelvToFar(0)).to.equal(-459.67);
            expect(Converter.kelvToFar(500)).to.equal(440.33);
        });
        it('Round to the hundredth decimal', function() {
            expect(Converter.kelvToFar(260)).to.equal(8.33);
        });
        describe('When input as a string', function() {
            it('Handles numeric values', function() {
                expect(Converter.kelvToFar('260')).to.equal(8.33);
            });
            it('Return NaN for non numeric values', function() {
                expect(Converter.kelvToFar('hi')).to.be.NaN;
            });
        });
    });
});