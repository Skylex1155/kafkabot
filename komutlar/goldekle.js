const db = require('quick.db')
const fs = require('fs')
const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
const client = new Discord.Client();
module.exports = {
    kod: 'goldekle',
  async run (client,message,args){
    if(message.author.id !== ayarlar.geliştirici) if(message.author.id !== ayarlar.sahip) return message.channel.send("hoop bilader sahip komutu bu");
  
  let user = client.users.cache.get(args.slice(0).join(' '));
  let nesne = args[0]
  if (!nesne) return message.channel.send('id belirt moruq')
  
  db.set(`üyelikk_${nesne}`, 'üyelik')
  
  message.channel.send(` <@${nesne}> adlı kişinin gold üyeliğini başarıyla aktif ettim.`)
//client.channels.cache.get('737989667714105346').send(`<a:gold1:719860487734427708> <@${nesne}> ID'li Kullanıcı Gold Üyeliğe Eklendi.   <a:gold1:719860487734427708>`)
if (client.users.cache.get(''+nesne+'').send(`\`Gold üyeliğiniz aktif edildi.\``)){
 
} else return
  
}
}