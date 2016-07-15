var pokemonDex = [
  'pikachu',
  'squirtle',
  'bulbasaur'
];

for (var foo = 0; foo < pokemonDex.length; foo++) {
  console.log(pokemonDex);
}

pokemonDex.forEach(function(pokemon) {
  console.log(pokemon);
});
