// We always use the var keyword when declaring variables.
// = is the assignment operator

var magician = 'Gob Bluthe';
console.log(magician);

// Always use camelCase.
var the_magician;

// Typeof tells us what datatype we have
console.log(typeof 6);
console.log(typeof 'Gob Bluthe');

// We get undefined when the variable does not have anything assigned.
var magicianName;
console.log(magicianName);

// strings used to store words or sentences
// use single quotes when you want to see double quotes
console.log('milk was a bad choice');
console.log('"milk was a bad choice"');

// String concation using the addition operator +
var name = 'gob';
var message = 'hello' + name + '!';
console.log(message);

// booleans are for yes or no data.
// start booleans with 'is' or 'are' statements that make it read well.
var isAvailable = true;

// beware of decimals OR floating point numbers. This equation = .300000000004....
var num = .1 + .2;
console.log('.1 + .2', num);

// remember PEMDAS when matching numbers
console.log(5 / (3 - 2) * 4);

// $ is the modulo operator, it tells use the remainder
console.log(15 % 7);

// math
var radius = 2;

console.log('area of circle with radius of 2', Math.PI * Math.pow(radius, 2));

// number assignment operators
var x = 3;
x += 2; // this is the same as x = x + 2
console.log(x);
x /= 2; // x = x / 2
console.log(x);
x *= 2; // x = x * 2
console.log(x)

// incrementor and decremntor adds 1 or subs 1 to any numbers
var x = 10;
x++;
console.log('x = ', x); // x = 11
x--;
console.log('x =', x); // x = 10

// Random numbers Math.Random.
var randomNumber = Math.random() * (1 + 100);
console.log(randomNumber);

// Random numbers Math.Random (with max and min range set). Math.floor  drops to next lowest integer.
console.log(Math.floor(Math.random() * 2 + 1));

// Arrays - array constructor with multi params
var numbers = new Array (1, 2, 3, 4, 5);
console.log(numbers);

var numbersTwo = new Array (3);
console.log(numbersTwo);

// Array literal - much cleaner for creating arrays
var numbersThree = [1, 2, 3];
console.log(numbersThree);

// array elements - items in arrays are called elements
// retrive them using bracks and its position
var family = ['gob', 'george-michael', 'lucille'];
console.log(family[0]);
console.log(family[1]);
console.log(family[2]);
family[87] = 'jon';

console.log(family.length);

// use push to add things to the end of an array
family.push('carrol');
console.log(family);

// use pop to remove things from the end of the array
console.log(family.pop());

//use push when adding things to the end of array
family.push('carol');
console.log(family);
var poppedValue = family.pop()
console.log('pop-value', poppedValue);
console.log('post-pop', family);

// we can shift and unshift to work from the beginning of the array
// unshift pushes to beginning
// shiftt pops off the beginining
var extendedFamily = ['dave'];
console.log(extendedFamily);
extendedFamily.unshift('michael');
console.log(extendedFamily);
console.log('post shift', extendedFamily);

// reverse - reverse orders your array
extendedFamily.reverse();
console.log(extendedFamily);

// we can join elements together using array.join
var productIds = [32, 56, 12, 43, 8];
console.log('productIds', productIds);
var productIdString = productIds.join();
console.log('productIdString', productIdString);
var productIdStringPipes = productIds.join('|');
console.log('productIdStringPipes', productIdStringPipes);
