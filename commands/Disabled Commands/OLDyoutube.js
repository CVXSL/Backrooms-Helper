const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("1.0.29")
//const update = process.env['UPDATE'];
//const updateInfo = ("• use /inbox for information")
const updateInfo = (" ")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('youtube')
        .setDescription('View the latest content from partnered creators!')
        .addSubcommand(subcommand =>
            subcommand
                .setName("absoluteandrew")
                .setDescription('View the latest content from AbsoluteAndrew!')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('cvxsl')
                .setDescription("View the latest content from CVXSL!")
        ),


    async execute(interaction) { 
        if (interaction.options.getSubcommand() === "absoluteandrew") {
            await interaction.reply({ embeds: [absoluteandrew] });
    }   else if (interaction.options.getSubcommand() === "cvxsl") {
            await interaction.reply({ embeds: [cvxsl] });
    } else {
        await interaction.reply("No sub command was used.")
        }
    },
};

const absoluteandrew = new MessageEmbed()
        .setColor('a69518')
        .setTitle('AbsoluteAndrew')
        .setDescription('**Newest to Oldest**\n\n> [The Updates just get BETTER AND BETTER | The Backrooms: Survival](https://youtu.be/FtfRMGvcues)\n> \n> [I get Bullied in the Backrooms | The Backrooms: Survival](https://youtu.be/ZLkDH6Pt1XU)\n> \n> [This is actually FUN HORROR | The Backrooms: Survival 2](https://youtu.be/-ul2ziCtmYQ)\n> \n> [This BRAND NEW Backrooms Horror Game is PHENOMENAL! | The Backrooms: Survival](https://youtu.be/f8-56wITxnA)\n\n[ [Wiki](https://the-backrooms-survival.fandom.com/wiki/YouTube) | [YouTube](https://www.youtube.com/channel/UCTa4yPNjm19BANM5-gp20QA) ]')
        .setThumbnail('https://yt3.ggpht.com/bSFXwN4ZaP7o2jsxHLQjc4q8RmYO7xxIP0LCNWEiRGIsOK_NW3fM8UveXEX-2FC6YXqPwMLUVuI=s176-c-k-c0x00ffffff-no-rj')
        .setFooter(`Update: ${update} ${updateInfo}`)

const cvxsl = new MessageEmbed()
        .setColor('a69518')
        .setTitle('CVXSL')
        .setDescription('**Newest to Oldest**\n\n> [AbsoluteAndrew Edit (Part 1/?)](https://youtu.be/8itZUrM073o)\n\n[ [Wiki](https://the-backrooms-survival.fandom.com/wiki/YouTube) | [YouTube](https://www.youtube.com/channel/UCEWrBKBuv5Cy74_Hc0OSZ-w/) ]')
        .setThumbnail('https://yt3.ggpht.com/T8UGcO-bLKpXYf5H9K6jjzXSR2u-GbA1UcpsexEFwnjvqnSclcZaIs1R8NJstsxzQKVuSzHhIA=s176-c-k-c0x00ffffff-no-rj')
        .setFooter(`Update: ${update} ${updateInfo}`)