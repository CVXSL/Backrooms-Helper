const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Grabs update logs for the selected update!')
        //.addOptions("test")
        // .addSubcommand(subcommand =>
        //     subcommand
        //         .setName("test1")
        //         .setDescription('test1')
        // )
        // .addSubcommand(subcommand =>
        //     subcommand
        //         .setName("test2")
        //         .setDescription('test2')
        // )
        // .addSubcommand(subcommand =>
        //     subcommand
        //         .setName("test3")
        //         .setDescription('test3')
        // ),
        .addStringOption(option => option.setName('input').setDescription('Enter a string'))
        .addIntegerOption(option => option.setName('int').setDescription('Enter an integer'))
        .addNumberOption(option => option.setName('num').setDescription('Enter a number'))
        .addBooleanOption(option => option.setName('choice').setDescription('Select a boolean'))
        .addUserOption(option => option.setName('target').setDescription('Select a user'))
        .addChannelOption(option => option.setName('destination').setDescription('Select a channel'))
        .addRoleOption(option => option.setName('muted').setDescription('Select a role'))
        .addOption(option => option.setName('option').setDescription('OPTION'))
        .addMentionableOption(option => option.setName('mentionable').setDescription('Mention something')),

    async execute(interaction) {
        if (interaction.options.getSubcommand() === "test1") {
            await interaction.reply({ embeds: [test1] });
        } else if (interaction.options.getSubcommand() === "test2") {
            await interaction.reply({ embeds: [test2] });
        } else if (interaction.options.getSubcommand() === "test3") {
            await interaction.reply({ embeds: [test3] });
        } else {
            await interaction.reply("No sub command was used.")
        }
    },
};

const test1 = new MessageEmbed()
    .setColor('a69518')
    .setDescription('**`Test 1`**')

const test2 = new MessageEmbed()
    .setColor('a69518')
    .setDescription('**`Test 2`**')

const test3 = new MessageEmbed()
    .setColor('a69518')
    .setDescription('`**`Test 3`**')