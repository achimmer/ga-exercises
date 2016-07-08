// Function Declaration: name and parameteres
// Parameters and arguments
// Return values: what does this function return

speak('hi there'); // argument is the value of the parameter
// words is a parameter

var spoken = speak('hi world');
console.log(spoken);

function speak(words) {
  console.log(words); // return value
  return words;
}

// Function Expression
var test = function(words) {
  return words;
};

// JS has lexical scoping. A new level of scope is only created when a function is created
// Global Scope
