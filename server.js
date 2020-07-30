const Discord = require('discord.js'); //Needed discord.js module
const client = new Discord.Client(); //Creating Discord new client

client.once('ready', () => { //When bot is ready , bot will run given code
	console.log('Ready!'); //Sends Ready to console as message
  client.user.setActivity(`I am Devil`); //Sets bot activity as "I am Devil" 
});

client.on("message", message => { //when Someone message 
  if(message.content === "!ping") { //if message is same as !ping
    return message.channel.send(`Pong ${client.ws.ping}`); //it will return message
  }
});

client.login('NzM4NDUwMTM2NDg0ODA2NjU5.XyMFSA.Z2VDjx7mPAQ2MmsD9yAD_HfGQOk'); //Paste Your Bot Token