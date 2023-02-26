module.exports.getPokemonData = 

async function getPokemonData (pokemon) {
    try {

        await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                .then(res => (res.json()))
                .then((data) => {
    
                    console.log(data)

                    return data.name.toString()
                })

    } catch(err) {

        console.error(err)

        return "Pokémon not found! Check if you not mispelled and try again."
    }
}