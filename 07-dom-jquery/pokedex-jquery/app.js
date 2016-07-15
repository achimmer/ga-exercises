$(function() {

  var $pokemonNameField = $('#pokemon-name');
  var $addbtn = $('#add-pokemon');
  var $pokemonList = $('#pokemon-list');

  $addbtn.on('click', function() {
    var listItem = '<li>' + $pokemonNameField.val() + '</li>'
    $pokemonList.append(listItem);
  });

});
