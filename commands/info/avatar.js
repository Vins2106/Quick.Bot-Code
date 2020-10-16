const { MessageEmbed } = require("discord.js")
const db = require('quick.db');


module.exports.run = async (client, message, args, invite, color) => {
  
  const user = message.mentions.users.first() || message.author;
  
  message.channel.send(`__**${user.tag}**__'s avatar!
${user.displayAvatarURL({format: "png", dynamic: true, size: 4096})}`)


};


module.exports.help = {
  name: "avatar",
  description: "Get users avatar",
  usage: "<@user>",
  category: "Info",
  aliases: ["pp"]
};