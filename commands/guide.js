const Discord = require('discord.js');

module.exports = {
	name: 'guide',
	description: 'The help command',
	execute(message, args) {
		const helpEmbed = new Discord.MessageEmbed();
        helpEmbed.setColor('#0099ff');
        helpEmbed.setTitle('A List of Available Commands');
        helpEmbed.setDescription('Type the following commands to the bot!');
        helpEmbed.addFields(
            {name : '1: Get Champion Mastery', value: '!show lol mastery SUMMONER_NAME'},
            {name : '2: Get Rank Info', value : '!show lol rank SUMMONER_NAME'},
            {name : '3: Guide', value : '!guide'},
        );
        message.channel.send(helpEmbed);
	},
};