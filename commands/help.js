const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("Beta 1.0.0")
const updateInfo = ("• use /inbox for information")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Help Command'),
    async execute(interaction) {
        const embed = new MessageEmbed()
        embed.setColor('a69518')
        embed.setTitle('Help')
        embed.setDescription('Feel free to join our server at https://discord.gg/8GtHzUMdyD for help!')
        embed.setFooter(`Update: ${update} ${updateInfo}`)
        interaction.reply({ embeds: [embed] })
    }
};