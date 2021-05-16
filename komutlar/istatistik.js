        
const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
const db = require('quick.db');
module.exports = {
  kod: "istatistik",
  async run (bot, message, args) {

   const rexuszaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const rexusistatistikler = new Discord.MessageEmbed()
  .setColor("#66ff00")
  .setFooter('Vortex ©️ 2021 Tüm Hakları Saklıdır. ', bot.user.avatarURL)
  .addField("Vortex **İstatistikleri**", "Sunucunuz İçin En İyisi")
  .addField("<:dcdev:824245425644503080>**Botun Geliştiricisi**",  " <@723980580634493059>")
  .addField("<:OnaylanmPng:823122480486940692>**Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("<a:yakarok:823103196494561290>**Çalışma süresi**", rexuszaman)
  .addField("<a:ElSallamaGif:823103212097503232>**Kullanıcılar**" , bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("<a:Zil2Gif:823103207868858369>**Sunucular**", bot.guilds.cache.size.toLocaleString(), true)
  .addField("<:GlenYzPng:823122484185268245>**Kanallar**", bot.channels.cache.size.toLocaleString(), true)
  .addField("<a:saok:823103096024203264>**Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("<a:yukleno:823103201376862229>**Ping**", bot.ws.ping+" ms", true)
  .addField("<:CPU:824248920154701864>**CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("<a:sonsuz:823103222217572393>**Bit**", `\`${os.arch()}\``, true)
 return message.channel.send(rexusistatistikler);
  }
}