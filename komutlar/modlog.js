const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    kod: 'modlog',
  async run (client,message,args){
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(` Mod-log kanalı zaten ayarlı değil.`);
    db.delete(`log_${message.guild.id}`)
   message.channel.send(` Mod-log kanalı başarıyla sıfırlandı.`);
    return
  }
  
if (!logk) return message.channel.send(` Yanlış kullanım doğru kullanım: !!mod-log #kanal`);

db.set(`log_${message.guild.id}`, logk.id)

message.channel.send(` Mod-log kanalı başarıyla ${logk} olarak ayarlandı.`);
}
}