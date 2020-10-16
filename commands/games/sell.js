const { MessageEmbed } = require("discord.js")
const db = require('quick.db');


module.exports.run = async (client, message, args, invite, color) => {  
  db.add(`cmdusage.${client.user.id}`, 1)
  
  if (!args[0]) {
    return message.channel.send(`\`q!sell <items>\`
\`\`\`css
[+] obsidian
[+] coal
[+] diamond
[+] emerald
[+] gold
[+] iron
[+] lapis
[+] redstone
\`\`\``)
  }
  
  
    const obsidian = {
    name: "obsidian",
    emoji: "<:mine_obsidian:765571100242870332>"
  }
  const coal = {
    name: "coal",
    emoji: "<:mine_coal:765568794386890752>"
  }
  const diamond = {
    name: "diamond",
    emoji: "<:mine_diamond:765571253016461364>"
  }
  const emerald = {
    name: "emerald",
    emoji: "<:mine_emerald:765571301943017493>"
  }
  const gold = {
    name: "gold",
    emoji: "<:mine_gold:765570858420273162>"
  }
  const iron = {
    name: "iron",
    emoji: "<:mine_iron:765570774634463252> "
  }
  const lapis = {
    name: "lapis",
    emoji: "<:mine_lapis:765571025042931713>"
  }
  const redstone = {
    name: "redstone",
    emoji: "<:mine_redstone:765570952539930624>"
  }
  
  const item = [obsidian, coal, diamond, emerald, gold, iron, lapis , redstone]
  const item2 = [obsidian, coal, diamond, emerald, gold, iron, lapis , redstone]
  

  if (args[0] === obsidian.name) {
    const a = db.get(`obsidian.${message.author.id}`)
    if (!a === null || undefined) {
      return message.channel.send(":x | You do not have **Obsidian** on your inv!")
    }
    
    let amount = args[1]
    if (!amount) {
      return message.channel.send(`:x: | Give the amount!`)
    }
    
    if (amount > a) {
      return message.channel.send(`:x: | You do not have **${amount}** obsidian on your inv!`)
    }
    
    const random = [Math.floor(Math.random() * 100 * amount)]
    
    message.channel.send(`You sell **Obsidian** \`${amount}\`x for: \`${random}\`$`)
    db.subtract(`obsidian.${message.author.id}`, amount)
    db.add(`balance.${message.author.id}`, random)
  }
  
    if (args[0] === coal.name) {
    const a = db.get(`coal.${message.author.id}`)
    if (!a === null || undefined) {
      return message.channel.send(":x | You do not have **Coal** on your inv!")
    }
    
    let amount = args[1]
    if (!amount) {
      return message.channel.send(`:x: | Give the amount!`)
    }
    
    if (amount > a) {
      return message.channel.send(`:x: | You do not have **${amount}** Coal on your inv!`)
    }
    
    const random = [Math.floor(Math.random() * 50 * amount)]
    
    message.channel.send(`You sell **Coal** \`${amount}\`x for: \`${random}\`$`)
    db.subtract(`coal.${message.author.id}`, amount)
    db.add(`balance.${message.author.id}`, random)
  }
  
      if (args[0] === diamond.name) {
    const a = db.get(`diamond.${message.author.id}`)
    if (!a === null || undefined) {
      return message.channel.send(":x | You do not have **Diamond** on your inv!")
    }
    
    let amount = args[1]
    if (!amount) {
      return message.channel.send(`:x: | Give the amount!`)
    }
    
    if (amount > a) {
      return message.channel.send(`:x: | You do not have **${amount}** Diamond on your inv!`)
    }
    
    const random = [Math.floor(Math.random() * 200 * amount)]
    
    message.channel.send(`You sell **Diamond** \`${amount}\`x for: \`${random}\`$`)
    db.subtract(`diamond.${message.author.id}`, amount)
    db.add(`balance.${message.author.id}`, random)
  }
      if (args[0] === emerald.name) {
    const a = db.get(`emerald.${message.author.id}`)
    if (!a === null || undefined) {
      return message.channel.send(":x | You do not have **Emerald** on your inv!")
    }
    
    let amount = args[1]
    if (!amount) {
      return message.channel.send(`:x: | Give the amount!`)
    }
    
    if (amount > a) {
      return message.channel.send(`:x: | You do not have **${amount}** Emerald on your inv!`)
    }
    
    const random = [Math.floor(Math.random() * 200 * amount)]
    
    message.channel.send(`You sell **Emerald** \`${amount}\`x for: \`${random}\`$`)
    db.subtract(`emerald.${message.author.id}`, amount)
    db.add(`balance.${message.author.id}`, random)
  }
  
      if (args[0] === gold.name) {
    const a = db.get(`gold.${message.author.id}`)
    if (!a === null || undefined) {
      return message.channel.send(":x | You do not have **Gold** on your inv!")
    }
    
    let amount = args[1]
    if (!amount) {
      return message.channel.send(`:x: | Give the amount!`)
    }
    
    if (amount > a) {
      return message.channel.send(`:x: | You do not have **${amount}** Gold on your inv!`)
    }
    
    const random = [Math.floor(Math.random() * 150 * amount)]
    
    message.channel.send(`You sell **Gold** \`${amount}\`x for: \`${random}\`$`)
    db.subtract(`gold.${message.author.id}`, amount)
    db.add(`balance.${message.author.id}`, random)
  }
  
      if (args[0] === iron.name) {
    const a = db.get(`iron.${message.author.id}`)
    if (!a === null || undefined) {
      return message.channel.send(":x | You do not have **Iron** on your inv!")
    }
    
    let amount = args[1]
    if (!amount) {
      return message.channel.send(`:x: | Give the amount!`)
    }
    
    if (amount > a) {
      return message.channel.send(`:x: | You do not have **${amount}** Iron on your inv!`)
    }
    
    const random = [Math.floor(Math.random() * 115 * amount)]
    
    message.channel.send(`You sell **Iron** \`${amount}\`x for: \`${random}\`$`)
    db.subtract(`iron.${message.author.id}`, amount)
    db.add(`balance.${message.author.id}`, random)
  }
  
      if (args[0] === lapis.name) {
    const a = db.get(`lapis.${message.author.id}`)
    if (!a === null || undefined) {
      return message.channel.send(":x | You do not have **Lapis** on your inv!")
    }
    
    let amount = args[1]
    if (!amount) {
      return message.channel.send(`:x: | Give the amount!`)
    }
    
    if (amount > a) {
      return message.channel.send(`:x: | You do not have **${amount}** Lapis on your inv!`)
    }
    
    const random = [Math.floor(Math.random() * 90 * amount)]
    
    message.channel.send(`You sell **Lapis** \`${amount}\`x for: \`${random}\`$`)
    db.subtract(`lapis.${message.author.id}`, amount)
    db.add(`balance.${message.author.id}`, random)
  }
  
      if (args[0] === redstone.name) {
    const a = db.get(`redstone.${message.author.id}`)
    if (!a === null || undefined) {
      return message.channel.send(":x | You do not have **Redstone** on your inv!")
    }
    
    let amount = args[1]
    if (!amount) {
      return message.channel.send(`:x: | Give the amount!`)
    }
    
    if (amount > a) {
      return message.channel.send(`:x: | You do not have **${amount}** Redstone on your inv!`)
    }
    
    const random = [Math.floor(Math.random() * 65 * amount)]
    
    message.channel.send(`You sell **Redstone** \`${amount}\`x for: \`${random}\`$`)
    db.subtract(`redstone.${message.author.id}`, amount)
    db.add(`balance.${message.author.id}`, random)
  }
  
  
  
};


module.exports.help = {
  name: "sell",
  description: "Sell the items",
  usage: "<items>",
  category: "Games"
};