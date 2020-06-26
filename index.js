require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}`);
});

bot.on('message', message => {
  const args = message.content.split(/ +/);
  const command = args.shift().toLowerCase();

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('Woops, something went wrong executing that command');
  }
});
