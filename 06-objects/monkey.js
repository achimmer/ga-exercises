/**
 * Work with a partner to create a monkey object, which has the following properties:
 *
 *   name
 *   species
 *   foodsEaten
 *
 * And the following methods:
 *
 *   eatSomething(thingAsString)
 *   introduce(): produces a string introducing itself, including its
 *                name, species, and what it's eaten.
 *
 * Instructions:
 *
 * Create 3 monkeys total.
 * Make sure all 3 monkeys have all properties set and methods defined.
 * Exercise your monkeys by retrieving their properties and using their methods.
 *
 * Practice using both syntaxes for retrieving properties (dot notation and brackets).
 */
function Monkey(name, species) {
  this.name = name;
  this.species = species;
  this.foodsEaten = [];
}

Monkey.prototype.eatSomething = function(food) {
  this.foodsEaten.push(food);
};

Monkey.prototype.intro = function(name, species, foodsEaten) {
  var foodList;
  if(!this.foodsEaten.length) {
    foodList = 'nothing';
  } else {
    foodList = this.foodsEaten.join(', ');
  }
  console.log('Hi, this is ' + this.name + ' I am a ' + this.species + ' I have eaten: ' + foodList);
};

var m1 = new Monkey('Tarzan', 'Ape');
var m2 = new Monkey('Jane', 'Spider Monkey');
var m3 = new Monkey('George', 'Lemur Monkey');

m1.eatSomething('banana');
m1.eatSomething('orange');
m1.eatSomething('kiwi');
m1.intro();
m2.eatSomething('apple');
m2.eatSomething('roots');
m2.intro();
// m3.eatSomething('nuts');
m3.intro();

var jsonString = JSON.stringify(m1);
console.log(jsonString);
