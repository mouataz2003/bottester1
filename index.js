const Discord = require('discord.js')
const bot = new Discord.Client()
const config = require('./config.json')
const { prefix, token } = require('./config.json')
const YoutubeStream = require('ytdl-core')



bot.on('ready', function () {
    console.log("Je suis connecté !")


})

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
    return channel.send(`Welcome To our Server :D `+ member.displayName)
}).catch(console.error)
})

bot.on('ready', function() {
    bot.user.setActivity('!!help')

})

bot.on('message', message => {


    if (!message.content.startsWith(prefix) || message.author.bot) return

const args = message.content.slice(prefix.length).split(' ')
const command = args.shift().toLowerCase();


if (command === 'avatar') {
    if (!message.mentions.users.size) {
        return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
    }

    const avatarList = message.mentions.users.map(user => {
        return `${user.username}'s avatar: ${user.displayAvatarURL}`;
});

    message.channel.send(avatarList)
}

if (command === "help") {
    message.channel.send({embed: {
            color: 0xff0000,
            fields: [{
                name: "Command Is: ↓",
                value:
                "`1.` !!help\n`2.` !!avatar \n`3.` !!ping \n`4.` !!react \n`5.` !!server \n`6.` !!me \n`7.` !!kick \n`8.` !!fruits"
            }]
    }
    })
}



if (command === 'ping') {
    let startTime = Date.now();
    var embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("Ping local:", `**:heartbeat: Ping = ${Math.round(Date.now() - startTime)} ms**`, true)
        .addField("API:", `**:stopwatch: Ping = ${Math.round(bot.ping).toFixed(0)} ms**`, true)
        .setFooter("Requête envoyé par " + message.author.username, message.author.avatarURL)

    message.channel.send('*Calcul du ping...*').then(m => m.edit(embed))
}

if (command === 'fruits') {
    message.react('🍎');
    message.react('🍊');
    message.react('🍇');
}


if (command === `react`){
    message.react('437156715214012418')
    message.react('👌')
    message.react('😄')
}

if (command === 'server'){
    message.channel.send(`Name : \n ${message.guild.name}\n\nMembers: \n ${message.guild.memberCount}`)
}



if (command === 'me') {
        message.channel.send(`Ton nom : ${message.author.username}`)
}




if (command === 'kick') {

    if (!message.mentions.users.size) {
        return message.reply('you need to tag a user in order to kick them!');
    }

    const taggedUser = message.mentions.users.first();

    message.channel.send(`You wanted to kick: ${taggedUser.username}`)


}


})

bot.login(token);