// How to make a Discord Bot on Replit discord.js v13
require('http').createServer((req, res) => res.end(process.version)).listen()

// Database
const db = require('enhanced.db')
const options = {
  clearOnStart: false,
  filename: 'kek.sqlite'
}
db.options(options)
console.log(db.all())

// Discord
const { Client, Intents, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const token = process.env['TOKEN']
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES', 'DIRECT_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES'], partials: ['CHANNEL'] })
const prefix ='nx '

// Import Commands
const help = require('./commands/help.js')
const ping = require('./commands/ping.js')
const beg = require('./commands/beg.js')
const bal = require('./commands/bal.js')

// Import Interactions
const commands = require('./inter/commands.js')

client.on('ready', () => {
  console.log(`The bot is online!`)
})

client.on('messageCreate', async msg => {
  if (msg.content.startsWith(prefix)) {
    const args = msg.content.slice(prefix.length).trim().split(/ +/)
    const command = args.shift().toLowerCase()
    console.log(command)
    console.log(args)
    if (command === 'help') {
      help(msg, args)
    }
    if (command === 'ping') {
      ping(msg, args)
    }
    if (command === 'beg') {
      beg(msg, args, db)
    }
    if (command === 'bal' || command === 'balance') {
      bal(msg, args, db)
    }
  }
})

client.on('interactionCreate', inter => {
  if (inter.isButton()) {
    //console.log(inter)
    const id = inter.customId
    if (id === 'commands') {
      commands(inter)
    }
  }
})

client.login(token)