const { MessageEmbed } = require("discord.js")
const db = require('quick.db');


module.exports.run = async (client, message, args, invite, color) => { 
  db.add(`cmdusage.${client.user.id}`, 1)
  
  let user = message.mentions.users.first()
  
  if (!user) {
    return message.channel.send(`**${message.author.tag}**! Ping someone!`)
  }
  
  if (user.id == message.author.id) {
    return message.channel.send(`:x: | You cannot pay to yourself`)
  }
  
  const amount = args.slice(1).join(" ")
  if (!amount) {
    return message.channel.send(`:x: | Provide amount!`)
  }
  
  const a = client.users.cache.get(user.id)
  
  message.channel.send(`**${user.tag}** got **${amount}**$ from **${message.author.tag}**`)
  a.send(`Hey! you got **${amount}**$ from **${message.author.tag}**!`)
  
  db.add(`balance.${user.id}`, amount)
  db.subtract(`balance.${message.author.id}`, amount)
};


module.exports.help = {
  name: "pay",
  description: "Give someone money",
  usage: "<@user> [amount]",
  category: "Games",
  aliases: ["transfer"]
};