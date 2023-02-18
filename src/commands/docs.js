const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js')

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Select a tech...")
            .addOptions(
                {
                    label: "JavaScript",
                    description: "See the JavaScript documetation",
                    value: 'javascript'
                },

                {
                    label: "HTML",
                    description: "See the HTML documentation",
                    value: 'html'
                },

                {
                    label: "CSS",
                    description: "See the CSS documentation",
                    value: 'css'
                },

                {
                    label: "SASS",
                    description: "See more about SASS, the CSS with super powers",
                    value: 'sass'
                },

                {
                    label: "React",
                    description: "See more about React",
                    value: 'react'
                },

                {
                    label: "Python",
                    description: "See the Python documentation",
                    value: 'python'
                },
            )
    )

module.exports = {
 
    data: new SlashCommandBuilder()
            .setName("docs")
            .setDescription("returns the documentation for a selected tech."),
        
    async execute(interaction) {
    
        await interaction.reply({
            content:"Select one of the techs below: ",
            components: [row]
        })
    }
}