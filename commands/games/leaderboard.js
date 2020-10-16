const { MessageEmbed } = require("discord.js")
const db = require('quick.db');
let xp = require('../../database/xp');

module.exports.run = async (client, message, args, invite, color) => {  
  db.add(`cmdusage.${client.user.id}`, 1)

  if (!args[0]) {
    message.channel.send(`
\`q!lb <category>\`
\`\`\`
[+] balance
[+] level
\`\`\``)
  }
  
  if (args[0] === "balance" || args[0] === "bal") {
      const bal = db.get(`balance`)

      let board = [];
  for(let key of Object.keys(bal)){
    let value = Object.assign({user: client.users.cache.get(key)}, bal[key]);
    board.push(value);
  }
  
  board = board.filter(x => x.user);
  board = board.sort((a,b) => b.balance-a.balance).splice(0, 10);
  top = board.map((x, i) => `**${i+1}**   ~ **${x.user.username}** - \`${db.get(`balance.${x.user.id}`).toLocaleString()}$\``).join('\n');
  let embed = new MessageEmbed() 
  .setColor(color)
  .setAuthor(client.user.username + ' balance leaderboard!', client.user.displayAvatarURL())
  .setDescription(top)
  .setFooter(message.guild.name + '', message.guild.iconURL())
  .setTimestamp()
  
  return message.channel.send(embed);
  }
  
  if (args[0] === "rank" || args[0] === "level") {
      let board = [];
  for(let key of Object.keys(xp)){
    let value = Object.assign({user: client.users.cache.get(key)}, xp[key]);
    board.push(value);
  }
  
  board = board.filter(x => x.user);
  board = board.sort((a,b) => b.xp-a.xp).splice(0, 10);
  top = board.map((x, i) => `**${i+1}**   ~ **${x.user.username}** -  level \`${x.level.toLocaleString()}\` ~ xp: \`${x.xp.toLocaleString()}\``).join('\n\n');
  let embed = new MessageEmbed() 
  .setColor(color)
  .setAuthor(client.user.username + ' level leaderboard!', client.user.displayAvatarURL())
  .setDescription(top)
  .setFooter(message.guild.name + '', message.guild.iconURL())
  .setTimestamp()
  
  return message.channel.send(embed);
  }
};


module.exports.help = {
  name: "leaderboard",
  description: "Get the leaderboard",
  usage: "",
  category: "Games",
  aliases: ["lb"]
};