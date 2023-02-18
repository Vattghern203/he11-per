const { docsHandler } = require('../src/handlers/docsHandler')

const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const dotenv = require('dotenv')

dotenv.config()

const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

const fs = require('node:fs')
const path = require('node:path')

const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection()

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)

    console.log(command)

    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command)
    }

    else {

        console.log(`This command in ${filePath} has some probles with "data" or the "execute" function!`)
    }
}

console.log(client.commands)

// Create a new client instance

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(TOKEN);

// Listener of interactions
client.on(Events.InteractionCreate, async interaction => {

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

        await interaction.reply(`There's a error while executing this command: ${command}`)
        console.error(error)
    }

    console.log(interaction)

})
