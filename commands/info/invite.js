const { MessageEmbed } = require("discord.js")
const db = require('quick.db');


module.exports.run = async (client, message, args, invite, color) => {  
  db.add(`cmdusage.${client.user.id}`, 1)


  const embed = new MessageEmbed()
  .setAuthor(client.user.tag + ' invite!', client.user.displayAvatarURL())
  .setDescription(`Here the link **${message.author.tag}** \n you can get my invite link from [here](${invite})`)
  .setColor(color)
  .setFooter(client.user.username + "", client.user.displayAvatarURL())
  .setTimestamp()
  
  message.channel.send(`invite link here! UwU`, embed)
};


module.exports.help = {
  name: "invite",
  description: "Get my invite link",
  usage: "",
  category: "Info",
  aliases: ["getme"]
};