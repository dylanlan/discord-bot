module.exports = {
    name: '!thing',
    description: 'something',
    async execute(message, args) {
        message.reply(`you called me? here are the args: ${args}`);
    },
};
