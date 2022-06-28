const{ Discord, MessageActionRow, MessageSelectMenu } =  require("discord.js")
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("1.0.29")
//const update = process.env['UPDATE'];
//const updateInfo = ("• use /inbox for information")
const updateInfo = (" ")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Find information on The Backrooms: Survival'),

	async execute(interaction) {
    const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Server',
							description: 'Learn about the official Discord Server!',
							value: 'server',
						},
						{
							label: 'Bot',
							description: 'Learn about the official Discord Bot!',
							value: 'bot',
						},
					]),
                )

		await interaction.reply({ embeds:[infos], ephemeral:false, components: [row] });

		const collector = interaction.channel.createMessageComponentCollector({
			            contentType: "SELECT_MENU"
			        })
			
			        collector.on("collect", async (collected) => { 
			        const value = collected.values[0]
			
			        if(value === "server") {
			            collected.reply({ embeds:[server], ephemeral:true })
			        }
			
			        if(value === "bot") {
			            collected.reply({ embeds:[bot], ephemeral:true })
			        }
				})
    }
};

const infos = new MessageEmbed()
        .setDescription("**```Pick something to learn about!```**```If this message doesn't work anymore, make sure the bot is on the right update.\n\nYou can check by using the /info command and selecting \"Bot\".```")
        .setFooter(`Update: ${update} ${updateInfo}`)
        .setColor("a69518")

const server = new MessageEmbed()
        .setTitle("Server Information")
        .setColor("a69518")
        .setDescription("")
        .addField('test1', 'test2', true)
        .setFooter(`Update: ${update} ${updateInfo}`)

const bot = new MessageEmbed()
        .setTitle("Bot Information")
        .setColor("a69518")
        .setDescription("")
        .setFooter(`Update: ${update} ${updateInfo}`)