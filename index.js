const Discord = require =('discord.js')
var prefix = '^'
const ytdl = require('ytdl-core')
const client = new Discord.Client();
client.on('message', message => {
if(!message.channel.guild) return;
if (message.content.startsWith('$!play')) {
message.delete(4000)
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) return message.reply(`You must be join to channel first`).then(msg => msg.delete(3000))
voiceChannel.join()
.then(connnection => {
const stream = ytdl("الرابط من فضلك", { filter: 'audioonly' });
const dispatcher = connnection.playStream(stream);
dispatcher.on('end', () => voiceChannel.leave());
return message.reply(":heavy_check_mark: انا اشغل الان").then(msg => msg.delete(3000))
});
}
});

 var setGame = {'By Mouatz2003 $!play :D'}

client.login('NDQwMTUxMTc1NjE0OTU1NTIw.DcdiPQ.xiIhkb3NUquIYr7fl-c5oUBA7EQ');
