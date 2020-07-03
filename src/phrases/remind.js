module.exports = {
    phrase: 'remind me',
    description: 'to remind about something in the future',
    async execute(message, words) {
        message.reply(`Will remind you about ${words}`);
    },
};
