const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')

module.exports = (msg, args, db) => {
  const embed = new MessageEmbed()
  .setColor(`#0064ff`)
  .setTitle(`${msg.author.username}'s Balance`)
  .setDescription(`You have ${db.get(msg.author.id)} coins! :moneybag:`)
  msg.reply({ embeds: [embed] })
  console.log(db.all())
}