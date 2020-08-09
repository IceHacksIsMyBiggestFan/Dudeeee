const Discord = require('discord.js'); //Needed discord.js module
const client = new Discord.Client(); //Creating Discord new client

client.once('ready', () => { //When bot is ready , bot will run given code
	console.log('Ready!'); //Sends Ready to console as message
  client.user.setActivity(`!help`); //Sets bot activity as "I am Devil" 
});

client.on("message", message => { //when Someone message 
  if(message.content === "!ping") { //if message is same as !ping
    return message.channel.send(`Pong ${client.ws.ping}`); //it will return message
  }
});

client.login('NzQxNDEzNDUxOTU1Njk5ODU0.Xy3NFQ.GMiRMHgdX08zLMDz_VZyKcxLV5Y'); //Paste Your Bot Token