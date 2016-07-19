$(function() {

  var $startBtn = $('#start');
  var $songList = $('#song-list');

  function $beerBallad() {
    var totalBeers = 99;
    for(var numBeers = totalBeers; numBeers >= 0; numBeers--) {
      var amtOfBeers = function(numBeers) {
        if(numBeers > 1 || numBeers === 0) {
          return numBeers + ' bottles';
        } else {
          return numBeers + ' bottle';
        }
      };
      var beerSong = '\n' + amtOfBeers(numBeers) + ' of beer on the wall, ' + amtOfBeers(numBeers) + ' of beer. Take one down and pass it around, ' + amtOfBeers(numBeers - 1) + ' of beer on the wall.';
      if(numBeers >= 1) {
        console.log(beerSong);
      } else {
        console.log('\nNo more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, ' + totalBeers.toString() + ' bottles of beer on the wall.');
      }
    }

    $startBtn.on('click', function() {
      var listItem = '<li>' + $beerBallad.val() + '</li>';
      $songList.append(listItem);
    }
  );
  }
});
