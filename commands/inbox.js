const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("Beta 1.0.7")
const updateInfo = ("• use /inbox for information")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('inbox')
        .setDescription('Inbox Commmand'),
    async execute(interaction) {
        const embed = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Message Inbox')
        .setDescription('<:Reply:908141797644042260> **Update #001** (`/update001`) - **April 6, 2022**')
        // .setDescription('*We do not have any change logs available!*')
        .setFooter(`Update: ${update} ${updateInfo}`)
        interaction.reply({ embeds: [embed] })
    }
};

// <:Reply:908141797644042260>
// <:ReplyCont:908141797233033228>