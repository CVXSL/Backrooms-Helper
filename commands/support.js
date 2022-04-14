const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("1.0.18")
//const update = process.env['UPDATE'];
const updateInfo = ("• use /inbox for information")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Support Command'),
    async execute(interaction) {
        const embed = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Support')
        .setDescription('Feel free to join our server at https://discord.gg/8GtHzUMdyD for help!')
        .setFooter(`Update: ${update} ${updateInfo}`)
        interaction.reply({ embeds: [embed] })
    }
};