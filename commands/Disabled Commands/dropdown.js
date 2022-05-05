const{ Discord, MessageActionRow, MessageSelectMenu } =  require("discord.js")
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("1.0.28")
//const update = process.env['UPDATE'];
const updateInfo = ("• use /inbox for information")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dropdown')
        .setDescription('Dropdown Command'),

	async execute(interaction) {
    const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Test 1',
							description: 'This is Test 1!',
							value: 'test1',
						},
						{
							label: 'Test 2',
							description: 'This is Test 2!',
							value: 'test2',
						},
					]),
                )

		await interaction.reply({ embeds:[test], ephemeral:false, components: [row] });

		const collector = interaction.channel.createMessageComponentCollector({
			            contentType: "SELECT_MENU"
			        })
			
			        collector.on("collect", async (collected) => { 
			        const value = collected.values[0]
			
			        if(value === "test1") {
			            collected.reply({ embeds:[test1], ephemeral:true })
			        }
			
			        if(value === "test2") {
			            collected.reply({ embeds:[test2], ephemeral:true })
			        }
				})
    }
};

const test1 = new MessageEmbed()
        .setTitle("You selected something!")
        .setDescription("You chose test 1!")
        .setColor("a69518")

const test2 = new MessageEmbed()
        .setTitle("You selected something!")
        .setDescription("You chose test 2!")
        .setColor("a69518")

const test = new MessageEmbed()
        .setTitle("This is a test command!")
        .setColor("a69518")