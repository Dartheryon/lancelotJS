const Discord = require('discord.js');

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