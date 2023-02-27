const { axios } = require("axios")

module.exports.getPokemonData = 

async function getPokemonData (pokemon) {

    const toArray = []

    try {

       const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
       const res = await axios.get(url)

       toArray.push(res.data)

       console.log(toArray)

       return toArray.name

    } catch(err) {

        console.error(err)

        return "Pokémon not found! Check if you not mispelled and try again."
    }
}