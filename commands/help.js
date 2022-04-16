const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("1.0.21")
//const update = process.env['UPDATE'];
const updateInfo = ("• use /inbox for information")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Help Command'),
    async execute(interaction) {
        const embed = new MessageEmbed()
        embed.setColor('a69518')
        //embed.setTitle('Help')
        embed.setDescription('*`This command has been removed from our systems and will be removed from the discord slash command list soon!`*')
        //embed.setFooter(`Update: ${update} ${updateInfo}`)
        interaction.reply({ embeds: [embed] })
    }
};