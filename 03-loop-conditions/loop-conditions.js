// Condition: some sort of comparison against a value "evauluating something".
var age = 40;

if (age >= 21) {
  console.log('Whats your order?');
} else if (age === 40) {
  console.log('youre 40 bro');
} else {
  console.log('No booze for you!');
}

// Ternary operator: a shortcut for simple if/else conditions
// condition ? true : false ;
age = 40;
var message = (age >= 21) ? 'Whats your order?' : 'No booze for you bro';
console.log('ternary:', age, message);

// Comparison operators:
// type coercion
console.log('4 < "6" =', 4 < "6");
console.log('ga < "GA" =', 'ga' < "GA");
console.log('ga < "GA" =', 'GA' < "ga");
// capital letters are greater than small letters

console.log("'alex' < 'brian'=", 'alex' < 'brian');

// Equality
// Equality operator: '==' checks value, coerces other value to the right type.
// Identity opeartor: '===' checks value and type. You should probably always use this.
'dog' === 'dog'; // true
'12' == 12;      // true - WAT? type coercion!
'12' === 12;     // false - much better
4 !== '4';       // true
1 !== true;      // true

// Object & Array Equality
var family1 = ['alex', 'brian'];
var family2 = ['alex', 'brian'];
console.log(family1 === family2); // false
// because there are different array instances

// Truthy & Falsey: values can be truthy or falsey
// Falsey values: false, 0, "" (empty string), NaN, null, undefined
var name = "Kevin"
if (name) {
  console.log("Your name is:", name);
} else {
  console.log("You dont have a name!");
}
// Truthy: everything else is truthy!

// Boolean operators: used to check multiple conditions
// && (and) || (or)
var person = {name: ''};
if (person && person.name) {
  console.log('name:', person.name);
} else {
  console.log('No name defined mate');
}

// Switch statement: used to check a value against multiple possible outcomes.
// See switch.js

// Loops: While and For
// Use FOR for arrays for specific quantity of loops, use WHILE for unknown quanity of loops. keep running until an event happens.

// Array.forEach
