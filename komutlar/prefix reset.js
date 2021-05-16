const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
module.exports = {
    kod: "prefix-sıfırla",
    async run(client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Prefiximi Ayarlaman İçin `ADMINISTRATOR` Yetkisine Sahip Olmalısın. **(Terfi Bekle)**')
        db.delete("prefix" + message.guild.id,)
        const q = new MessageEmbed()
        .setAuthor('Prefix Sıfırlandı')
        .setColor('RED')
        .addField(`Artık Prefixim : + Şeklinde.`)
        .setFooter(`${message.author.tag} Tarafından Prefix Değiştirildi !!`)
        message.channel.send(q)
    }
}