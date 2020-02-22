const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = ('t!');

bot.login(process.env.TOKEN);

bot.on("message", (message) => {

  if(message.content === prefix + "help") {
    message.channel.send("en dévloppement")

  }

  if(message.content === "!help") {
    message.channel.send("c'est pas cette commande voila le vrais help : t!help")

  }
  
});
