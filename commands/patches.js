const{ Discord, MessageActionRow, MessageSelectMenu } =  require("discord.js")
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("1.1.2")
//const update = process.env['UPDATE'];
//const updateInfo = ("• use /inbox for information")
const updateInfo = (" ")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('patches')
        .setDescription('Patch Logs for every game Patch!'),

	async execute(interaction) {
    const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Update 004-1',
							description: 'Update Logs for Update #004-1!',
							value: '00401',
						},
						{
							label: 'Update 004-2',
							description: 'Update Logs for Update #004-2!',
							value: '00402',
						},
                                                {
							label: 'Update 007-1',
							description: 'Update Logs for Update #007-1!',
							value: '00701',
						},
                                                {
							label: 'Update 007-2',
							description: 'Update Logs for Update #007-2!',
							value: '00702',
						},
                                                {
							label: 'Update 008-1',
							description: 'Update Logs for Update #008-1!',
							value: '00801',
						},
                                                {
							label: 'Update 009-1',
							description: 'Update Logs for Update #009-1!',
							value: '00901',
						},
                                                {
							label: 'Update 009-2',
							description: 'Update Logs for Update #009-2!',
							value: '00902',
						},
                                                {
							label: 'Update 010-1',
							description: 'Update Logs for Update #010-1!',
							value: '01001',
						},
					]),
                )

		await interaction.reply({ embeds:[updates], ephemeral:false, components: [row] });

		const collector = interaction.channel.createMessageComponentCollector({
			            contentType: "SELECT_MENU"
			        })
			
			        collector.on("collect", async (collected) => { 
			        const value = collected.values[0]
			
			            if(value === "00401") {
			                collected.reply({ embeds:[update00401], ephemeral:true })
			            }
			
			            if(value === "00402") {
                                        collected.reply({ embeds:[update00402], ephemeral:true })
                                    }

                                    if(value === "00701") {
                                        collected.reply({ embeds:[update00701], ephemeral:true })
                                    }

                                    if(value === "00702") {
                                        collected.reply({ embeds:[update00702], ephemeral:true })
                                    }

                                    if(value === "00801") {
                                        collected.reply({ embeds:[update00801], ephemeral:true })
                                    }

                                    if(value === "00901") {
                                        collected.reply({ embeds:[update00901], ephemeral:true })
                                    }

                                    if(value === "00902") {
                                        collected.reply({ embeds:[update00902], ephemeral:true })
                                    }

                                    if(value === "01001") {
                                        collected.reply({ embeds:[update01001], ephemeral:true })
                                    }

				})
    }
};

const updates = new MessageEmbed()
        .setTitle("**`Pick a Patch!`**")
        .setColor("a69518")

const update00401 = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Update #004-1')
        .setDescription('**[April 21, 2022](https://store.steampowered.com/news/app/1889640/view/3224023791143344613)**\n```\nminor bug fixes\n```\n[ [Steam](https://store.steampowered.com/news/app/1889640/view/3224023791143344613) | [Wiki](https://the-backrooms-survival.fandom.com/wiki/Updates) ]')
        .setFooter(`Update: ${update} ${updateInfo}`)

const update00402 = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Update #004-2')
        .setDescription('**[April 22, 2022](https://store.steampowered.com/news/app/1889640/view/3224023791146978691)**\n```\nfixed bug where some entities cannot damage player when crouched\n```\n[ [Steam](https://store.steampowered.com/news/app/1889640/view/3224023791146978691) | [Wiki](https://the-backrooms-survival.fandom.com/wiki/Updates) ]')
        .setFooter(`Update: ${update} ${updateInfo}`)

const update00701 = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Update #007-1')
        .setDescription('**[June 3, 2022](https://store.steampowered.com/news/app/1889640/view/3336617587222238905)**\n```\nPatch #003 For fixing multiplayer bugs this week including:\n-taking items from chests\n-dancers creating several entities\n-bug where reviving a player who died from thirst/hunger causes you to be unable to die that way again\n-Fixed examining items softlocking the game if another player takes the item while you\'re examining it\n-Fixed floating trapdoor\n-Other bugs such as backpack position bugs, shadow bugs, some item bugs etc\n\nNext patch will fix issues with entities syncing!\n```\n[ [Steam](https://store.steampowered.com/news/app/1889640/view/3336617587222238905) | [Wiki](https://the-backrooms-survival.fandom.com/wiki/Updates) ]')
        .setFooter(`Update: ${update} ${updateInfo}`)

const update00702 = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Update #007-2')
        .setDescription('**[Jun 3, 2022](https://store.steampowered.com/news/app/1889640/view/3336617587223147460)**\n```\nfix a bug where all entities will become invisible after trying to examine an item\n```\n[ [Steam](https://store.steampowered.com/news/app/1889640/view/3336617587223147460) | [Wiki](https://the-backrooms-survival.fandom.com/wiki/Updates) ]')
        .setFooter(`Update: ${update} ${updateInfo}`)

const update00801 = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Update #008-1')
        .setDescription('**[June 6, 2022](https://store.steampowered.com/news/app/1889640/view/3336617587233799689)**\n```\nQuick Extra Patch:\n\nFixes:\n-Having a flashlight out potentially causing all players to teleport all over the place\n-Dropping a flashlight not removing it\n-dropping any weapon causing you to unequip a weapon even if it\'s not the same one\n-Mousewheel scrolling randomly unequipping items\n```\n[ [Steam](https://store.steampowered.com/news/app/1889640/view/3336617587233799689) | [Wiki](https://the-backrooms-survival.fandom.com/wiki/Updates) ]')
        .setFooter(`Update: ${update} ${updateInfo}`)

const update00901 = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Update #009-1')
        .setDescription('**[June 10, 2022](https://store.steampowered.com/news/app/1889640/view/3336618221382994451)**\n```\nquick hotfix following todays update to patch a few other things, mainly the blunderbuss gun being able to fire without ammo exploit!\n```\n[ [Steam](https://store.steampowered.com/news/app/1889640/view/3336618221382994451) | [Wiki](https://the-backrooms-survival.fandom.com/wiki/Updates) ]')
        .setFooter(`Update: ${update} ${updateInfo}`)

const update00902 = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Update #009-2')
        .setDescription('**[June 12, 2022](https://store.steampowered.com/news/app/1889640/view/3336618221388832184)**\n```\n-Quick patch to fix a bug where dropping musket ammo allows you to dupe it by picking back up more\n```\n[ [Steam](https://store.steampowered.com/news/app/1889640/view/3336618221388832184) | [Wiki](https://the-backrooms-survival.fandom.com/wiki/Updates) ]')
        .setFooter(`Update: ${update} ${updateInfo}`)

const update01001 = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Update #010-1')
        .setDescription('**[June 19, 2022](https://store.steampowered.com/news/app/1889640/view/5967847045488070623)**\n```\nJust a quick extra and small update....\n-fixed ammo dupe glitch by dropping ammo before reloading finishes\n-fixed a bug where an item you are trying to pick up will still disappear even if your inventory is full\n-fixed a graphical bug with female soldier texture\n-added two new food items: fish tin and pashtet tin\n-more anti-cheats\n-fixed a bug where leaderboard was not appearing for some\n```\n[ [Steam](https://store.steampowered.com/news/app/1889640/view/5967847045488070623) | [Wiki](https://the-backrooms-survival.fandom.com/wiki/Updates) ]')
        .setFooter(`Update: ${update} ${updateInfo}`)