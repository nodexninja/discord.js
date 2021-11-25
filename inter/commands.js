const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')

module.exports = (inter) => {
  console.log(`User ${inter.member.user.tag} asked for help!`)
  const embed = new MessageEmbed()
  .setColor(`#0064ff`)
  .setTitle(`Commands`)
  .setDescription(`Here are a list of useful commands!`)
  .addField(`ping`, `Replies with pong!`)
  const row = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setCustomId(`commands`)
    .setLabel(`Commands`)
    .setStyle(`PRIMARY`)
  )
  inter.update({ embeds: [embed], components: [row], content: `Need help?` })
}