// FizzBuzz is a common interview question to check for basic programming ability.
// Knowing how to solve this problem will get you farther than most applicants!
// https://blog.codinghorror.com/why-cant-programmers-program/

// Relying on your newfound knowledge of loops, combine loops and if/else
// statements together and incrementally build the common fizzbuzz loop.
//
// - In the loop, every time a number is divisible by **3**, instead of logging
//   the number itself, the word "fizz" should appear.
//
// - If the number is divisible by  **5**, the word "buzz" should be logged.
//
// - If the number is divisible by both **3** and  **5**, then the word
//   "fizzbuzz" should be logged.

// Follow the steps below.

// ##### Step 1:
// Construct a for loop that iterates through, and `console.log()`'s out, numbers 1 - 100.
for (var count = 0; count <= 100; count++) {
  if ((count % 3) === 0 && (count % 5) === 0) {
    console.log('fizzbuzz');
  } else if ((count % 5) === 0) {
    console.log('buzz');
  } else if ((count % 3) === 0) {
    console.log('fizz');
  } else {
    console.log(count);
  }
}
