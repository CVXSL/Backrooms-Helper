const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong'),
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Info about a user')
                .addUserOption(option => option.setName('target').setDescription('The user')))
        
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Info about the server'));
                .addUserOption(option => option.setName('test').setDescription('The test')))
                interaction.reply({ embeds: [embed] })
    // async execute(interaction) {
    //     const embed = new MessageEmbed()
    //     .setColor('c8bfc0')
    //     .setTitle('Pong')
    //     interaction.reply({ embeds: [embed] })
    }
};