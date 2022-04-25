const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("1.0.27")
//const update = process.env['UPDATE'];
const updateInfo = ("• use /inbox for information")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('role')
        .setDescription('MOD: Add or Remove roles from users.')
        .addSubcommand(subcommand =>
            subcommand
                .setName("add")
                .setDescription('MOD: Add a role to a user!')
                .addUserOption(option => option.setName('target').setDescription('Select a user'))
                .addRoleOption(option => option.setName('role').setDescription('Select a role')),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("remove")
                .setDescription('MOD: Remove a role from a user!')
                .addUserOption(option => option.setName('target').setDescription('Select a user'))
                .addRoleOption(option => option.setName('role').setDescription('Select a role')),
        ),

    async execute(interaction) {
        const embed = new MessageEmbed()
        embed.setColor('a69518')
        //embed.setTitle('Help')
        embed.setDescription('*`Coming soon to moderation commands!`*')
        //embed.setFooter(`Update: ${update} ${updateInfo}`)
        interaction.reply({ embeds: [embed] })
    }
};