// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon"
let results = null;

async function getPokemon(url, callback) {
    const response = await fetch(url);
    
    if (response.ok) {
        const data = await response.json();
        callback(data);
  }
}

function doStuff(data) {
    results = data;
    const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
  
    document.querySelector("#output").innerHTML = html
    console.log("first: ", results)
}

function doStuffList(data) {
    const pokeList = data.results.map(poke => poke.name);
    pokeSorted = sortPokemon(pokeList)
    pokeSorted.forEach(poke => {document.querySelector("#outputList").innerHTML += `<li>${poke}</li>`});
}

function sortPokemon(list) {
    return list.sort()
}

getPokemon(url, doStuff);
getPokemon(urlList, doStuffList)

