const { MessageEmbed } = require("discord.js")
const db = require('quick.db');


module.exports.run = async (client, message, args, invite, color) => {  
  db.add(`cmdusage.${client.user.id}`, 1)
  
  let user = message.mentions.users.first() || message.author;
  
  if (user.bot) {
    return message.channel.send(`🚫 | **${message.author.username}**! bot do not have inventory!`)
  }
  
  let coal = db.get(`coal.${user.id}`)
  if (coal === undefined) {
    coal = 0;
  }
  
  let diamond = db.get(`diamond.${user.id}`)
  if (diamond === undefined) {
    diamond = 0;
  }
  
    let emerald = db.get(`emerald.${user.id}`)
  if (emerald === undefined) {
    emerald = 0;
  }
      let gold = db.get(`gold.${user.id}`)
  if (gold === undefined) {
    gold = 0;
  }
      let iron = db.get(`iron.${user.id}`)
  if (iron === undefined) {
    iron = 0;
  }
      let lapis = db.get(`lapis.${user.id}`)
  if (lapis === undefined) {
    lapis = 0;
  }
        let obsidian = db.get(`obsidian.${user.id}`)
  if (obsidian === undefined) {
    obsidian = 0;
  }
        let redstone = db.get(`redstone.${user.id}`)
  if (redstone === undefined) {
    redstone = 0;
  }
  
  
  const embed = new MessageEmbed()
  .setAuthor(user.tag + ' | Inventory', user.displayAvatarURL())
  .setTitle('Inventory!')
  .setDescription(`
\`${coal}\` <:mine_coal:765568794386890752>
\`${diamond}\` <:mine_diamond:765571253016461364>
\`${emerald}\` <:mine_emerald:765571301943017493>
\`${gold}\` <:mine_gold:765570858420273162>
\`${iron}\` <:mine_iron:765570774634463252>
\`${lapis}\` <:mine_lapis:765571025042931713>
\`${obsidian}\` <:mine_obsidian:765571100242870332>
\`${redstone}\` <:mine_redstone:765570952539930624>`)
  .setFooter(client.user.username + ` | [${new Date().toString().split(" ", 5).join(" ")}]`, client.user.displayAvatarURL())
  .setColor(color)
  
  message.channel.send(`**${user.username}** inventory!`, embed)

};


module.exports.help = {
  name: "inventory",
  description: "Show your inv",
  usage: "",
  category: "Games",
  aliases: ["inv", "bag"]
};