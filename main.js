//const pokemonInput = document.getElementById("pokemon-input");
//const pokemonButton = document.getElementById("pokemon-button");
const pokemonImage = document.getElementById("pokemon-image");

console.log("Hello world!");

//pokemonButton.addEventListener("click", function() {
  //const pokemonName = pokemonInput.value.toLowerCase();
  //const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/bulbasaur/`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log("Fetched!");
      const imageUrl = data.sprites.front_default;
      pokemonImage.setAttribute("src", imageUrl);
    })
    .catch(error => {
      console.log(error);
      pokemonImage.setAttribute("src", "");
    });
//});