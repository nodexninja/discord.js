const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')

module.exports = (msg, args) => {
  const embed = new MessageEmbed()
  .setColor(`#0064ff`)
  .setTitle(`Help Page`)
  .setDescription(`This bot is still under development!`)
  .addField(`About`, `A multi-purpose discord bot!`)
  const row = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setCustomId(`commands`)
    .setLabel(`Commands`)
    .setStyle(`PRIMARY`)
  )
  msg.reply({ embeds: [embed], components: [row], content: `Need help?` })
}