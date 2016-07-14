// CONSTRUCTOR FUNCTION -- this is a class
// Car Example
var car1 = new Vehicle(2010, 65000);
var car2 = new Vehicle(2008, 232728);
var car3 = new Vehicle(1966, 9999);
var car4 = new Vehicle(2015, 902384);
var car5 = new Vehicle(2011, 238974);

console.log(car1, car2, car3, car4, car5);

function Vehicle(year, mileage) {
  this.year = year;
  this.mileage = mileage;
}

// Pokemon Example
var pikachu = new Pokemon('electric', 1);

console.log('pikachu', pikachu);

function Pokemon(type, level) {
  this.type = type;
  this.level = level;
}

Pokemon.prototype.levelUp = function() {
  this.level++;
};
pikachu.levelUp();
