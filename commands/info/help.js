const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const db = require('quick.db');


module.exports.run = async (client, message, args, invite, color) => {
  db.add(`cmdusage.${client.user.id}`, 1)
  const usage = db.get(`cmdusage.${client.user.id}`)
  
  	const embed = new MessageEmbed()
    .setAuthor(message.author.tag + '', message.author.displayAvatarURL())
    .setColor(color)
    .setTitle(`command usage: ${usage}`)
    .setFooter(client.user.username + ' | Make sure you not provide <>, [], (), in commands!', client.user.displayAvatarURL())
    .setTimestamp()
	if (args[0]) {
		let command = args[0];
		let cmd;
		if (client.commands.has(command)) {
			cmd = client.commands.get(command);
		}
		else if (client.aliases.has(command)) {
			cmd = client.commands.get(client.aliases.get(command));
		}
		if(!cmd) return message.channel.send(`<@${message.author.id}> | \`\`\`Error: \`I Can't Find This Command\` \ntype: \`q!help\` For get the commands list\`\`\``);
		command = cmd.help;
		embed.setTitle(`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)} command help`);
    embed.setDescription([`
📁 Cmd **Name**: \`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\`
📖 Cmd **Desc**: \`${command.description || "Empty."}\`
🔑 Cmd **Aliases**: \`${command.aliases ? command.aliases.join(", ") : "Empty."}\`
🗄️ Cmd **Category**: \`${command.category ? command.category : "General" || "Misc"}\`
❓ **How To Use**: \`${command.usage ? `\`${client.config.prefix}${command.name} ${command.usage}\`` : "Empty."}\``].join("\n"))

		return message.channel.send(embed);
	}
  	const categories = readdirSync("./commands/");
  embed.setDescription(`Do: \`${client.config.prefix}help <commands>\` for get detailed of commands, example:
\`${client.config.prefix}help ping\``)
	categories.forEach(category => {
		const dir = client.commands.filter(c => c.help.category.toLowerCase() === category.toLowerCase());
		const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1);
   


		try {
			if (dir.size === 0) return;
      embed.addField(`<a:mine_left:765600923899789343> | ${capitalise}`, `\`\`\`ini
${dir.map(c => `[${client.config.prefix}${c.help.name}]`).join(", ")}\`\`\``)
		}
		catch (e) {
			console.log(e);
		}
	});
	return message.channel.send(embed);
  
};


module.exports.help = {
  name: "help",
  description: "Get the commands list",
  usage: "<commands>",
  category: "Info",
  aliases: ["cmdlist", "cmd", "h"]
};