const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("1.1.0")
//const update = process.env['UPDATE'];
const updateInfo = ("• use /inbox for information")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('inbox')
        .setDescription('Inbox Commmand'),
    async execute(interaction) {
        const embed = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Message Inbox')
        .setDescription('<:ReplyCont:908141797233033228> **Update #005** (`/update 005`) - **April 27, 2022**\n<:ReplyCont:908141797233033228> **Update #004** (`/update 004`) - **April 20, 2022**\n<:ReplyCont:908141797233033228> **Update #003** (`/update 003`) - **April 16, 2022**\n<:ReplyCont:908141797233033228> **Update #002** (`/update 002`) - **April 13, 2022**\n<:Reply:908141797644042260> **Update #001** (`/update 001`) - **April 6, 2022**')
        //.setDescription('*We do not have any updates available!*')
        .setFooter(`Update: ${update} ${updateInfo}`)
        interaction.reply({ embeds: [embed] })
    }
};

// <:Reply:908141797644042260>
// <:ReplyCont:908141797233033228>