const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const fs = require("fs");
var ms = require('parse-ms');


module.exports.run = async (client, message, args, invite, color) => {
  db.add(`cmdusage.${client.user.id}`, 1)
  
      let cooldown = 5000
  
  let lastdaily = await db.fetch(`lastDaily_${message.author.id}`)
  if (lastdaily !== null && cooldown - (Date.now() - lastdaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastdaily))
        message.channel.send(`**${message.author.username}**, **Come back again after: ${timeObj.hours} hours, ${timeObj.minutes} minutes and ${timeObj.seconds} seconds**`)
    } else  {
        db.set(`lastDaily_${message.author.id}`, Date.now());        
      
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
  
  const item = [obsidian, coal, diamond, emerald, gold, iron, lapis, redstone]
  const random = item[Math.floor(Math.random() * item.length)]
  const random2 = item[Math.floor(Math.random() * item.length)]
  const random3 = item[Math.floor(Math.random() * item.length)]
  
  const jumlah = Math.floor(Math.random() * 5);
  const jumlah2 = Math.floor(Math.random() * 8);
  const jumlah3 = Math.floor(Math.random() * 10);

    const embed = new MessageEmbed()
    .setAuthor(message.author.tag + ' mine!', message.author.displayAvatarURL())
    .setTitle(`You mining and get:`)
    .setDescription(`
${random.emoji} ~ ${random.name} - \`${jumlah}\`
${random2.emoji} ~ ${random2.name} - \`${jumlah2}\`
${random3.emoji} ~ ${random3.name} - \`${jumlah3}\` 
`)
    .setColor(color)
    .setFooter(client.user.username + '', client.user.displayAvatarURL())
    
    message.channel.send(`**Wait 5 seconds before you mine again!**`,embed)
  
  
  if (random.name == obsidian.name) {
    db.add(`obsidian.${message.author.id}`, jumlah)
  }
    if (random.name == coal.name) {
    db.add(`coal.${message.author.id}`, jumlah)
  }
    if (random.name == diamond.name) {
    db.add(`diamond.${message.author.id}`, jumlah)
  }
    if (random.name == emerald.name) {
    db.add(`emerald.${message.author.id}`, jumlah)
  }
    if (random.name == gold.name) {
    db.add(`gold.${message.author.id}`, jumlah)
  }
    if (random.name == iron.name) {
    db.add(`iron.${message.author.id}`, jumlah)
  }
    if (random.name == lapis.name) {
    db.add(`lapis.${message.author.id}`, jumlah)
  }
    if (random.name == redstone.name) {
    db.add(`redstone.${message.author.id}`, jumlah)
  }
  
  //2
    if (random2.name == obsidian.name) {
    db.add(`obsidian.${message.author.id}`, jumlah2)
  }
    if (random2.name == coal.name) {
    db.add(`coal.${message.author.id}`, jumlah2)
  }
    if (random2.name == diamond.name) {
    db.add(`diamond.${message.author.id}`, jumlah2)
  }
    if (random2.name == emerald.name) {
    db.add(`emerald.${message.author.id}`, jumlah2)
  }
    if (random2.name == gold.name) {
    db.add(`gold.${message.author.id}`, jumlah2)
  }
    if (random2.name == iron.name) {
    db.add(`iron.${message.author.id}`, jumlah2)
  }
    if (random2.name == lapis.name) {
    db.add(`lapis.${message.author.id}`, jumlah2)
  }
    if (random2.name == redstone.name) {
    db.add(`redstone.${message.author.id}`, jumlah2)
  }
  
  //3
    if (random3.name == obsidian.name) {
    db.add(`obsidian.${message.author.id}`, jumlah3)
  }
    if (random3.name == coal.name) {
    db.add(`coal.${message.author.id}`, jumlah3)
  }
    if (random3.name == diamond.name) {
    db.add(`diamond.${message.author.id}`, jumlah3)
  }
    if (random3.name == emerald.name) {
    db.add(`emerald.${message.author.id}`, jumlah3)
  }
    if (random3.name == gold.name) {
    db.add(`gold.${message.author.id}`, jumlah3)
  }
    if (random3.name == iron.name) {
    db.add(`iron.${message.author.id}`, jumlah3)
  }
    if (random3.name == lapis.name) {
    db.add(`lapis.${message.author.id}`, jumlah3)
  }
    if (random3.name == redstone.name) {
    db.add(`redstone.${message.author.id}`, jumlah3)
  }  
  } 



};


module.exports.help = {
  name: "mine",
  description: "Get the items and sell it",
  usage: "",
  category: "Games",
  aliases: ["mining"]
};