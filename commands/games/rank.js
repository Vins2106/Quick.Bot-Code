const { MessageEmbed } = require("discord.js")
const db = require('quick.db');
const fs = require('fs');
const canvacord = require("canvacord");
const img = "https://cdn.discordapp.com/embed/avatars/0.png";
let xp = require("../../database/xp.json");
const Discord = require("discord.js");
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const { Canvas } = require('canvas-constructor');

module.exports.run = async (client, message, args, invite, color) => {
  db.add(`cmdusage.${client.user.id}`, 1)
  
  const user = message.mentions.users.first() || message.author;
  
    if(!xp[user.id]){
   xp[user.id] = {
     xp: 0,
     level: 2
  };
}
  //buat read json
  let curxp = xp[user.id].xp;
  let curlvl = xp[user.id].level;
  let nxtLvlXp = curlvl * 500;
  let difference = curxp/nxtLvlXp *297;
  let difference2 = nxtLvlXp - curxp;
  
    async function createCanvas() {
  return new Canvas(300,50)
.setColor('lightgrey')
.printRectangle(0,0,300,200)
.setColor('#f44262')
.printRectangle(0,0,difference, 200)
.setTextFont('bold 15px Courier New') 
.setColor('#000000') 
.printText(`${curxp} / ${nxtLvlXp}`, 120,30)
.toBufferAsync() 
  } 

  const img = new Discord.MessageAttachment(await createCanvas(), 'rank-proggres.png')
  
  const embed = new MessageEmbed()
  .setAuthor(user.username + ' rank!', user.displayAvatarURL())
  .setTitle("Here the rank!")
  .addField("Current XP", curxp, true)
  .addField("Current Level", curlvl, true)
  .addField("Next Level Xp", nxtLvlXp, true)
  .addField("Proggres:", `${getProgbar(curxp, nxtLvlXp, 10)}`, true)
  .addField("Need Xp To Reach Next level:", `**${curlvl +1}** / **${difference2}**`, true)
  .setColor(color)
  
  message.channel.send(`Rank Of **${user.tag}**`, embed)

   function getProgbar(current, max, length){
   const curBer = Math.floor((current/max)*length);
   let str = '';
   for(let i = 0; i < length; i++){
       str += i < curBer ? '✅' :'⬛'
   }
    return str;
}
};


module.exports.help = {
  name: "rank",
  description: "Check your level/rank",
  usage: "<@user",
  category: "Games"
};