const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')

module.exports = (msg, args) => {
  msg.reply(`:ping_pong: Pong!`)
}