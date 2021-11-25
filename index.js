// How to make a Discord Bot on Replit discord.js v13
require('http').createServer((req, res) => res.end(process.version)).listen()

// Discord
const { Client, Intents, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const token = process.env['TOKEN']
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES', 'DIRECT_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES'], partials: ['CHANNEL'] })
const prefix ='nx '

client.on('ready', () => {
  console.log(`The bot is online!`)
})

client.login(token)