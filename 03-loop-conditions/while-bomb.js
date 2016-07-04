// var family = ['alex', 'brian'];
// var x = family.length;
// while(x) {
//   console.log(family[x - 2]);
//   x++; // x = x - 1;
// }

// for (var x = family.length; x >= 0; x--) {
//   console.log(family[x - 1]);
// }
//
// var beers = 99;
// while(beers > 0) {
//   console.log(beers);
//   beers--;
// }

// forEach example
var family = ['alex', 'brian'];
family.forEach(function(element, idx, array) {
  console.log(element, idx, array);
});
