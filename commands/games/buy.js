const { MessageEmbed } = require("discord.js")
const db = require('quick.db');


module.exports.run = async (client, message, args, invite, color) => {  
  db.add(`cmdusage.${client.user.id}`, 1)

  if (!args[0]) {
    return message.channel.send(`**${message.author.username}** type \`q!store\`!`)
  } else {
      const wood = {
    name: "wood_pickaxe",
    amount: "15",
    durability: "20"
  }
    const stone = {
    name: "stone_pickaxe",
    amount: "20",
    durability: "27"
  }
      const iron = {
    name: "iron_pickaxe",
    amount: "35",
    durability: "35"
  }
        const diamond = {
    name: "diamond_pickaxe",
    amount: "50",
    durability: "50"
  }
        
  const item = [wood, stone, iron, diamond]
  
  const itemname = [wood, stone, iron, diamond]
  
  if (item.name == itemname.name) {
    
    const bal = db.get(`balance.${message.author.id}`)
    if (!bal === null || undefined) {
      return message.reply(":x: | You do not have coin's!")
    }
    
    if (!itemname.amount > bal) {
      return message.reply(":x: | Your coin's on pocket not enough!")
    }
    
    message.channel.send(`
**${message.author.username}** buying **${itemname.name}** for **${itemname.amount}**
**${itemname.name}** durability: \`${itemname.durability}\``)
    
    db.add(`${itemname.name}.${message.author.id}`, 1)
    db.add(`${itemname.name}_durability.${message.author.id}`, itemname.durability)
    db.subtract(`balance.${message.author.id}`, itemname.amount)
  }
  }
  
};


module.exports.help = {
  name: "buy",
  description: "For buy a items",
  usage: "<items>",
  category: "Games"
};