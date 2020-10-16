const { MessageEmbed } = require("discord.js");
const db = require('quick.db');


module.exports.run = async (client, message, args, invite, color) => {
  db.add(`cmdusage.${client.user.id}`, 1)
  
  const user = message.mentions.users.first() || message.author;
  
  let bal = db.get(`balance.${user.id}`);
  if (bal === null || undefined) bal = 0;
  
  
  const amount = bal.toLocaleString();
  
  const embed = new MessageEmbed()
  .setAuthor(user.username + ' cash!', user.displayAvatarURL())
  .setTitle("Pocket!")
  .setColor(color)
  .setDescription(`**${amount}**$`)
  .setFooter(client.user.username + ` | [${new Date().toString().split(" ", 5).join(" ")}]`, client.user.displayAvatarURL())
  
  message.channel.send(`Cash of **${user.tag}**`, embed)

};


module.exports.help = {
  name: "cash",
  description: "Get your total cash!",
  usage: "<@user>",
  category: "Games",
  aliases: ["balance", "bal"]
};