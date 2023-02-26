const { SlashCommandBuilder } = require('discord.js')

const { randomNumber } = require("../functions/randomNumber")

function coinFlip() {

    return randomNumber() % 2 === 0 ? "Heads" : "Tails"
}

module.exports = {
 
    data: new SlashCommandBuilder()
            .setName("coin")
            .setDescription("Returns Heads or Tails"),
        
    async execute(interaction) {
    
        await interaction.reply(`${coinFlip()}! :coin:`)
    }
}