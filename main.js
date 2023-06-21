//1

// async function getPokemonInfo() {

//   const pokemonName = document.getElementById('pokemonInput').value.toLowerCase();

//   const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

//   fetch(apiUrl)

//   .then(response => response.json())

//   .then(data => {

//     displayPokemon(data);

//   })

//   .catch(error => {

//     console.log('Error:', error);

//     alert('Pokémon not found. Please try again.');

//   });

// }

// function displayPokemon(pokemon) {

//   const pokemonContainer = document.getElementById('pokemonContainer');

//   pokemonContainer.innerHTML = '';

//   const div = document.createElement('div');

//   div.classList.add('pokemon');

//   const name = document.createElement('p');

//   name.textContent = pokemon.name;

//   const image = document.createElement('img');

//   image.src = pokemon.sprites.front_default;

//   image.alt = pokemon.name;

//   div.appendChild(name);

//   div.appendChild(image);

//   pokemonContainer.appendChild(div);

// }

//2

//     function myFunction() {

//    var x = document.getElementById('first').parentElement.nodeName;

//    document.getElementById('demo').innerHTML = x;

// }

//3

// const list = document.querySelectorAll('#ulList li');

// const newArray = Array.from(list);

// console.log(newArray);
