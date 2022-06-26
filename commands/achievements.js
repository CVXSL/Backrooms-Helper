const{ Discord, MessageActionRow, MessageSelectMenu } =  require("discord.js")
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("1.1.0")
//const update = process.env['UPDATE'];
const updateInfo = ("• use /inbox for information")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('achievements')
        .setDescription('Learn about different Achievements!'),

	async execute(interaction) {
    const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Lucky Escape',
							description: 'Read more information on Lucky Escape!',
							value: 'luckyescape',
						},
						{
							label: 'First Steps',
							description: 'Read more information on First Steps!',
							value: 'firststeps',
						},
						{
							label: 'Scheduled Programming',
							description: 'Read more information on Scheduled Programming!',
							value: 'scheduledprogramming',
						},
						{
							label: 'Hello..?',
							description: 'Read more information on Hello..?!',
							value: 'hello',
						},
						{
							label: 'Who let the dogs out?',
							description: 'Read more information on Who let the dogs out?!',
							value: 'wholetthedogsout',
						},
						{
							label: 'Say CHEESE!',
							description: 'Read more information on Say CHEESE!!',
							value: 'saycheese',
						},
						{
							label: 'The Trespasser',
							description: 'Read more information on The Trespasser!',
							value: 'thetrespasser',
						},
						{
							label: 'Explorer',
							description: 'Read more information on Explorer!',
							value: 'explorer',
						},
						{
							label: 'Therapy',
							description: 'Read more information on Therapy!',
							value: 'therapy',
						},
						{
							label: 'Backtracking',
							description: 'Read more information on Backtracking!',
							value: 'backtracking',
						},
						{
							label: 'Play Time',
							description: 'Read more information on Play Time!',
							value: 'playtime',
						},
						{
							label: 'Dungeoneer',
							description: 'Read more information on Dungeoneer!',
							value: 'dungeoneer',
						},
						{
							label: 'Ancient Mythology',
							description: 'Read more information on Ancient Mythology!',
							value: 'ancientmythology',
						},
						{
							label: 'Safe-Cracker',
							description: 'Read more information on Safe-Cracker!',
							value: 'safecracker',
						},
						{
							label: 'Swimming Lessons',
							description: 'Read more information on Swimming Lessons!',
							value: 'swimminglessons',
						},
						{
							label: 'Demon Slayer',
							description: 'Read more information on Demon Slayer!',
							value: 'demonslayer',
						},
						{
							label: 'Dungeon Master',
							description: 'Read more information on Dungeon Master!',
							value: 'dungeonmaster',
						},
						{
							label: 'Through The Roof',
							description: 'Read more information on Through The Roof!',
							value: 'throughtheroof',
						},
						{
							label: 'Desperate Measures',
							description: 'Read more information on Desperate Measures!',
							value: 'desperatemeasures',
						},
						{
							label: 'Party Starter',
							description: 'Read more information on Party Starter!',
							value: 'partystarter',
						},
					]),
                )

		await interaction.reply({ embeds:[achievements], ephemeral:false, components: [row] });

		const collector = interaction.channel.createMessageComponentCollector({
			            contentType: "SELECT_MENU"
			        })
			
			        collector.on("collect", async (collected) => { 
			        const value = collected.values[0]
			
			        if(value === "luckyescape") {
			            collected.reply({ embeds:[luckyescape], ephemeral:true })
			        }
			
			        if(value === "firststeps") {
			            collected.reply({ embeds:[firststeps], ephemeral:true })
			        }

					if(value === "scheduledprogramming") {
			            collected.reply({ embeds:[scheduledprogramming], ephemeral:true })
			        }

					if(value === "hello") {
			            collected.reply({ embeds:[hello], ephemeral:true })
			        }

					if(value === "wholetthedogsout") {
			            collected.reply({ embeds:[wholetthedogsout], ephemeral:true })
			        }

					if(value === "saycheese") {
			            collected.reply({ embeds:[saycheese], ephemeral:true })
			        }

					if(value === "thetrespasser") {
			            collected.reply({ embeds:[thetrespasser], ephemeral:true })
			        }

					if(value === "explorer") {
			            collected.reply({ embeds:[explorer], ephemeral:true })
			        }

					if(value === "therapy") {
			            collected.reply({ embeds:[therapy], ephemeral:true })
			        }

					if(value === "backtracking") {
			            collected.reply({ embeds:[backtracking], ephemeral:true })
			        }

					if(value === "playtime") {
			            collected.reply({ embeds:[playtime], ephemeral:true })
			        }

					if(value === "dungeoneer") {
			            collected.reply({ embeds:[dungeoneer], ephemeral:true })
			        }

					if(value === "ancientmythology") {
			            collected.reply({ embeds:[ancientmythology], ephemeral:true })
			        }

					if(value === "safecracker") {
			            collected.reply({ embeds:[safecracker], ephemeral:true })
			        }

					if(value === "swimminglessons") {
			            collected.reply({ embeds:[swimminglessons], ephemeral:true })
			        }

					if(value === "demonslayer") {
			            collected.reply({ embeds:[demonslayer], ephemeral:true })
			        }

					if(value === "dungeonmaster") {
			            collected.reply({ embeds:[dungeonmaster], ephemeral:true })
			        }

					if(value === "throughtheroof") {
			            collected.reply({ embeds:[throughtheroof], ephemeral:true })
			        }

					if(value === "desperatemeasures") {
			            collected.reply({ embeds:[desperatemeasures], ephemeral:true })
			        }

					if(value === "partystarter") {
			            collected.reply({ embeds:[partystarter], ephemeral:true })
			        }
				})
    }
};

const achievements = new MessageEmbed()
        .setTitle("**`Pick and Achievement!`**")
        .setColor("a69518")

const comingsoon = new MessageEmbed()
        .setColor('a69518')
        .setDescription('**`Coming Soon!`**')

const template = new MessageEmbed()
        .setColor('a69518')
        .setTitle('')
        .setDescription('\n**Description**: ``.\n**Players**: ` %`\n\n[ [wiki]() ]')
        .setThumbnail('')
        .setFooter(`Update: ${update} ${updateInfo}`)

const luckyescape = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Lucky Escape')
        .setDescription('\n**Description**: `Survive being chased by an `[`entity`](https://the-backrooms-survival.fandom.com/wiki/Entities).\n**Players**: `65.3 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Lucky_Escape) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/3/38/Lucky_Escape.jpg/revision/latest/scale-to-width-down/512?cb=20220415205411')
        .setFooter(`Update: ${update} ${updateInfo}`)

const firststeps = new MessageEmbed()
        .setColor('a69518')
        .setTitle('First Steps')
        .setDescription('\n**Description**: `Reach Level 1`.\n**Players**: `69.4 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/First_Steps) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/a/a3/First_Steps.jpg/revision/latest/scale-to-width-down/512?cb=20220415205722')
        .setFooter(`Update: ${update} ${updateInfo}`)

const scheduledprogramming = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Scheduled Programming')
        .setDescription('\n**Description**: `Find a `[`television`](https://the-backrooms-survival.fandom.com/wiki/TV%27s).\n**Players**: `68.6 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Scheduled_Programming) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/d/db/Scheduled_Programming.jpg/revision/latest/scale-to-width-down/512?cb=20220415205908')
        .setFooter(`Update: ${update} ${updateInfo}`)

const hello = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Hello..?')
        .setDescription('\n**Description**: `Find a `[`telephone`](https://the-backrooms-survival.fandom.com/wiki/Telephone?action=edit&redlink=1).\n**Players**: `59.6 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Hello..%3F) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/5/5d/Hello.jpg/revision/latest/scale-to-width-down/512?cb=20220415205740')
        .setFooter(`Update: ${update} ${updateInfo}`)

const wholetthedogsout = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Who let the dogs out?')
        .setDescription('\n**Description**: `Encounter a `[`hound`](https://the-backrooms-survival.fandom.com/wiki/Hound).\n**Players**: `39.8 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Who_let_the_dogs_out%3F) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/5/59/Who_Let_The_Dogs_Out.jpg/revision/latest/scale-to-width-down/512?cb=20220415210036')
        .setFooter(`Update: ${update} ${updateInfo}`)

const saycheese = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Say CHEESE!')
        .setDescription('\n**Description**: `Encounter a `[`smiler`](https://the-backrooms-survival.fandom.com/wiki/Smiler).\n**Players**: `36.3 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Say_CHEESE!) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/2/27/Say_CHEESE.jpg/revision/latest/scale-to-width-down/512?cb=20220415205815')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const thetrespasser = new MessageEmbed()
        .setColor('a69518')
        .setTitle('The Trespasser')
        .setDescription('\n**Description**: `Unlock a `[`locked door`](https://the-backrooms-survival.fandom.com/wiki/Locked_door).\n**Players**: `32.8 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/The_Trespasser) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/4/4e/The_Trespasser.jpg/revision/latest/scale-to-width-down/512?cb=20220415205952')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const explorer = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Explorer')
        .setDescription('\n**Description**: `Reach Level 3`.\n**Players**: `30.9 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Explorer) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/3/3a/Explorer.jpg/revision/latest/scale-to-width-down/512?cb=20220415205607')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const therapy = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Therapy')
        .setDescription('\n**Description**: `Use a `[`sanity pill`](https://the-backrooms-survival.fandom.com/wiki/SanityPills).\n**Players**: `34.9 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Therapy) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/8/82/Therapy.jpg/revision/latest/scale-to-width-down/512?cb=20220415210002')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const backtracking = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Backtracking')
        .setDescription('\n**Description**: `Return to a previous level`.\n**Players**: `22.9 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Backtracking) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/b/b4/Backtracking.jpg/revision/latest/scale-to-width-down/400?cb=20220415205440')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const playtime = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Play Time')
        .setDescription('\n**Description**: `Find a `[`stuffed toy`](https://the-backrooms-survival.fandom.com/wiki/Stuffed_toy).\n**Players**: `19.6 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Play_Time) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/f/f0/Play_Time.jpg/revision/latest/scale-to-width-down/512?cb=20220415205753')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const dungeoneer = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Dungeoneer')
        .setDescription('\n**Description**: `Reach Level 5`.\n**Players**: `15.1 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Dungeoneer) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/b/bc/Dungeoneer.jpg/revision/latest/scale-to-width-down/512?cb=20220415205552')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const ancientmythology = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Ancient Mythology')
        .setDescription('\n**Description**: `Find the "`[`Greek labyrinth`](https://the-backrooms-survival.fandom.com/wiki/Greek_labyrinth)`" level`.\n**Players**: `20.8 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Ancient_Mythology) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/5/5b/Ancient_Mythology.jpg/revision/latest/scale-to-width-down/512?cb=20220415205429')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const safecracker = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Safe-Cracker')
        .setDescription('\n**Description**: `Unlock a `[`safe`](https://the-backrooms-survival.fandom.com/wiki/Safe).\n**Players**: `24.2 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Safe-Cracker) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/c/c2/Safe-Cracker.jpg/revision/latest/scale-to-width-down/512?cb=20220415205804')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const swimminglessons = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Swimming Lessons')
        .setDescription('\n**Description**: `Find the "`[`Poolrooms`](https://the-backrooms-survival.fandom.com/wiki/Pool_Rooms)`" level`.\n**Players**: `20.1 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Swimming_Lessons) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/5/5e/Swimming_Lessons.jpg/revision/latest/scale-to-width-down/512?cb=20220415205932')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const demonslayer = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Demon Slayer')
        .setDescription('\n**Description**: `Kill any `[`entity`](https://the-backrooms-survival.fandom.com/wiki/Entities)` with a weapon`.\n**Players**: `6.6 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Demon_Slayer) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/3/33/Demon_Slayer.jpg/revision/latest/scale-to-width-down/512?cb=20220415205450')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const dungeonmaster = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Dungeon Master')
        .setDescription('\n**Description**: `Reach Level 10`.\n**Players**: `3.5 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Dungeon_Master) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/0/04/Dungeon_Master.jpg/revision/latest/scale-to-width-down/512?cb=20220415205541')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const throughtheroof = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Through The Roof')
        .setDescription('\n**Description**: `Unlock and climb through an `[`air vent`](https://the-backrooms-survival.fandom.com/wiki/Vents).\n**Players**: `8.5 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Through_The_Roof) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/f/f5/Through_The_Roof.jpg/revision/latest/scale-to-width-down/512?cb=20220415210017')
        .setFooter(`Update: ${update} ${updateInfo}`)

const desperatemeasures = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Desperate Measures')
        .setDescription('\n**Description**: `Eat a `[`corpse`](https://the-backrooms-survival.fandom.com/wiki/Dead_Body).\n**Players**: `4.7 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Desperate_Measures) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/9/90/Desperate_Measures.png/revision/latest/scale-to-width-down/512?cb=20220505152313')
        .setFooter(`Update: ${update} ${updateInfo}`)

const partystarter = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Party Starter')
        .setDescription('\n**Description**: `Find "`[`Level FUN`](https://the-backrooms-survival.fandom.com/wiki/Level_Fun)`"`.\n**Players**: `8.9 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Party_Starter) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/3/38/Party_Starter.png/revision/latest/scale-to-width-down/512?cb=20220505152330')
        .setFooter(`Update: ${update} ${updateInfo}`)