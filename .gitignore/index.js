const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = ('t!');

bot.login('Njc2MDUwNzYzOTA2MDIzNDI0.XkAzvg.dmFWscx2vKEU8nlaWKcthDi_f7s');

bot.on("message", (message) => {

  if(message.content === prefix + "help") {
    message.channel.send("en dévloppement")

  }

  if(message.content === "!help") {
    message.channel.send("c'est pas cette commande voila le vrais help : t!help")

  }
  
});
