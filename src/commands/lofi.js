const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

const dotenv = require('dotenv')
dotenv.config()
const { BOT_COLOR } = process.env

const embed = new EmbedBuilder()
    .setColor(BOT_COLOR)
    .setTitle('lofi music')
    .setDescription('Some lofi playlists')
    .setThumbnail('https://yt3.googleusercontent.com/KNYElmLFGAOSZoBmxYGKKXhGHrT2e7Hmz3WsBerbam5uaDXFADAmT7htj3OcC-uK1O88lC9fQg=s88-c-k-c0x00ffffff-no-rj')
    .addFields(
        // Break line
        { name: '\u200B', value: '\u200b'},

        { name: 'lofi girl channel', value: 'https://www.youtube.com/c/lofigirl'},

        { name: 'lofi radio 24/7', value: 'https://www.youtube.com/watch?v=jfKfPfyJRdk'},

		{ name: 'lofi study playlist', value: 'https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM?si=e1c8667920844f38'},
    )

module.exports = {
 
    data: new SlashCommandBuilder()
            .setName("lofi")
            .setDescription("returns a list of lofi music to listen 🎵."),
        
    async execute(interaction) {
    
        await interaction.reply({ embeds: [embed]})
    }
}