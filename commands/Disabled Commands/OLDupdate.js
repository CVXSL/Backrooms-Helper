const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const update = ("1.0.28")
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
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('004')
                .setDescription("Update Logs for Update #004!")
        )
        .addSubcommand(subcommand =>
                subcommand
                .setName('005')
                .setDescription("Update Logs for Update #005!")
        )
        .addSubcommand(subcommand =>
                subcommand
                .setName('006')
                .setDescription("Update Logs for Update #006!")
        )
        .addSubcommand(subcommand =>
                subcommand
                .setName('007')
                .setDescription("Update Logs for Update #007!")
        ),

    async execute(interaction) { 
             if (interaction.options.getSubcommand() === "001") {
            await interaction.reply({ embeds: [update001] });
    }   else if (interaction.options.getSubcommand() === "002") {
            await interaction.reply({ embeds: [update002] });
    }   else if (interaction.options.getSubcommand() === "003") {
            await interaction.reply({ embeds: [update003] });
    }   else if (interaction.options.getSubcommand() === "004") {
            await interaction.reply({ embeds: [update004] });
    }   else if (interaction.options.getSubcommand() === "005") {
            await interaction.reply({ embeds: [update005] });
    }   else if (interaction.options.getSubcommand() === "006") {
            await interaction.reply({ embeds: [update006] });
    }   else if (interaction.options.getSubcommand() === "007") {
            await interaction.reply({ embeds: [update007] });
    } else {
        await interaction.reply("No sub command was used.")
        }
    },
};

const update001 = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Update #001')
        .setDescription('**[April 6, 2022](https://store.steampowered.com/news/app/1889640/view/3228526127303717555)**\n\n> Hello,\n> We\'ve released our first game update for The Backrooms: Survival. This update mainly fixes lots of bugs reported within the first week by our players. We aim to iron out bugs and polish the game first to build a smoother, more solid foundation before shifting our focus to new content.\n\n```fix\n-Fixed lighting bug on the "Hedge maze" theme floor\n-Fixed lanterns/candles not lighting up the ground, but walls only\n-Main menu/UI sounds can be adjusted individually with their own sound slider\n-Candles and Lanterns last slightly longer and are slightly brighter\n-Fixed candle item floating above the ground\n-Fixed graphical glitches with some wall graffiti\n-Inventory controls are shown on the inventory top corner as there has been some confusion\n-Fixed "store/remove" showing on some items as these were scrapped functions (replaced by drop) and shouldn\'t have been showing\n-Fixed a bug where you could pick up items through the walls/obstacles etc\n-Fixed water leaks still appearing in levels with no ceiling\n-Small keys are now easier to pick up as collecting them has been quite buggy\n-Fixed a bug where the players head can be seen when crouching and looking up\n-Fixed caffeine pill not disappearing from inventory when used\n-Drinking ceiling leak increases the "Fluids Drank" statistic on the game over report\n-Fixed clown entity texture appearing all white on some GPUs\n-Fixed a bug preventing you from dropping sanity pills\n-Fixed a bug where the telephone continues to play the phone ringing clip once picked up\n-Fixed a bug where the circus ambiance music continues to play on death when returning to the main menu\n-Fixed some text typos\n-Fixed a saving bug that could sometimes occur corrupting quicksaves and preventing you from leaving to the main menu\n-cave level theme is slightly brighter as it was far too dark in some levels\n-Settings are saved and reloaded\n-Other smaller fixes (graphical glitches, stuttering, etc)\n```\n[ [Steam](https://store.steampowered.com/news/app/1889640/view/3228526127303717555) | [Wiki](https://the-backrooms-survival.fandom.com/wiki/Updates) ]')
        .setImage('https://images-ext-2.discordapp.net/external/K62ZAsaRHHOCu5XSTQayp75sX__nXFuLKINq7QmqPPM/https/cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/41886210/3c71f764dcf95f39b87f9f56a493f769560e8505.png')
        .setFooter(`Update: ${update} ${updateInfo}`)

const update002 = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Update #002')
        .setDescription('**[April 13, 2022](https://store.steampowered.com/news/app/1889640/view/3228526756463893940)**\n\n> Hello,\n> We\'ve released our second game update for The Backrooms: Survival.\n\n```fix\n-New "pool rooms" level theme\n-New "greek labyrinth" level theme\n-three new entities\n-added unlockable safes that spawn on walls with items inside\n-added dead corpses that can be cannibalized for hunger at expense of sanity\n-fixed bug with clown entities model\n-never get the same theme in a row, so the next level is always different from the current one\n-added air vents in ceilings that can be unlocked with screwdrivers to get to the next level\n-fixed bug where loading a quicksave doesn\'t update the entities to reflect that level theme\n-a message is shown when a weapon breaks\n-fixed bug where on entering a new level a ladder can be briefly seen\n-fixed a bug where spamming "E" quickly on entering a new level can sometimes bypass to the next level\n-fixed bug where dropping screwdriver doesn\'t remove it from inventory\n-fixed dog whistle not attracting nearby hounds\n-four new steam achievements\n-added an "angel bell" item that shatters nearby hostile angel statue entities\n-no-clipping out of the game now randomly transports you to a random part of the level\n-added a pipe wrench weapon\n-added a nail board weapon\n-added a frame rate cap setting\n-added doors that are already unlocked\n-redesigned the model of the locked door\n-added oil bottle item to refill lanterns\n-fixed bug where walls/floors look shiny/plastic in some lighting\n```\n[ [Steam](https://store.steampowered.com/news/app/1889640/view/3228526756463893940) | [Wiki](https://the-backrooms-survival.fandom.com/wiki/Updates) ]')
        .setImage('https://images-ext-1.discordapp.net/external/1icxJFCDOIae6dfkxlMG_SWbNtKPY1OvA_Out25RY_A/https/cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/41886210/ab2e877c290f17750954f3e036e2d62b336359e1.png')
        .setFooter(`Update: ${update} ${updateInfo}`)

const update003 = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Update #003')
        .setDescription('**[April 16, 2022](https://store.steampowered.com/news/app/1889640/view/3228526756473864754)**\n\n> Hello,\n> We\'ve decided to release an extra game update today for "The Backrooms: Survival", a quick patch fixing a few bugs. The weekly updates will still take place this Wednesday also.\n\n```fix\n-Fixed the "level skip glitch" which can be done with ladders\n-Fixed a bug that prevented the "Demon Slayer" achievement from unlocking for some\n-Limited the amounts of safes that spawn on levels as there were far too many\n-Fixed cosmetic bugs that can cause in some rare cases vents or lights to spawn over ladders\n-Fixed a very rare bug with the new pool rooms theme where the ladder could spawn outside of the level\n-Batteries are much bigger and sparkle to make them stand out more as previously some players were having issues spotting them\n-Fixed a bug where the player could sometimes manage to jump out through the ceiling\n-Fixed a bug where moving to the "level 0" them wouldn\'t update the new entities to spawn and would use the old ones (i.e going from the circus theme to the level 0 theme would still spawn clowns in level 0, which shouldn\'t have happened)\n-Fixed a bug that prevented textboxes from popping up sometimes (was caused by using a ladder/trapdoor/vent etc while being chased by an entity)\n\nThis unplanned patch update was released due to bug reports on our official discord. Join the discord below to report bugs/leave game suggestions as it is easier to be seen there and grouped into being fixed in unexpected patches like these!\n\nhttps://discord.com/invite/qbQhTy2JhK <<< Discord link\n\nCheers!\n```\n[ [Steam](https://store.steampowered.com/news/app/1889640/view/3228526756473864754) | [Wiki](https://the-backrooms-survival.fandom.com/wiki/Updates) ]')
        .setImage('https://images-ext-2.discordapp.net/external/2jK09kl1UoKEKdKc70WMHmA2Fo-6HxE6Ny5LtHwSGyU/https/cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/41886210/d920b5938da62504a494e234a7fc724d99d4f321.png')
        .setFooter(`Update: ${update} ${updateInfo}`)

const update004 = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Update #004')
        .setDescription('**[April 20, 2022](https://store.steampowered.com/news/app/1889640/view/3224023791140073202)**\n\n> Update #004 is now out!\n\n```fix\n-Added a new level: Level FUN! This level is slightly different than others as it features more open and bigger rooms\n-Added new entities: Partygoers! Only appearing on level FUN, they tend to endlessly stalk you co-ordinating together before giving chase\n-Added presents. Only appearing in level FUN, unwrap them for an item... or a surprise!\n-Added new ambient SFX\n-Added new profession: Cannibal! Can eat dead bodies without hunger/sanity requirements, gains health from eating them, and does NOT lose sanity\n-Added new profession: serial killer! Deals more damage to entities. Don\'t lose sanity when looking at dead bodies\n-fixed graffiti glowing in the dark\n-A handful of items now spawn when starting a new level, as well as more procedurally appearing with time. Makes finding items easier\n-Janitor perk nerfed slightly to further improve the chance of finding items\n-Entities now drop loot (random items) when killed\n-fixed bug where if you quit while crouching player will still be crouching on a new game\n-fixed various typos\n-Electrician profession now changed to start with a flashlight and two spare batteries\n-added an achievement for beating a dead corpse\n-improved some entity animations\n-you can now toggle your equipped flashlight on/off when out to save battery with the left mouse button-\n-fixed a collider bug with the dojo door\n-fixed the chainsaw SFX not being adjusted by the "CHASE SFX" volume slider\n-fixed cameras/puddles/vents sometimes intersecting with ladders\n-fixed weapons swinging when left-clicking on pause menus\n-fixed a bug with the knife not in the nun\'s hand properly\n-fixed angel bell item floating on the ground bug\n-fixed a bug where smilers aren\'t removed on going to new levels and thus could endlessly stack\n-fixed ancient ruins entity slightly floating off the ground bug\n-various other minor bug fixes\n```\n[ [Steam](https://store.steampowered.com/news/app/1889640/view/3224023791140073202) | [Wiki](https://the-backrooms-survival.fandom.com/wiki/Updates) ]')
        .setImage('https://images-ext-1.discordapp.net/external/ZOX7WtDGZsqqsoT2PEBKm-Ek1phvu3XggtLL_7hZNf4/https/cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/41886210/709d548a1d18293c5ecfd759dab602ae952ba150.png')
        .setFooter(`Update: ${update} ${updateInfo}`)

const update005 = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Update #005')
        .setDescription('**[April 27, 2022](https://store.steampowered.com/news/app/1889640/view/3224024423345024646)**\n\n> \*SPOILERS\*\n\n```fix\n-Added a new level theme inspired by "Pipe Dreams"\n-Added a new entity - Wretch\n-Fixed a glitch where sometimes going to the new level the player immediately falls through it with text loop\n-Fixed the "invisible hound" glitch where sometimes a hound attacks you but isn\'t visible\n-Poolrooms now have swimming normal sharks also\n-Campfires left by other survivors spawn sometimes with a few items around them.\n-Added new door types (turning valve doors)\n-Added lightbulbs that may or may not explode when close\n-Improved dead entities ragdolls\n-fixed vents/ladders/lamps colliding\n-Updated smiler texture\n-Fixed the Japanese theme entity not ragdolling on death\n-Fixed collider bug on ladder sometimes stopping you from walking through them\n-Fixed a leaderboard bug where the main menu buttons overlap the displayed leaderboard\n-Added player footsteps with different sounds for different floor types\n-Added a footstep volume slider to adjust/mute the footstep sounds to your liking\n-Fixed safes appearing in tables in level fun and thus uninteractable\n-Removed the "buzzing" sound ONLY from levels that don\'t have buzzing lights, i.e the Japanese theme which has lanterns\n-Fixed moleman in the cave themes bugging out and not moving when hit by the player\n-Fixed battery items clipping through the ground\n-Set a maximum letter limit for player name to prevent endless text being inserted and thus having strange graphical glitches in-game\n-Fixed duplicate torch and arms showing when leaning while holding a torch\n-Fixed TV and phone ringing not being tied to any volume sliders and thus being unable to adjust the volume\n-TVs, phones, and campfires will not spawn in the Poolsrooms anymore as it doesn\'t make sense these objects to be underwater\n-Added an achievement for reaching "Level FUN"\n-Made it easier to collect items from chests as sometimes colliders can cause an issue\n-new smiler texture\n-Various other minor and smaller bug fixes...\n```\n[ [Steam](https://store.steampowered.com/news/app/1889640/view/3224024423345024646) | [Wiki](https://the-backrooms-survival.fandom.com/wiki/Updates) ]')
        .setImage('https://images-ext-2.discordapp.net/external/lubQSAs6956_fizfh8Uj_AGHlr8rdqFecZ13lQz1KM4/https/cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/41886210/3e2b1ff2efa5374267cf66fda534f6e30d218ba4.png')
        .setFooter(`Update: ${update} ${updateInfo}`)

const update006 = new MessageEmbed()
        .setColor('a69518')
        .setTitle('Update #006')
        .setDescription('**[May 4, 2022](https://store.steampowered.com/news/app/1889640/view/3224025075263373635)**\n\n> Update number 6 is now live!\n\n```fix\n-Added a new level theme: "Sewers" type level. This level is the biggest in size and space so far.\n-New entity that spawns only in sewers (although some other entities are in the sewers also)\n-Entities can now also hear you and other noise. Your footsteps make noise. Sprinting is the loudest, crouching the quietest. This means you need to be careful if just running around aimlessly\n-Entities can hear other noises like doors opening, lights popping, etc. The louder the noise, the further away they can hear it from.\n-added a setting to enable shadows for everything (must be enabled in graphics settings)\n-Added a musket weapon, a single shotgun that uses lead ball ammunition. Both are rare and must be found separately\n-Added a backpack that can be found and increases your maximum inventory by 5 slots\n-added an "unemployed" profession that provides no benefit but it is good for hardcore players looking for a challenge!\n-smilers now cannot jumpscare you if you have a light source out (candle, flashlight, lantern) that has fuel and is lit\n-Vents now spawn further away from the player, this prevents going to a new floor and seeing a vent right above you as an easy skip\n-Fixed a bug where "spamming" the use key button on a vent can cause you to skip multiple levels\n-Fixed a bug where being killed by fire gives you the ending "Killed by entity", it now shows accurately as "Death by accidental causes"\n-Fixed a bug where players\' arms/weapons still showed as pixelated if you turned off PSX settings\n-Added "glowsticks", found in boxes of 30, can be dropped to leave a dim light and act as a trail\n-You can now not jump if your stamina is empty\n-Weapon swinging uses and requires a small amount of stamina\n-Added smashable crates that can be smashed with weapons and may have items inside (does not cost weapon durability)\n-fixed ambient noises still playing on dead/game over screen\n-Fixed lightbulb popping audio not being adjusted by jumpscare volume SFX\n-psychiatrist now starts with two sanity pills\n-Fixed a visual bug where pick up notification didn\'t show for weapons\n-Fixed a visual bug where the panel for picking up notifications\n-Fixed a bug where pausing while the pickup notification typing text is still scrolling causes it to stop and remain unfinished\n-Fixed some typos\n-Fixed a bug where you could jump on the "moleman" entity\'s head\n```\n[ [Steam](https://store.steampowered.com/news/app/1889640/view/3224025075263373635) | [Wiki](https://the-backrooms-survival.fandom.com/wiki/Updates) ]')
        .setImage('https://images-ext-2.discordapp.net/external/rC-C6dOi2A7mu65t_cqBi5UkMRCyUguyTqGVIMAmdYo/https/cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/41886210/b4785b217d3ec28cc05807979282df957bdd8cac.png')
        .setFooter(`Update: ${update} ${updateInfo}`)

const update007 = new MessageEmbed()
        .setColor('a69518')
        //.setTitle('Update #007')
        .setDescription('**`Update #007 Estimated for May 11, 2022!`**')
        //.setImage('')
        //.setFooter(`Update: ${update} ${updateInfo}`)