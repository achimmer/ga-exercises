var expect = require("chai").expect;

var bob = new Person('Bob')

function Person(name) {
    this.name = name;
    this.bac = 0;

    this.mood = function() {
        if (this.bac < .03) {
            return 'sober';
        } else if (this.bac >= .03 && this.bac < .12) {
            return 'confident and daring';
        } else if (this.bac >= .12 && this.bac < .25) {
            return 'slow reaction';
        } else if (this.bac >= .25 && this.bac < .3) {
            return 'confused, dizzy, slurred speach';
        } else if (this.bac >= .3) {
            return 'deathly';
        }
    }
}

describe('Person', function() {
    describe('constructor function', function() {
        it('returns a new person object', function() {
            var p = new Person();
            expect(p).to.not.be.null;
        });

        it('has a name', function() {
            var name = 'Bob';
            var p = new Person(name);
            expect(p.name).to.equal(name);
        });
    });

    describe('#mood()', function() {
        var person = new Person('Bob');

        it('returns sober by default', function() {
            expect(person.mood()).to.equal('sober');
        });

        it('returns mood based on his blood alcohol content', function() {
            person.bac = .03;
            expect(person.mood()).to.equal('confident and daring');

            person.bac = .12;
            expect(person.mood()).to.equal('slow reaction');

            person.bac = .25;
            expect(person.mood()).to.equal('confused, dizzy, slurred speach');

            person.bac = .3;
            expect(person.mood()).to.equal('deathly');
        });
    });
});
