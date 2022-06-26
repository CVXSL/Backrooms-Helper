const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("1.0.29")
//const update = process.env['UPDATE'];
//const updateInfo = ("• use /inbox for information")
const updateInfo = (" ")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('themes')
        .setDescription('Grabs Theme information!')
        .addSubcommand(subcommand =>
            subcommand
                .setName("pool-rooms")
                .setDescription('Pool Rooms Theme!')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ancient-rooms')
                .setDescription("Ancient Rooms Theme!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('dirt-rooms')
                .setDescription("Dirt Rooms Theme!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('back-rooms')
                .setDescription("Back Rooms Theme!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('hospital')
                .setDescription("Hospital Theme!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('hedge-maze')
                .setDescription("Hedge Maze Theme!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('circus')
                .setDescription("Circus Theme!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('greek-labyrinth')
                .setDescription("Labyrinth Theme!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('dojo')
                .setDescription("Dojo Theme!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('level-fun')
                .setDescription("Level Fun Theme!")
        )
        .addSubcommand(subcommand =>
            subcommand  
                .setName('pipe-dreams')
                .setDescription("Pipe Dreams Theme!")
        ),     

    async execute(interaction) { 
        if (interaction.options.getSubcommand() === "pool-rooms") {
            await interaction.reply({ embeds: [poolrooms] });
    }   else if (interaction.options.getSubcommand() === "ancient-rooms") {
            await interaction.reply({ embeds: [comingsoon] });
    }   else if (interaction.options.getSubcommand() === "dirt-rooms") {
            await interaction.reply({ embeds: [dirtrooms] });
    }   else if (interaction.options.getSubcommand() === "back-rooms") {
            await interaction.reply({ embeds: [backrooms] });
    }   else if (interaction.options.getSubcommand() === "hospital") {
            await interaction.reply({ embeds: [hospital] });
    }   else if (interaction.options.getSubcommand() === "hedge-maze") {
            await interaction.reply({ embeds: [hedgemaze] });
    }   else if (interaction.options.getSubcommand() === "circus") {
            await interaction.reply({ embeds: [circus] });
    }   else if (interaction.options.getSubcommand() === "greek-labyrinth") {
            await interaction.reply({ embeds: [greeklabyrinth] });
    }   else if (interaction.options.getSubcommand() === "dojo") {
            await interaction.reply({ embeds: [dojo] });
    }   else if (interaction.options.getSubcommand() === "level-fun") {
            await interaction.reply({ embeds: [levelfun] });
    }   else if (interaction.options.getSubcommand() === "pipe-dreams") {
            await interaction.reply({ embeds: [pipedreams] });
    } else {
        await interaction.reply("No sub command was used.")
        }
    },
};

const comingsoon = new MessageEmbed()
        .setColor('a69518')
        .setDescription('**`Coming Soon!`**')

const template = new MessageEmbed()
        .setColor('a69518')
        .setTitle('')
        .setDescription('\n\n**Known Entities**\n\n```\n- \n```\n[ [Wiki]() ]')
        .setImage('')
        .setFooter(`Update: ${update} ${updateInfo}`)

const poolrooms = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Pool Rooms')
        .setDescription('The Pool Rooms are a level theme that was added in [Update 002](https://the-backrooms-survival.fandom.com/wiki/Updates).\n\nThey are flooded with water up to knee height, and are home to the [Shark](https://the-backrooms-survival.fandom.com/wiki/Sharks) Entity, and nothing else.\n\n[ [Wiki](https://the-backrooms-survival.fandom.com/wiki/Pool_Rooms) ]')
        .setImage('https://static.wikia.nocookie.net/the-backrooms-survival/images/4/46/Pool_Room.png/revision/latest/scale-to-width-down/700?cb=20220415000348')
        .setFooter(`Update: ${update} ${updateInfo}`)

const dirtrooms = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Dirt Rooms')
        .setDescription('The Dirt Rooms are a dangerous level theme.\n\n**Known Entities**\n\n```\n- Gargoyle\n- Moleman\n- Hammer Guy\n- Smiler\n- Mannequin\n```\n[ [Wiki](https://the-backrooms-survival.fandom.com/wiki/Dirt_Rooms) ]')
        .setImage('https://static.wikia.nocookie.net/the-backrooms-survival/images/7/7b/Dirt_room.png/revision/latest/scale-to-width-down/700?cb=20220422162843')
        .setFooter(`Update: ${update} ${updateInfo}`)

const backrooms = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Back Rooms')
        .setDescription('The Back Rooms. The first level the player will spawn into.\n\nThis level is home to every entity except level exclusives, like the [Shark](https://the-backrooms-survival.fandom.com/wiki/Sharks), [Clowns](https://the-backrooms-survival.fandom.com/wiki/Clowns), [Patients](https://the-backrooms-survival.fandom.com/wiki/Patient), [Doctors](https://the-backrooms-survival.fandom.com/wiki/Doctor), [Partygoers](https://the-backrooms-survival.fandom.com/wiki/Partygoer) and [Angel Statues](https://the-backrooms-survival.fandom.com/wiki/Angel_Statue).\n\n**Known Entities**\n\n```\n- Gargoyle\n- Mannequin\n- Hound\n- Chainsaw Guy\n- Hammer Guy\n- Greek Statue\n- Nun\n- White Kid\n- Gremlin\n- Smiler \n```\n[ [Wiki](https://the-backrooms-survival.fandom.com/wiki/Back_Rooms) ]')
        .setImage('https://static.wikia.nocookie.net/the-backrooms-survival/images/6/63/Level_0.png/revision/latest/scale-to-width-down/700?cb=20220415120229')
        .setFooter(`Update: ${update} ${updateInfo}`)

const hospital = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Hospital')
        .setDescription('\n\n**Known Entities**\n\n```\n- Doctor\n- Smiler\n- Nun\n- Patient\n- White Kid\n- Hammer Guy\n- Mannequin\n```\n[ [Wiki](https://the-backrooms-survival.fandom.com/wiki/Hospital) ]')
        .setImage('https://static.wikia.nocookie.net/the-backrooms-survival/images/6/66/Hospital.png/revision/latest/scale-to-width-down/700?cb=20220417235956')
        .setFooter(`Update: ${update} ${updateInfo}`)

const hedgemaze = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Hedge Maze')
        .setDescription('The Hedge Maze is a level theme that came out with the release of the game.\n\nThe Hedge Maze contains a stone floor and walls aged with vegetation.\n\n**Known Entities**\n\n```\n- Gargoyle\n- Angel Statue\n- Chainsaw Guy\n- Hound\n- Gremlin\n- Smiler\n- Mannequin\n- Hammer Guy\n```\n[ [Wiki](https://the-backrooms-survival.fandom.com/wiki/Hedge_Maze) ]')
        .setImage('https://static.wikia.nocookie.net/the-backrooms-survival/images/4/43/Leafmazeleveltheme.png/revision/latest/scale-to-width-down/700?cb=20220425232724')
        .setFooter(`Update: ${update} ${updateInfo}`)

const circus = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Circus')
        .setDescription('The Circus is a level theme that came out with the release of the game.\n\nIt contains a brown floor and a vertically striped pink and white wall.\n\n**Known Entities**\n\n```\n- Clown\n- Scythe Clown\n- Smiler\n```\n[ [Wiki](https://the-backrooms-survival.fandom.com/wiki/Circus) ]')
        .setImage('https://static.wikia.nocookie.net/the-backrooms-survival/images/8/87/Clownlevel2.png/revision/latest/scale-to-width-down/700?cb=20220426003443')
        .setFooter(`Update: ${update} ${updateInfo}`)

const greeklabyrinth = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Greek Labyrinth')
        .setDescription('The Greek Labyrinth is a level that was released in [Update 002](https://the-backrooms-survival.fandom.com/wiki/Updates).\n\nIt is home to the [Minotaur](https://the-backrooms-survival.fandom.com/wiki/Minotaur), a fast, loud beast that hits very hard.\n\n**Known Entities**\n\n```\n- Greek Statue\n- Gargoyle\n- Minotaur\n```\n[ [Wiki](https://the-backrooms-survival.fandom.com/wiki/Greek_Labyrinth) ]')
        .setImage('https://static.wikia.nocookie.net/the-backrooms-survival/images/8/86/Greeklabirynth.png/revision/latest/scale-to-width-down/700?cb=20220426004801')
        .setFooter(`Update: ${update} ${updateInfo}`)

const dojo = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Dojo')
        .setDescription('The Dojo is a level theme that was included upon the release of the game.\n\nThis level is Japanese themed and has patterned floors and big red doorways.\n\n**Known Entities**\n\n```\n- Nun\n- White Nun\n- White Kid\n- Smiler\n- Gargoyle\n```\n[ [Wiki](https://the-backrooms-survival.fandom.com/wiki/Dojo) ]')
        .setImage('https://static.wikia.nocookie.net/the-backrooms-survival/images/1/1e/Japaneseeleveltheme.png/revision/latest/scale-to-width-down/700?cb=20220425235850')
        .setFooter(`Update: ${update} ${updateInfo}`)

const levelfun = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Level Fun')
        .setDescription('Level "Fun" is a level theme added in [Update 004](https://the-backrooms-survival.fandom.com/wiki/Updates).\n\nThis level contains larger rooms filled with red carpet and childlike paintings on the wall. Party music can be heard throughout this level.\n\n**Known Entities**\n\n```\n- Partygoer\n- Dancing Lady\n```\n[ [Wiki](https://the-backrooms-survival.fandom.com/wiki/Level_Fun) ]')
        .setImage('https://static.wikia.nocookie.net/the-backrooms-survival/images/7/7c/Level_fun.png/revision/latest/scale-to-width-down/700?cb=20220425225403')
        .setFooter(`Update: ${update} ${updateInfo}`)

const pipedreams = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Pipe Dreams')
        .setDescription('Pipe Dreams is a level that was released in Update 005.\n\nThis level contains walls filled with pipes and a steel floor. It is home to the Wretch entity.\n\nPlayers on this level can also find turning valve doors, which take longer to open than normal doors.\n\n**Known Entities**\n\n```\n- Wretch\n- Mannequin\n- Smiler\n```\n[ [Wiki](https://the-backrooms-survival.fandom.com/wiki/Pipe_Dreams) ]')
        .setImage('https://static.wikia.nocookie.net/the-backrooms-survival/images/4/4d/Levelpipe.png/revision/latest/scale-to-width-down/699?cb=20220428000431')
        .setFooter(`Update: ${update} ${updateInfo}`)