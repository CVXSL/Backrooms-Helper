const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("1.0.14")
//const update = process.env['UPDATE'];
const updateInfo = ("• use /inbox for information")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Returns info based on imput!')
        .addSubcommand(subcommand =>
            subcommand
                .setName("user")
                .setDescription('Gets information of a user mentioned!')
                .addUserOption(option => option.setName("target").setDescription("The user mentioned!")))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription("Info about the server!")),
    async execute(interaction) { 
        if (interaction.options.getSubcommand() === "user") {
        const user = interaction.options.getUser("target");
        if (user) {
            await interaction.reply(`**Username**: ${user.username}\n**ID**: ${user.id}`);
        } else {
            await interaction.reply(`**Username**: ${interaction.user.username}\n**Your ID**: ${interaction.user.id}`);
        }
    } else if (interaction.options.getSubcommand() === "server") {
        await interaction.reply(`**Server Name**: ${interaction.guild.name}\n**Total Members**: ${interaction.guild.memberCount}`);
    } else {
        await interaction.reply("No sub command was used.")
        }
    },
};