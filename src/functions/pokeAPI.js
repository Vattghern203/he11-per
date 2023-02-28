module.exports.pokeAPI = 

    async function pokeAPI(pokeName) {

        const pokeData = []

        try {

            await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
                    .then(res => (res.json()))
                    .then((data) => {
    
                        console.log(`fetched data: ${data}`)
                    })

        } catch(error) {

            console.error(error)
        }

        return pokeData

    }