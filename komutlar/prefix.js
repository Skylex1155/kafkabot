const { MessageEmbed } = require('discord.js')
const db = require('quick.db');
module.exports = {
    kod: "prefix",
    async run(client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Prefiximi Ayarlaman İçin `ADMINISTRATOR` Yetkisine Sahip Olmalısın. **(Terfi Bekle)**')
        if (!args[0]) return message.channel.send('Lütfen Geçerli Bir Prefix Giriniz **!**')
        const eskiprefix = db.has("prefix" + message.guild.id) ? db.fetch("prefix" + message.guild.id) : "+"
        if (eskiprefix == args.join(" ")) return message.channel.send('Geçerli Prefixim Zaten Bu??')
        db.set("prefix" + message.guild.id, args.join(" "))
        const q = new MessageEmbed()
        .setAuthor('Prefix Başarıyla Değiştirildi !! Yeni Prefixim `' + args.join(" ") + '` Artık Bu')
        .setTimestamp()
        .setColor('GREEN')
        .setFooter(`${message.author.tag} Tarafından Prefix Değiştirildi !!`)
        message.channel.send(q);
    }
}
