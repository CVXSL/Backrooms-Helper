const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("1.0.27")
//const update = process.env['UPDATE'];
const updateInfo = ("• use /inbox for information")

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
                .setName('garden')
                .setDescription("Garden Theme!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('level-fun')
                .setDescription("Level Fun Theme!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('labyrinth')
                .setDescription("Labyrinth Theme!")
        ),

    async execute(interaction) { 
        if (interaction.options.getSubcommand() === "pool-rooms") {
            await interaction.reply({ embeds: [poolrooms] });
    }   else if (interaction.options.getSubcommand() === "ancient-rooms") {
            await interaction.reply({ embeds: [comingsoon] });
    }   else if (interaction.options.getSubcommand() === "dirt-rooms") {
            await interaction.reply({ embeds: [comingsoon] });
    }   else if (interaction.options.getSubcommand() === "back-rooms") {
            await interaction.reply({ embeds: [comingsoon] });
    }   else if (interaction.options.getSubcommand() === "hospital") {
            await interaction.reply({ embeds: [comingsoon] });
    }   else if (interaction.options.getSubcommand() === "garden") {
            await interaction.reply({ embeds: [comingsoon] });
    }   else if (interaction.options.getSubcommand() === "level-fun") {
            await interaction.reply({ embeds: [comingsoon] });
    }   else if (interaction.options.getSubcommand() === "labyrinth") {
            await interaction.reply({ embeds: [comingsoon] });
    } else {
        await interaction.reply("No sub command was used.")
        }
    },
};

const comingsoon = new MessageEmbed()
        .setColor('a69518')
        .setDescription('**`Coming Soon!`**')

const poolrooms = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Pool Rooms')
        .setDescription('The Pool Rooms are a level theme that was added in [Update 002](https://the-backrooms-survival.fandom.com/wiki/Updates).\n\nThey are flooded with water up to knee height, and are home to the [Shark](https://the-backrooms-survival.fandom.com/wiki/Sharks) Entity, and nothing else.\n\n[ [Wiki](https://the-backrooms-survival.fandom.com/wiki/Pool_Rooms) ]')
        .setImage('https://static.wikia.nocookie.net/the-backrooms-survival/images/4/46/Pool_Room.png/revision/latest/scale-to-width-down/700?cb=20220415000348')
        .setFooter(`Update: ${update} ${updateInfo}`)