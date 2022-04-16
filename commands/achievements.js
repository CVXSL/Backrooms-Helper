const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("1.0.21")
//const update = process.env['UPDATE'];
const updateInfo = ("• use /inbox for information")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('achievements')
        .setDescription('Grabs achivment information!')
        .addSubcommand(subcommand =>
            subcommand
                .setName("lucky-escape")
                .setDescription('Survive being chased by an entity!')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('first-steps')
                .setDescription("Reach Level 1!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('scheduled-programming')
                .setDescription("Find a television!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('hello')
                .setDescription("Find a telephone!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('who-let-the-dogs-out')
                .setDescription("Encounter a hound!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('say-cheese')
                .setDescription("Encounter a smiler!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('the-trespasser')
                .setDescription("Unlock a locked door!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('explorer')
                .setDescription("Reach Level 3!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('therapy')
                .setDescription("Use a sanity pill!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('backtracking')
                .setDescription("Return to a previous level!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('play-time')
                .setDescription("Find a stuffed toy!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('dungeoneer')
                .setDescription("Reach Level 5!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ancient-mythology')
                .setDescription("Find the \"Greek labyrinth\" level!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('safe-cracker')
                .setDescription("Unlock a safe!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('swimming-lessons')
                .setDescription("Find the \"Poolrooms\" level!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('demon-slayer')
                .setDescription("Kill any entity with a weapon!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('dungeon-master')
                .setDescription("Reach Level 10!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('through-the-roof')
                .setDescription("Unlock and climb through an air vent!")
        ),

    async execute(interaction) { 
        if (interaction.options.getSubcommand() === "lucky-escape") {
            await interaction.reply({ embeds: [luckyescape] });
    }   else if (interaction.options.getSubcommand() === "first-steps") {
            await interaction.reply({ embeds: [firststeps] });
    }   else if (interaction.options.getSubcommand() === "scheduled-programming") {
            await interaction.reply({ embeds: [scheduledprogramming] });
    }   else if (interaction.options.getSubcommand() === "hello") {
            await interaction.reply({ embeds: [hello] });
    }   else if (interaction.options.getSubcommand() === "who-let-the-dogs-out") {
            await interaction.reply({ embeds: [wholetthedogsout] });
    }   else if (interaction.options.getSubcommand() === "say-cheese") {
            await interaction.reply({ embeds: [saycheese] });
    }   else if (interaction.options.getSubcommand() === "the-trespasser") {
            await interaction.reply({ embeds: [thetrespasser] });
    }   else if (interaction.options.getSubcommand() === "explorer") {
            await interaction.reply({ embeds: [explorer] });
    }   else if (interaction.options.getSubcommand() === "therapy") {
            await interaction.reply({ embeds: [therapy] });
    }   else if (interaction.options.getSubcommand() === "backtracking") {
            await interaction.reply({ embeds: [backtracking] });
    }   else if (interaction.options.getSubcommand() === "play-time") {
            await interaction.reply({ embeds: [playtime] });
    }   else if (interaction.options.getSubcommand() === "dungeoneer") {
            await interaction.reply({ embeds: [dungeoneer] });
    }   else if (interaction.options.getSubcommand() === "ancient-mythology") {
            await interaction.reply({ embeds: [ancientmythology] });
    }   else if (interaction.options.getSubcommand() === "safe-cracker") {
            await interaction.reply({ embeds: [safecracker] });
    }   else if (interaction.options.getSubcommand() === "swimming-lessons") {
            await interaction.reply({ embeds: [swimminglessons] });
    }   else if (interaction.options.getSubcommand() === "demon-slayer") {
            await interaction.reply({ embeds: [demonslayer] });
    }   else if (interaction.options.getSubcommand() === "dungeon-master") {
            await interaction.reply({ embeds: [dungeonmaster] });
    }   else if (interaction.options.getSubcommand() === "through-the-roof") {
            await interaction.reply({ embeds: [throughtheroof] });
    
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
        .setDescription('\n**Description**: ``.\n**Players**: ` %`\n\n[ [wiki]() ]')
        .setThumbnail('')
        .setFooter(`Update: ${update} ${updateInfo}`)

const luckyescape = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Lucky Escape')
        .setDescription('\n**Description**: `Survive being chased by an `[`entity`](https://the-backrooms-survival.fandom.com/wiki/Entities).\n**Players**: `68.9 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Lucky_Escape) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/3/38/Lucky_Escape.jpg/revision/latest/scale-to-width-down/512?cb=20220415205411')
        .setFooter(`Update: ${update} ${updateInfo}`)

const firststeps = new MessageEmbed()
        .setColor('a69518')
        .setTitle('First Steps')
        .setDescription('\n**Description**: `Reach Level 1`.\n**Players**: `68.1 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/First_Steps) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/a/a3/First_Steps.jpg/revision/latest/scale-to-width-down/512?cb=20220415205722')
        .setFooter(`Update: ${update} ${updateInfo}`)

const scheduledprogramming = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Scheduled Programming')
        .setDescription('\n**Description**: `Find a `[`television`](https://the-backrooms-survival.fandom.com/wiki/TV%27s).\n**Players**: `62.8 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Scheduled_Programming) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/d/db/Scheduled_Programming.jpg/revision/latest/scale-to-width-down/512?cb=20220415205908')
        .setFooter(`Update: ${update} ${updateInfo}`)

const hello = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Hello..?')
        .setDescription('\n**Description**: `Find a `[`telephone`](https://the-backrooms-survival.fandom.com/wiki/Telephone?action=edit&redlink=1).\n**Players**: `55.5 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Hello..%3F) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/5/5d/Hello.jpg/revision/latest/scale-to-width-down/512?cb=20220415205740')
        .setFooter(`Update: ${update} ${updateInfo}`)

const wholetthedogsout = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Who let the dogs out?')
        .setDescription('\n**Description**: `Encounter a `[`hound`](https://the-backrooms-survival.fandom.com/wiki/Hound).\n**Players**: `35.6 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Who_let_the_dogs_out%3F) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/5/59/Who_Let_The_Dogs_Out.jpg/revision/latest/scale-to-width-down/512?cb=20220415210036')
        .setFooter(`Update: ${update} ${updateInfo}`)

const saycheese = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Say CHEESE!')
        .setDescription('\n**Description**: `Encounter a `[`smiler`](https://the-backrooms-survival.fandom.com/wiki/Smiler).\n**Players**: `35.5 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Say_CHEESE!) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/2/27/Say_CHEESE.jpg/revision/latest/scale-to-width-down/512?cb=20220415205815')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const thetrespasser = new MessageEmbed()
        .setColor('a69518')
        .setTitle('The Trespasser')
        .setDescription('\n**Description**: `Unlock a `[`locked door`](https://the-backrooms-survival.fandom.com/wiki/Locked_door).\n**Players**: `30.7 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/The_Trespasser) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/4/4e/The_Trespasser.jpg/revision/latest/scale-to-width-down/512?cb=20220415205952')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const explorer = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Explorer')
        .setDescription('\n**Description**: `Reach Level 3`.\n**Players**: `27.6 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Explorer) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/3/3a/Explorer.jpg/revision/latest/scale-to-width-down/512?cb=20220415205607')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const therapy = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Therapy')
        .setDescription('\n**Description**: `Use a `[`sanity pill`](https://the-backrooms-survival.fandom.com/wiki/SanityPills).\n**Players**: `27.3 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Therapy) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/8/82/Therapy.jpg/revision/latest/scale-to-width-down/512?cb=20220415210002')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const backtracking = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Backtracking')
        .setDescription('\n**Description**: `Return to a previous level`.\n**Players**: `20.2 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Backtracking) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/b/b4/Backtracking.jpg/revision/latest/scale-to-width-down/400?cb=20220415205440')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const playtime = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Play Time')
        .setDescription('\n**Description**: `Find a `[`stuffed toy`](https://the-backrooms-survival.fandom.com/wiki/Stuffed_toy).\n**Players**: `14.1 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Play_Time) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/f/f0/Play_Time.jpg/revision/latest/scale-to-width-down/512?cb=20220415205753')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const dungeoneer = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Dungeoneer')
        .setDescription('\n**Description**: `Reach Level 5`.\n**Players**: `12.8 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Dungeoneer) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/b/bc/Dungeoneer.jpg/revision/latest/scale-to-width-down/512?cb=20220415205552')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const ancientmythology = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Ancient Mythology')
        .setDescription('\n**Description**: `Find the "`[`Greek labyrinth`](https://the-backrooms-survival.fandom.com/wiki/Greek_labyrinth)`" level`.\n**Players**: `5.7 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Ancient_Mythology) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/5/5b/Ancient_Mythology.jpg/revision/latest/scale-to-width-down/512?cb=20220415205429')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const safecracker = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Safe-Cracker')
        .setDescription('\n**Description**: `Unlock a `[`safe`](https://the-backrooms-survival.fandom.com/wiki/Safe).\n**Players**: `5.0 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Safe-Cracker) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/c/c2/Safe-Cracker.jpg/revision/latest/scale-to-width-down/512?cb=20220415205804')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const swimminglessons = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Swimming Lessons')
        .setDescription('\n**Description**: `Find the "`[`Poolrooms`](https://the-backrooms-survival.fandom.com/wiki/Pool_Rooms)`" level`.\n**Players**: `4.9 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Swimming_Lessons) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/5/5e/Swimming_Lessons.jpg/revision/latest/scale-to-width-down/512?cb=20220415205932')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const demonslayer = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Demon Slayer')
        .setDescription('\n**Description**: `Kill any `[`entity`](https://the-backrooms-survival.fandom.com/wiki/Entities)` with a weapon`.\n**Players**: `4.0 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Demon_Slayer) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/3/33/Demon_Slayer.jpg/revision/latest/scale-to-width-down/512?cb=20220415205450')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const dungeonmaster = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Dungeon Master')
        .setDescription('\n**Description**: `Reach Level 10`.\n**Players**: `2.8 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Dungeon_Master) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/0/04/Dungeon_Master.jpg/revision/latest/scale-to-width-down/512?cb=20220415205541')
        .setFooter(`Update: ${update} ${updateInfo}`)
        
const throughtheroof = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Through The Roof')
        .setDescription('\n**Description**: `Unlock and climb through an `[`air vent`](https://the-backrooms-survival.fandom.com/wiki/Vents).\n**Players**: `1.5 %`\n\n[ [wiki](https://the-backrooms-survival.fandom.com/wiki/Through_The_Roof) ]')
        .setThumbnail('https://static.wikia.nocookie.net/the-backrooms-survival/images/f/f5/Through_The_Roof.jpg/revision/latest/scale-to-width-down/512?cb=20220415210017')
        .setFooter(`Update: ${update} ${updateInfo}`)