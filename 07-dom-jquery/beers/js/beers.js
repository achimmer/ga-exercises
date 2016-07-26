$(function(){
  var $start = $('#start');
  var $reset = $('#reset');
  var $list = $('#song-list');

  var xBeer = 99;

  // on click Start deliver lines of lyrics
  $start.on('click', function() {
    for (var i = xBeer; i >= 0; i--) {
      var verseTxt = beerVerse(i);
      var listItem = '<li>' + verseTxt + '</li>';
      $list.append(listItem);
    }
  });

  // beerVerse will deliver line of song + number of beers
  function beerVerse(numBeer) {
    if (numBeer === 1) {
      return numBeer + ' bottle of beer on the wall, ' + numBeer + ' bottle of beer. Take 1 down pass it around, ' + (numBeer - 1) + ' bottle of beer on the wall.';
    } else if (numBeer === 0) {
      return 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.';
    }
    return numBeer + ' bottles of beer on the wall, ' + numBeer + ' bottles of beer. Take 1 down pass it around, ' + (numBeer - 1) + ' bottles of beer on the wall.';
  }

  // reset button
  $reset.on('click', function() {
    $list.children().remove();
    // console.log('reset');
  });
});
