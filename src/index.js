const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const dotenv = require('dotenv')

dotenv.config()

const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

const fs = require('node:fs')
const path = require('node:path')


// Instance of a new Client.
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection()

// Command Handler
const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

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

// Event Handler
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'))

for (const file of eventFiles) {

    const filePath = path.join(eventsPath, file)
    const event = require(filePath)

    if (event.once) {

        client.once(event.name, (...args) => event.execute(...args))
    
    } else {

        client.on(event.name, (...args) => event.execute(...args))
    }
}


// Log in to Discord with your client's token
client.login(TOKEN);
