const Discord = require('discord.js');

module.exports = {
    kod: 'ping',
  async run (client,message,args){
  const useruser = "Komut "  + message.author.username + " tarafından çalıştırıldı";
  const userurl = message.author.avatarURL;
  const bayrak = ":flag_tr:";
  const ping = `${Math.round(client.ws.ping)}ms`;

let embed = new Discord.MessageEmbed()
.setTitle(':shield: Anlık Gecikme Süresi :shield:')
.setColor("#00FF00")
.addField("Ping :", ping)

.setFooter(useruser, userurl)
.setTimestamp();

message.channel.send(embed);

}
}