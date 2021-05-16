const Discord = require("discord.js")
const db = require("quick.db")
const ayarlar = require('../ayarlar.json')
module.exports = {
    kod: 'goldliste',
  async run (client,message,args){
    if(message.author.id !== ayarlar.geliştirici) if(message.author.id !== ayarlar.sahip) return message.channel.send("hoop bilader sahip komutu bu");
   
  let code = args[1]
  let kişi = ''
  let data = db.get(`üyelikk`)
  let kişiAll = db.all().filter(i => i.ID.startsWith('üyelikk_'))
  kişiAll.forEach(s => {
    kişi += s.ID.replace('üyelikk_','<@') + "> \n" 
  })

  const embed = new Discord.MessageEmbed()
  .setAuthor(" Gold Listesi", client.user.avatarURL())
  .setColor(0x36393F)
  .setDescription(kişi)
  .setFooter(client.user.username, client.user.avatarURL())
  return message.channel.send(embed)



 
}
}