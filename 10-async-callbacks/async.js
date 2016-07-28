// === setTimeout example
// console.log('starting dinner');
// setTimeout(function() {
//   console.log('dinner is ready');
// }, 5000);
// console.log('waiting for dinner to cook');

// === setInterval Example
console.log('starting to check email');
setInterval(function() {
  console.log('checking email');
}, 2000);
console.log('email checker starterd');

console.log('starting RSS feed checker');
setInterval(function() {
  console.log('checking  RSS feed checker');
}, 1500);
console.log('RSS feed checkerstarterd');
