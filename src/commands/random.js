const { SlashCommandBuilder} = require('discord.js')

const { randomNumber } = require("../functions/randomNumber")

module.exports = {
 
    data: new SlashCommandBuilder()
            .setName("random")
            .setDescription("returns a random number between 1 and 100 by default.")
            .addIntegerOption((option) =>
                                option.setName('limit')
                                    .setDescription('sets the range of numbers. Ex: 1 to 10.')
                                    .setRequired(false)),
          
    async execute(interaction) {

        const limit = interaction.options.getInteger('limit')

        let selectedNumber = limit ? randomNumber(1, limit) : randomNumber()
    
        await interaction.reply(`The number selected was: ${selectedNumber}.`)
    }
}