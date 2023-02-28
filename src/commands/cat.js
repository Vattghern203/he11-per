const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

const { getCatPic } = require('../functions/getCatPic');

const dotenv = require('dotenv')
dotenv.config()
const { BOT_COLOR } = process.env

const catResult = getCatPic()

module.exports = {
 
    data: new SlashCommandBuilder()
            .setName("cat")
            .setDescription("Returns with a cute cat pic."),
        
    async execute(interaction) {
    
        await interaction.reply({
            files: [catResult],
        })
    }
}