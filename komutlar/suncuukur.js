
const Discord = require("discord.js");

module.exports = {
   kod: 'sunucu-kur',
 async run (client,message,args){
  if (message.author.id === message.guild.owner.id) {
    message.channel
      .send(
        new Discord.MessageEmbed()
          .setColor("#000000")
          .setTitle("Komut girişi")
          .setDescription("Gerekli Dosaylar Kurulsunmu?.")
          .setFooter(
            'Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'
          )
      )
      .then(() => {
        message.channel
          .awaitMessages(response => response.content === "evet", {
            max: 1,
            time: 30000,
            errors: ["time"]
          })
          .then(collected => {
            message.guild.channels.create(`ÖNEMLİ KANALLAR`, {
              type: "category"
            });
message.guild.channels.cache.forEach(x => x.delete())
            message.guild.channels
              .create(`「📜」kurallar`, { type: "text" })
              .then(channel =>
                channel.setParent(
                  message.guild.channels.cache.find(
                    channel => channel.name === "ÖNEMLİ KANALLAR"
                  )
                )
              );
            message.guild.channels
              .create(`「✅」giriş-çıkış「❌」`, { type: "text" })
              .then(channel =>
                channel.setParent(
                  message.guild.channels.cache.find(
                    channel => channel.name === "ÖNEMLİ KANALLAR"
                  )
                )
              );
            message.guild.channels
              .create(`「🎉」duyuru`, { type: "text" })
              .then(channel =>
                channel.setParent(
                  message.guild.channels.cache.find(
                    channel => channel.name === "ÖNEMLİ KANALLAR"
                  )
                )
              );
            message.guild.channels
              .create(`「🎥」video-odası`, { type: "text" })
              .then(channel =>
                channel.setParent(
                  message.guild.channels.cache.find(
                    channel => channel.name === "ÖNEMLİ KANALLAR"
                  )
                )
              );
            message.guild.channels.create(`SOHBET KANALLARI`, {
              type: "category"
            });
            message.guild.channels
              .create(`「💬」sohbet`, { type: "text" })
              .then(channel =>
                channel.setParent(
                  message.guild.channels.cache.find(
                    channel => channel.name === "SOHBET KANALLARI"
                  )
                )
              );
            message.guild.channels
              .create(`「📈」komutlar`, { type: "text" })
              .then(channel =>
                channel.setParent(
                  message.guild.channels.cache.find(
                    channel => channel.name === "SOHBET KANALLARI"
                  )
                )
              );
            message.guild.channels
              .create(`「☯」rank-chat`, { type: "text" })
              .then(channel =>
                channel.setParent(
                  message.guild.channels.cache.find(
                    channel => channel.name === "SOHBET KANALLARI"
                  )
                )
              );
            message.guild.channels
              .create(`「📷」foto-chat`, { type: "text" })
              .then(channel =>
                channel.setParent(
                  message.guild.channels.cache.find(
                    channel => channel.name === "SOHBET KANALLARI"
                  )
                )
              );
            message.guild.channels
              .create(`「💎」şikayet-odasi`, { type: "text" })
              .then(channel =>
                channel.setParent(
                  message.guild.channels.cache.find(
                    channel => channel.name === "SOHBET KANALLARI"
                  )
                )
              );
            message.guild.channels.create(`OYUN ODALARI`, { type: "category" });
            message.guild.channels
              .create(`🎮》LOL`, { type: "voice" })
              .then(channel =>
                channel.setParent(
                  message.guild.channels.cache.find(
                    channel => channel.name === "OYUN ODALARI"
                  )
                )
              );
            message.guild.channels
              .create(`🎮》ZULA`, { type: "voice" })
              .then(channel =>
                channel.setParent(
                  message.guild.channels.cache.find(
                    channel => channel.name === "OYUN ODALARI"
                  )
                )
              );
            message.guild.channels
              .create(`🎮》COUNTER STRİKE`, { type: "voice" })
              .then(channel =>
                channel.setParent(
                  message.guild.channels.cache.find(
                    channel => channel.name === "OYUN ODALARI"
                  )
                )
              );
            message.guild.channels
              .create(`🎮》PUBG`, { type: "voice" })
              .then(channel =>
                channel.setParent(
                  message.guild.channels.cache.find(
                    channel => channel.name === "OYUN ODALARI"
                  )
                )
              );
            message.guild.channels
              .create(`🎮》FORTNİTE`, { type: "voice" })
              .then(channel =>
                channel.setParent(
                  message.guild.channels.cache.find(
                    channel => channel.name === "OYUN ODALARI"
                  )
                )
              );
            message.guild.channels
              .create(`🎮》MİNECRAFT`, { type: "voice" })
              .then(channel =>
                channel.setParent(
                  message.guild.channels.cache.find(
                    channel => channel.name === "OYUN ODALARI"
                  )
                )
              );
            message.guild.channels
              .create(`🎮》ROBLOX`, { type: "voice" })
              .then(channel =>
                channel.setParent(
                  message.guild.channels.cache.find(
                    channel => channel.name === "OYUN ODALARI"
                  )
                )
              );
            message.guild.channels
              .create(`🎮》WOLFTEAM`, { type: "voice" })
              .then(channel =>
                channel.setParent(
                  message.guild.channels.cache.find(
                    channel => channel.name === "OYUN ODALARI"
                  )
                )
              );
            message.channel.send(
              "Gerekli Kanallar Kuruluyor.O sırada sende rolleri kurabilirsin"
            );
          });
      });
  } else {
    message.channel.send(
      ":x: **Üzgünüm Ama Bu Komutu Sadece Sunucu Sahibi Kullanabilir!**"
    );
  }
}

}