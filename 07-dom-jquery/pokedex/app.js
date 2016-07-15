var pokemonNameField = document.getElementById('pokemon-name');
var addbtn = document.getElementById('add-pokemon');
var pokemonList = document.getElementById('pokemon-list');

// console.log(pokemonNameField);
// console.log(addbtn);
// console.log(pokemonList);

addbtn.onclick = function() {
  var newListItem = document.createElement('li');
  newListItem.innerHTML = pokemonNameField.value;
  // console.log(newListItem);
  pokemonList.appendChild(newListItem);
};
