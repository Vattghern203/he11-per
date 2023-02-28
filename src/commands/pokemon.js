const { SlashCommandBuilder} = require('discord.js')

const { pokeAPI } = require("../functions/pokeAPI")

module.exports = {
 
    data: new SlashCommandBuilder()
            .setName("pokemon")
            .setDescription("returns the data for a specific pokémon")
            .addStringOption((option) =>
                                 option.setName('pokemon')
                                    .setDescription('Pokémon to search for')
                                    .setRequired(true)),
                                                
    async execute(interaction) {

        const pokemonName = interaction.options.getString('pokemon')

        console.log(pokemonName)
    
        await interaction.deferReply(pokeAPI(pokemonName))
    }
}