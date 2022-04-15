const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("1.0.20")
//const update = process.env['UPDATE'];
const updateInfo = ("• use /inbox for information")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('update')
        .setDescription('Grabs update logs for the selected update!')
        .addSubcommand(subcommand =>
            subcommand
                .setName("001")
                .setDescription('Update Logs for Update #001!')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('002')
                .setDescription("Update Logs for Update #002!")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('003')
                .setDescription("Update Logs for Update #003!")
        ),


    async execute(interaction) { 
        if (interaction.options.getSubcommand() === "001") {
            await interaction.reply({ embeds: [update001] });
    }   else if (interaction.options.getSubcommand() === "002") {
            await interaction.reply({ embeds: [update002] });
    }   else if (interaction.options.getSubcommand() === "003") {
            await interaction.reply({ embeds: [update003] });
    } else {
        await interaction.reply("No sub command was used.")
        }
    },
};

const update001 = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Update #001')
        .setDescription('**[April 6, 2022](https://store.steampowered.com/news/app/1889640/view/3228526127303717555)**\n\n> Hello,\n> We\'ve released our first game update for The Backrooms: Survival. This update mainly fixes lots of bugs reported within the first week by our players. We aim to iron out bugs and polish the game first to build a smoother, more solid foundation before shifting our focus to new content.\n\n```fix\n-Fixed lighting bug on the "Hedge maze" theme floor\n-Fixed lanterns/candles not lighting up the ground, but walls only\n-Main menu/UI sounds can be adjusted individually with their own sound slider\n-Candles and Lanterns last slightly longer and are slightly brighter\n-Fixed candle item floating above the ground\n-Fixed graphical glitches with some wall graffiti\n-Inventory controls are shown on the inventory top corner as there has been some confusion\n-Fixed "store/remove" showing on some items as these were scrapped functions (replaced by drop) and shouldn\'t have been showing\n-Fixed a bug where you could pick up items through the walls/obstacles etc\n-Fixed water leaks still appearing in levels with no ceiling\n-Small keys are now easier to pick up as collecting them has been quite buggy\n-Fixed a bug where the players head can be seen when crouching and looking up\n-Fixed caffeine pill not disappearing from inventory when used\n-Drinking ceiling leak increases the "Fluids Drank" statistic on the game over report\n-Fixed clown entity texture appearing all white on some GPUs\n-Fixed a bug preventing you from dropping sanity pills\n-Fixed a bug where the telephone continues to play the phone ringing clip once picked up\n-Fixed a bug where the circus ambiance music continues to play on death when returning to the main menu\n-Fixed some text typos\n-Fixed a saving bug that could sometimes occur corrupting quicksaves and preventing you from leaving to the main menu\n-cave level theme is slightly brighter as it was far too dark in some levels\n-Settings are saved and reloaded\n-Other smaller fixes (graphical glitches, stuttering, etc)\n```\n[[Steam](https://store.steampowered.com/news/app/1889640/view/3228526127303717555) | [Wiki](https://the-backrooms-survival.fandom.com/wiki/Updates)]')
        .setFooter(`Update: ${update} ${updateInfo}`)

const update002 = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Update #002')
        .setDescription('**[April 13, 2022](https://store.steampowered.com/news/app/1889640/view/3228526756463893940)**\n\n> Hello,\n> We\'ve released our second game update for The Backrooms: Survival.\n\n```fix\n-New "pool rooms" level theme\n-New "greek labyrinth" level theme\n-three new entities\n-added unlockable safes that spawn on walls with items inside\n-added dead corpses that can be cannibalized for hunger at expense of sanity\n-fixed bug with clown entities model\n-never get the same theme in a row, so the next level is always different from the current one\n-added air vents in ceilings that can be unlocked with screwdrivers to get to the next level\n-fixed bug where loading a quicksave doesn\'t update the entities to reflect that level theme\n-a message is shown when a weapon breaks\n-fixed bug where on entering a new level a ladder can be briefly seen\n-fixed a bug where spamming "E" quickly on entering a new level can sometimes bypass to the next level\n-fixed bug where dropping screwdriver doesn\'t remove it from inventory\n-fixed dog whistle not attracting nearby hounds\n-four new steam achievements\n-added an "angel bell" item that shatters nearby hostile angel statue entities\n-no-clipping out of the game now randomly transports you to a random part of the level\n-added a pipe wrench weapon\n-added a nail board weapon\n-added a frame rate cap setting\n-added doors that are already unlocked\n-redesigned the model of the locked door\n-added oil bottle item to refill lanterns\n-fixed bug where walls/floors look shiny/plastic in some lighting\n```\n[[Steam](https://store.steampowered.com/news/app/1889640/view/3228526756463893940) | [Wiki](https://the-backrooms-survival.fandom.com/wiki/Updates)]')
        .setFooter(`Update: ${update} ${updateInfo}`)

const update003 = new MessageEmbed()
        .setColor('a69518')
        //.setTitle('Update #003')
        .setDescription('**Update #003 Coming April 20, 2022!**')
        //.setFooter(`Update: ${update} ${updateInfo}`)