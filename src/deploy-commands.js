const { REST, Routes } = require('discord.js')
const dotenv = require('dotenv')

dotenv.config()

const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

const fs = require('node:fs')
const path = require('node:path')

const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const commands = []

for (const file of commandFiles) {

    const command = require(`./commands/${file}`)

    commands.push(command.data.toJSON())
}

// Instance REST
const rest = new REST({version: "10"}).setToken(TOKEN);

// Deploy
(async () => {
    try {

        console.log(`Reseting ${commands.length} commands...`)

        // PUT

        const data = await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            {body: commands}
        )
            console.log("Success in registering the commands!")

    } catch (error) {
        console.error(error)
    }
})()