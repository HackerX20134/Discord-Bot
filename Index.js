const aoijs = require("aoi.js");
require('./website')
const bot = new aoijs.Bot({
  mobile: false, 
	intents : "all",
  token: "OTIwOTY5ODg2NjQ0MTc4OTY1.YbsGCw.YzOM6l3TJXNCAdCeh1ESk_a3ATw",
  prefix: ['$getServerVar[prefix]', '<@!$clientID>', '<@$clientID>']
})

bot.onMessage()
bot.readyCommand({
    channel: '',
    code: `$log[ready on $userTag[$clientId]]`
})

bot.status({
        text: "K!help",
        type: "WATCHING",
        status: "online",
        time: 12 
    })

    bot.status({
        text: "$serverCount Server Keren!",    
        type: "WATCHING",
        status: "online",
        time: 12
    })

bot.command({
  name: "ping",
  code: `
Ping : **$ping Ms**`
})

bot.onReactionRemove();
bot.onBanAdd();
bot.onTypingStart();
bot.onChannelDelete();
bot.onMessageUpdate();
bot.onPresenceUpdate();
bot.onUserUpdate();
bot.onMessageDelete();
bot.onInteractionCreate();
bot.onGuildUpdate();
bot.onVariableCreate();
bot.onVariableUpdate();
bot.onVariableDelete();

bot.variables(require('./variable.js'))

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/')
