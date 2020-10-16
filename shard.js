const {ShardingManager} = require("discord.js");
const config = require("./config.json"); // Optional

const shards = new ShardingManager("./quick.js", {
    token: config.token, // If your token was inside .env, use process.env
    totalShards: "auto"
});

shards.on("shardCreate", shard => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Launched shard #${shard.id}`);
});

shards.spawn(shards.totalShards); // For safety reason, try to use 10 seconds to respawn the shard.