const Discord = require('discord.js');
require('dotenv').config();
const prefix = '-l';
const client = new Discord.Client({
  allowedMentions: {
    parse: ['users', 'roles'],
    repliedUser: true,
  },
  intents: [
    'Guilds',
    'GuildMessages',
    'GuildMembers',
    'GuildMessageReactions'
  ],
});

client.on('ready', ()=>{
  console.log('Lancelot is online!')
})

client.login(process.env.TOKEN)