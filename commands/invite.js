const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("Beta 1.0.7")
const updateInfo = ("• use /inbox for information")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Invite Command'),
    async execute(interaction) {
        const embed = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Invite')
        .setDescription('Invite **Backrooms Helper** to your server!\n\n> - [Regular (recommended)](https://discord.com/api/oauth2/authorize?client_id=962426694126420008&permissions=517543943232&scope=bot%20applications.commands)\n> - [Admin](https://discord.com/api/oauth2/authorize?client_id=962426694126420008&permissions=8&scope=bot%20applications.commands)\n\n> - [Support Server](https://discord.gg/8GtHzUMdyD)')
        .setFooter(`Update: ${update} ${updateInfo}`)
        interaction.reply({ embeds: [embed] })
    }
};