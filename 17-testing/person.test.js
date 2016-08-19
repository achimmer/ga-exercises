var expect = require("chai").expect;

function Person(name) {
  this.name = name;
  this.mood = function() {
    return 'sober';
  }
}

describe('Person', function() {
  describe('constructor function', function() {
    it('returns a new person object', function() {
      var p = new Person();
      expect(p).to.not.be.null;
    });
    it('Has a name', function() {
      var name = 'Bob';
      var p = new Person(name);
      expect(p.name).to.equal('Bob');
    });
  });
  describe('#mood()', function() {
    var person = new Person('Bob');

    it('Returns persons mood based on BAC', function() {
      expect(person.mood()).to.equal('sober');
    });
    it('Returns mood based on drinks', function() {
      expect(person.mood()).to.equal('sober');
    });
  });
});
