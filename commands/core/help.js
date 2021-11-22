const disbut = require("discord-buttons");
const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
let button1 = new disbut.MessageButton()
  .setStyle('blurple')
  .setLabel('Music')
  .setID("Music")
  .setEmoji('874333312846549063');
let button2 = new disbut.MessageButton()
  .setStyle('blurple')
  .setLabel('Filters')
  .setEmoji('866155255485825035')
  .setID("Filter");
let buttoninv = new disbut.MessageButton()
  .setStyle('url')
  .setLabel('Invite Me')
  .setURL("https://discord.com/oauth2/authorize?client_id=911547470369136670&scope=bot%20applications.commands&permissions=2147483647");
let buttonsupport = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Support Server') 
    .setURL("https://discord.gg/cm7y6338Hr");
let row1 = new disbut.MessageActionRow()
  .addComponent(buttoninv)
  .addComponent(button1)
  .addComponent(button2)
  .addComponent(buttonsupport)


module.exports = {
  name: 'help',
  aliases: ['h'],
  category: 'Core',
  utilisation: '{prefix}help <command name>',

  execute(client, message, args) {
    if (!args[0]) {
      const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
      const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

      let helpEmbed = new Discord.MessageEmbed()
        .setTitle("✅ Help Panel")
        .setColor("RANDOM")
        .setDescription("**__A Best High Quality Music Bot *Terkutuk Music*\nI Hobe You Enjoy My Sound__**")
        .addField(
        "Features", `>>> Free Music Bot\nBest Quality Music\nAnd More Much`)
        .addField("Change Log","No Change Log!")
        .setImage("")
      
      .setThumbnail("https://media.discordapp.net/attachments/910564624288608284/910577835947741244/bvnvbnvbn.png")
      .setFooter("Made By StarriX | Prefix: tktm!")
      return message.channel.send(helpEmbed,row1);
      message.channel.send({
        embed: {
          color: 'ORANGE',
          author: { name: 'Help pannel' },
          footer: { text: '' },
          fields: [
            { name: 'Bot', value: infos },
            { name: 'Music', value: music },
            { name: 'Filters', value: client.filters.map((x) => '`' + x + '`').join(', ') },
          ],
          timestamp: new Date(),
          description: `To use filters, ${client.config.discord.prefix}filter (the filter). Example : ${client.config.discord.prefix}filter 8D.`,
        },
      });
      message.channel.send('test1')
    } else {
      const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

      if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);
      let helpcommandEmbed = new MessageEmbed()
        .setTitle("Help Panel")
        .setColor("RANDOM")
        .addField(
          "Command Name: ",
          command.name
        )
        .addField(
          "Command Category:",
          command.category
        )
        .addField(
          "Command Aliase(s)",
          command.aliases.length < 1 ? 'None' : command.aliases.join(', ')
        )
        .addField(
          "Command Utilisation: ",
          command.utilisation.replace('{prefix}', client.config.discord.prefix)
        )
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter("Made By TzZone BOT Development | Prefix: *")
      return message.channel.send(helpcommandEmbed,{
        button: [buttoninv,buttonsupport],
      });
      




    };
  },
};
