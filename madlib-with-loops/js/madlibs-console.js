$(function() {
  var startups = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
  var ideas = ['Kittens', 'Cars', 'Clowns', 'Insurance', 'Clothes', 'Food', 'Hipsters'];

  var $create = $('#create');
  var $reset = $('#reset');
  var $print = $('#print');
  var $favs = $('#favorites');

  // on click Start deliver lines of lyrics
  $create.on('click', function() {
    var random1 = Math.floor((Math.random() * startups.length)),
        random2 = Math.floor((Math.random() * ideas.length));
    // console.log('A startup that is "' + startups[random1] + '" but for "' + ideas[random2] + '"');
    var startupNameIdea = 'A startup that is "' + startups[random1] + '" but for "' + ideas[random2] + '"'
    $favs.append(startupNameIdea);
  });

});
