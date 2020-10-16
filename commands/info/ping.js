const { MessageEmbed } = require("discord.js")
const db = require('quick.db');


module.exports.run = async (client, message, args, invite, color) => {
  db.add(`cmdusage.${client.user.id}`, 1)
  
  message.channel.startTyping()

  
  	let msgping1 = new Date();
      let msgping2 = new Date() - message.createdAt;
  
  
  
  const embed = new MessageEmbed()
  .setColor(color)
  .addField(`Time:`, `**${client.ws.ping}**ms`, true)
  .addField(`Latency`, `**${msgping2}**ms`, true)
  .addField(`Api`, `**${Math.floor(client.ws.ping)}**ms`, true)
  .setFooter(`Pong!`)
  
  message.channel.send(embed).then(() => message.channel.stopTyping());
  


};


module.exports.help = {
  name: "ping",
  description: "Check your ping",
  usage: "",
  category: "Info",
  aliases: ["pong", "myping"]
};