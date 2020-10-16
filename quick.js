const Client = require("discord.js");
const Discord = require("discord.js");
const client = new Discord.Client({disableMention: "all"});

const config = require("./config.json");
const token = config.token;
const prefix = config.prefix;
const invite = config.invite;

client.login(token)

const { readdirSync } = require("fs");
const { sep } = require("path");
const { success, error, warning } = require("log-symbols");
const { Collection } = require("discord.js");
const fs = require('fs')

client.on("ready", () => {
  console.log("Im ready!")
  client.user.setStatus("idle")
  client.user.setActivity(`${client.users.cache.size.toLocaleString()} user's`, {type: "LISTENING"})
});

client.config = config;
const color = "GREEN";

["commands", "aliases"].forEach(x => client[x] = new Collection());

const load = (dir = "./commands/") => {

	readdirSync(dir).forEach(dirs => {

		const commands = readdirSync(`${dir}${sep}${dirs}${sep}`).filter(files => files.endsWith(".js"));

		for (const file of commands) {
			const pull = require(`${dir}/${dirs}/${file}`);
			if (pull.help && typeof (pull.help.name) === "string" && typeof (pull.help.category) === "string") {
				if (client.commands.get(pull.help.name)) return console.warn(`${warning} Two or more commands have the same name ${pull.help.name}.`);
				client.commands.set(pull.help.name, pull);
				console.log(`${success} Loaded command ${pull.help.name}.`);

			}
			else {
				console.log(`${error} Error loading command in ${dir}${dirs}. you have a missing help.name or help.name is not a string. or you have a missing help.category or help.category is not a string`);
				continue;
			}
			if (pull.help.aliases && typeof (pull.help.aliases) === "object") {
				pull.help.aliases.forEach(alias => {
			
					if (client.aliases.get(alias)) return console.warn(`${warning} Two commands or more commands have the same aliases ${alias}`);
					client.aliases.set(alias, pull.help.name);
				});
			} 
		} 

	});
};


// we call the function to all the commands.
load();

const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

client.on('message', async message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  
  	const prefix = config.prefix;
  const prefixes = "quick"
	const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)}|${escapeRegex(prefixes)})\\s*`);
	if (!prefixRegex.test(message.content)) return;

  
	const [, matchedPrefix] = message.content.match(prefixRegex);
	const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
	const cmd = args.shift().toLowerCase();

	let command;
	if (!message.member) message.member = await message.guild.get(message.author);


	if (cmd.length === 0) return;
	if (client.commands.has(cmd)) command = client.commands.get(cmd);
	else if (client.aliases.has(cmd)) command = client.commands.get(client.aliases.get(cmd));
  
  const invite = config.invite;

	if (command) command.run(client, message, args, invite, color);
  
  const timeoutxp = new Set();
  
  let xp = require('./database/xp.json');
    let xpAdd = Math.floor(Math.random() * 20); 
   if (timeoutxp.has(message.author.id)) return;
  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 500;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    
     message.channel.send(`GG ${message.author}! you level up to **\`${curlvl + 1}\`**`).then(m => m.delete(7000));
  }
  
  fs.writeFile("./database/xp.json", JSON.stringify(xp, null, 2), (err) => {
    if (err) console.log(err)
  });
  timeoutxp.add(message.author.id);
setTimeout(() => timeoutxp.delete(message.author.id), 5000);
});