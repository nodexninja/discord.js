const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
function random(min, max) {
  // Random function
  return Math.floor(Math.random() * (max - min)) + min
}

module.exports = (msg, args, db) => {
  const luck = random(0, 10)
  const cash = random(1, 101)
  console.log(luck)
  if (luck > 0) {
    const embed = new MessageEmbed()
    .setColor(`#00b428`)
    .setTitle(`Amazing!`)
    .setDescription(`You received ${cash} coins!`)
    msg.reply({ embeds: [embed] })
    
  } else {
    const embed = new MessageEmbed()
    .setColor(`#ff0032`)
    .setTitle(`Oh no!`)
    .setDescription(`You got no coins. :pensive:`)
    msg.reply({ embeds: [embed] })
  }
  // Database Script
  if (luck > 0) {
    if (db.has(msg.author.id)) {
      db.add(msg.author.id, cash)
    } else {
      db.set(msg.author.id, cash)
    }
  } else {
    if (!db.has(msg.author.id)) {
      db.set(msg.author.id, 0)
    }
  }
  console.log(db.all())
}