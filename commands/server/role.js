const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("1.0.27")
//const update = process.env['UPDATE'];
const updateInfo = ("• use /inbox for information")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('role')
        .setDescription('MOD: Add or Remove roles from users.'),
    async execute(interaction) {
        const embed = new MessageEmbed()
        embed.setColor('a69518')
        //embed.setTitle('Help')
        embed.setDescription('*`Coming to the moderation set of commands soon!`*')
        //embed.setFooter(`Update: ${update} ${updateInfo}`)
        interaction.reply({ embeds: [embed] })
    }
};