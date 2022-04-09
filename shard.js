const { ShardingManager } = require('discord.js');
const config = require('./config.json');


let manager = new ShardingManager('./index.js', {
    token: config.TOKEN,
    totalShards: 'auto',
});

manager.on('shardCreate', shard => {
    console.log(`[SHARDS]: Launched Shard ${shard.id}`)
    shard.send({type: "shardId", data: {shardId: shard.id}});
});

manager.spawn();