module.exports = {
    name: 'thing',
    description: 'something',
    execute(message, args) {
        message.reply(`you called me? here are the args: ${args}`);
    },
};
