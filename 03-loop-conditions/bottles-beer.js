// var beers = 99;
// while(beers > 0) {
//   if (beers > 1) {
//     console.log(beers, 'bottles of beer on the wall', beers, 'bottles of beer, take one down pass it around', beers - 1, 'bottles of beer on the wall');
//   } else {
//     console.log(beers, 'bottle of beer on the wall', beers, 'bottle of beer, take one down pass it around', beers, 'bottle of beer on the wall');
//   }
//   beers--;
// }



// Set total beers here
var totalBeers = 99;

// Loop through totalBeers for
// beers on the wall song
for(var numBeers = totalBeers; numBeers >= 0; numBeers--) {
  var amtOfBeers = function(numBeers) {

return (numBeers > 1 || numBeers === 0) ?
  numBeers + " bottles";
  numBeers + " bottle";

  var chime = "\n" + amtOfBeers(numBeers) + " of beer on the wall, " + amtOfBeers(numBeers) + " of beer. Take one down and pass it around, " + amtOfBeers(numBeers - 1) + " of beer on the wall."

  if(numBeers >= 1) {
    console.log(chime);
  } else {
    console.log("\nNo more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " + totalBeers.toString() + " bottles of beer on the wall.");
  }
}
