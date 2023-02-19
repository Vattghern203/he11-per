const { docsHandler } = require('../handlers/docsHandler')

const { Events } = require('discord.js')

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {

        if (interaction.isStringSelectMenu()) {

            const selectedTech = interaction.values[0]
    
            await interaction.reply(docsHandler(selectedTech))
        }
        
        if (!interaction.isChatInputCommand()) return
    
        const command = interaction.client.commands.get(interaction.commandName)
    
        if (!command) {
    
            console.error("Command not found :/")
    
            return
        }
    
        try {
    
            await command.execute(interaction)
    
        } catch (error) {
    
            await interaction.reply(`There's a error while executing this command: ${interaction.commandName}`)
            console.error(error)
        }
    }
}