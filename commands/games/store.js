const { MessageEmbed } = require("discord.js")
const db = require('quick.db');


module.exports.run = async (client, message, args, invite, color) => {  

  const embed = new MessageEmbed()
  .setAuthor(client.user.username + ' store', client.user.displayAvatarURL())
  .setTitle(`${client.config.prefix}buy <items>`)
  .setDescription("No Item! comeback again later!")
  .setColor(color)
  
  message.channel.send(`Here The Store **${message.author.username}**!`, embed)
  
  db.add(`cmdusage.${client.user.id}`, 1)
};


module.exports.help = {
  name: "store",
  description: "For buy a items",
  usage: "",
  category: "Games",
  aliases: ["shop"]
};