const{ Discord, MessageActionRow, MessageSelectMenu } =  require("discord.js")
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const update = ("1.1.3")
//const update = process.env['UPDATE'];
//const updateInfo = ("• use /inbox for information")
const updateInfo = (" ")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('faq')
        .setDescription('Find answers to Frequently Asked Questions!'),

	async execute(interaction) {
    const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Level ! - Run For Your Life',
							description: 'Suggestion',
							value: '001',
						},
						{
							label: 'Invisible Entities',
							description: 'Multiplayer Bug',
							value: '002',
						},
                                                {
							label: 'Duplication Bug',
							description: 'Bug',
							value: '003',
						},
                                                {
							label: 'Examine Bug',
							description: 'Bug',
							value: '004',
						},
                                                {
							label: 'Larger Levels',
							description: 'Suggestion',
							value: '005',
						},
                                                {
							label: 'Upgraded Professions',
							description: 'Suggestion',
							value: '006',
						},
                                                {
							label: 'Revival Bug',
							description: 'Multiplayer Bugs',
							value: '007',
						},
                                                {
							label: 'Dog Whistle',
							description: 'Question',
							value: '008',
						},
                                                {
							label: 'Angel Bell',
							description: 'Question',
							value: '009',
						},
					]),
                )

		await interaction.reply({ embeds:[faq], ephemeral:true, components: [row] });

		const collector = interaction.channel.createMessageComponentCollector({
			            contentType: "SELECT_MENU"
			        })
			
			        collector.on("collect", async (collected) => { 
			        const value = collected.values[0]
			
			            if(value === "001") {
			                collected.reply({ embeds:[faq001], ephemeral:false })
			            }
			
			            if(value === "002") {
                                        collected.reply({ embeds:[faq002], ephemeral:false })
                                    }

                                    if(value === "003") {
                                        collected.reply({ embeds:[faq003], ephemeral:false })
                                    }

                                    if(value === "004") {
                                        collected.reply({ embeds:[faq004], ephemeral:false })
                                    }

                                    if(value === "005") {
                                        collected.reply({ embeds:[faq005], ephemeral:false })
                                    }

                                    if(value === "006") {
                                        collected.reply({ embeds:[faq006], ephemeral:false })
                                    }

                                    if(value === "007") {
                                        collected.reply({ embeds:[faq007], ephemeral:false })
                                    }
                                    
                                    if(value === "008") {
                                        collected.reply({ embeds:[faq008], ephemeral:false })
                                    }
                                    
                                    if(value === "009") {
                                        collected.reply({ embeds:[faq009], ephemeral:false })
                                    }
				})
    }
};

const faq = new MessageEmbed()
        .setTitle("**`Select an FAQ item!`**")
        .setColor("a69518")

const faqTEMPLATE = new MessageEmbed()
        .setTitle("")
        .setDescription("**Type**: ``\n**Status**: ``\n\n**Description**```\n\n```\n [ []() ]")
        .setColor("a69518")
        .setFooter(`Update: ${update} ${updateInfo} • FAQ ID: 00`)

const faq001 = new MessageEmbed()
        .setTitle("Level ! - Run For Your Life")
        .setDescription("**Type**: `Suggestion`\n**Status**: `Acknowledged`\n\n**Description**```\nAs described by the official backrooms wiki:\n\n\"Level ! is one of the most dangerous oddball levels in the Backrooms and one of the most entity-infested levels. This level is also one of levels where you're not allowed to stay due to the amounts of entities that may chase you.\"\n\n\"Level !\" is a very dangerous level. As to whether or not we are going to add it, that may be discussed at a later date. For the current moment, we aren\'t thinking about \"Level !\" as a level to be added to the roster.\n\nAs well as that, we are also looking for new and unique ideas for level themes. If you have any ideas for levels, feel free to let us know and we will consider it!\n```\n[ [Level ! Wiki](https://backrooms.fandom.com/wiki/Level_!) ]")
        .setColor("a69518")
        .setFooter(`Update: ${update} ${updateInfo} • FAQ ID: 001`)

const faq002 = new MessageEmbed()
        .setTitle("Invisible Entities")
        .setDescription("**Type**: `Multiplayer Bug`\n**Status**: `Acknowledged`\n\n**Description**```\nSince its release, there has been a multiplayer specific bug where entities will only show up for 1 or 2 players and will be invisible for other players.\n\nAt the moment, we are actively fixing this issue and the hope is to get it fixed ASAP.\n\nKeep an eye out for future updates and information about bugs on The Backrooms: Survival news hub and in the steam application!\n```\n[ [Multiplayer Update](https://store.steampowered.com/news/app/1889640/view/3336617587212676014) | [Steam News Hub](https://store.steampowered.com/news/app/1889640/) ]")
        .setColor("a69518")
        .setFooter(`Update: ${update} ${updateInfo} • FAQ ID: 002`)

const faq003 = new MessageEmbed()
        .setTitle("Duplication Bug")
        .setDescription("**Type**: `Bug`\n**Status**: `Acknowledged`\n\n**Description**```\nFor obvious reasons, we aren't going to say how to conduct the bug, but there are a few ways to duplicate items in the game and we are actively fixing these bugs.\n\nKeep an eye out for future updates and information about bugs on The Backrooms: Survival news hub and in the steam application!\n```\n [ [Steam News Hub](https://store.steampowered.com/news/app/1889640/) ]")
        .setColor("a69518")
        .setFooter(`Update: ${update} ${updateInfo} • FAQ ID: 003`)

const faq004 = new MessageEmbed()
        .setTitle("Examine Bug")
        .setDescription("**Type**: `Bug`\n**Status**: `Acknowledged`\n\n**Description**```\nWhen you examine an item, the floor textures disappear behind the item. This bug has been acknowledged and we are actively trying to fix it.\n```")
        .setColor("a69518")
        .setFooter(`Update: ${update} ${updateInfo} • FAQ ID: 004`)

const faq005 = new MessageEmbed()
        .setTitle("Larger Levels")
        .setDescription("**Type**: `Suggestion`\n**Status**: `Acknowledged`\n\n**Description**```\nSomething that has been suggested since the game's release is \"bigger levels\". At the moment we aren't adding bigger levels because the current level size seems fit for playing.\n\nKeep an eye out for future updates and information about stuff you have suggested on The Backrooms: Survival news hub and in the steam application!\n```\n [ [Steam News Hub](https://store.steampowered.com/news/app/1889640/) ]")
        .setColor("a69518")
        .setFooter(`Update: ${update} ${updateInfo} • FAQ ID: 005`)

const faq006 = new MessageEmbed()
        .setTitle("Upgraded Professions")
        .setDescription("**Type**: `Suggestion`\n**Status**: `Acknowledged`\n\n**Description**```\nUpgrading professions is something we have slowly been doing as we see issues rising with them. At the moment, we are trying to keep the game balanced with 1 perk per profession so it's not scuffed.\n\nFeel free to suggest new professions to us if you have any ideas!\n```")
        .setColor("a69518")
        .setFooter(`Update: ${update} ${updateInfo} • FAQ ID: 006`)

const faq007 = new MessageEmbed()
        .setTitle("Revival Bug")
        .setDescription("**Type**: `Multiplayer Bug`\n**Status**: `Acknowledged`\n\n**Description**```\nWhen revived in multiplayer, some players are unable to use items and lean. This has been acknowledged and we are actively working on fixing this bug.\n\nKeep an eye out for future updates and information about bugs on The Backrooms: Survival news hub and in the steam application!\n```\n [ [Steam News Hub](https://store.steampowered.com/news/app/1889640/) ]")
        .setColor("a69518")
        .setFooter(`Update: ${update} ${updateInfo} • FAQ ID: 007`)

const faq008 = new MessageEmbed()
        .setTitle("Dog Whistle")
        .setDescription("**Type**: `Question`\n**Status**: `Common`\n\n**Description**```\nThe Dog Whistle is an item that attracts hounds to the location of use. This is good for outsmarting Hounds if one is in the way of your path.\n```\n [ [Dog Whistle](https://the-backrooms-survival.fandom.com/wiki/Whistle) | [Hound](https://the-backrooms-survival.fandom.com/wiki/Hound) ]")
        .setColor("a69518")
        .setFooter(`Update: ${update} ${updateInfo} • FAQ ID: 008`)

const faq009 = new MessageEmbed()
        .setTitle("Angel Bell")
        .setDescription("**Type**: `Question`\n**Status**: `Common`\n\n**Description**```\nThe Angel Bell is an item that kills angel statues in close proximity to you. If you find that you are being chased by an Angel Statue, use an Angel Bell to kill them.\n```\n [ [Angel Bell](https://the-backrooms-survival.fandom.com/wiki/Bell) | [Angel Statue](https://the-backrooms-survival.fandom.com/wiki/Angel_Statue) ]")
        .setColor("a69518")
        .setFooter(`Update: ${update} ${updateInfo} • FAQ ID: 009`)