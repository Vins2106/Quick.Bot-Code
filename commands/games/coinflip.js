const { MessageEmbed } = require("discord.js")
const db = require('quick.db');


module.exports.run = async (client, message, args, invite, color) => {  
  db.add(`cmdusage.${client.user.id}`, 1)

  let amount = args[0]
  if (!amount) {
    return message.channel.send(`:x: | **${message.author.username}**! Give amount!`)
  }
  
  let bal = db.get(`balance.${message.author.id}`)
  if (bal === null || undefined) {
    return message.channel.send(`**${message.author.username}**! You do not have money!`)
  }
  
  if (amount > bal) {
    return message.channel.send(`**${message.author.username}**! You do not have **${amount}** in pocket!`)
  }
  
  const a = [
    "Heads",
    "Tails"
  ];
  
  const random = a[Math.floor(Math.random() * a.length)]
  
  const kali = [
    "2",
    "3"
  ]
  
  const wk = kali[Math.floor(Math.random() * kali.length)]
  
  const hasil = Math.floor(Math.random() * amount) * 2;
  
  const flip = Math.floor(Math.random() * 2);
  
  if (flip === 0) {
    message.channel.send(`You choice \`${random}\`
and got [**WIN**]!
earned: __**${hasil}**__$`)
      db.subtract(`balance.${message.author.id}`, amount)
  db.add(`balance.${message.author.id}`, hasil)
  } else {
    message.channel.send(`You choice \`${random}\`
and got [**LOST**]!
you lost __**${amount}**__$`)
    db.subtract(`balance.${message.author.id}`, amount)
  } 
  

  
  
};


module.exports.help = {
  name: "coinflip",
  description: "Get many coin from this command",
  usage: "<amount>",
  category: "Games",
  aliases: ["cf"]
};