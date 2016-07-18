var beers = 99;
while(beers > 0) {
  if (beers > 1) {
    console.log(beers, 'bottles of beer on the wall', beers, 'bottles of beer, take one down pass it around', beers - 1, 'bottles of beer on the wall');
  } else {
    console.log(beers, 'bottle of beer on the wall', beers, 'bottle of beer, take one down pass it around', beers, 'bottle of beer on the wall');
  }
  beers--;
}
