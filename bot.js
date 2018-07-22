const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = 'L'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` | ${client.guilds.size} Servers  | `,"https://www.twitch.tv/nashoot2")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('ولكم منوؤر');
  }
});

client.on('guildCreate', guild => {
  client.channels.get("ايدي الروم").send(`**تم اضافة البوت في سيرفر جديد مبروكك
Server name: __${guild.name}__
Server owner: __${guild.owner}__**`)
}); 

client.on('message', function(msg) {
  const prefix = 'L'
  if(msg.content.startsWith (prefix  + 'server')) {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`Showing Details Of  **${msg.guild.name}*`)
    .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
    .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
    .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
    .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
    .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
    .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});

client.on("message", message => {
  var prefix = "L";

          var args = message.content.substring(prefix.length).split(" ");
          if (message.content.startsWith(prefix + "clear")) {
 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('? | **لا يوجد لديك صلاحية لمسح الشات**');
      var msg;
      msg = parseInt();
    
    message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
    message.channel.sendMessage("", {embed: {
      title: "Done | تــم مسح الشات",
      color: 0x06DF00,
      description: "تم مسح الرسائل ",
      footer: {
        text: "Nashooto"
      }
    }}).then(msg => {msg.delete(3000)});
                        }

   
}); 

client.on('message', message => {
  if (message.content.startsWith("رابط")) {

message.channel.createInvite({
      thing: true,
      maxUses: 5,
      maxAge: 86400
  }).then(invite =>
    message.author.sendMessage(invite.url)
  )
message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 5**`)


  }
});

client.on("ready", () => {
  var guild;
  while (!guild)
      guild = client.guilds.get("467035751499169792");
  guild.fetchInvites().then((data) => {
      data.forEach((Invite, key, map) => {
          var Inv = Invite.code;
          dat[Inv] = Invite.uses;
      });
  });
});



client.on("guildMemberAdd", (member) => {
  let channel = member.guild.channels.get("467074207101091844");
  if (!channel) {
      console.log("!the channel id it's not correct");
      return;
  }
  if (member.id == client.user.id) {
      return;
  }
  console.log('-');
  var guild;
  while (!guild)
      guild = client.guilds.get("467035751499169792");
  guild.fetchInvites().then((data) => {
      data.forEach((Invite, key, map) => {
          var Inv = Invite.code;
          if (dat[Inv])
              if (dat[Inv] < Invite.uses) {
channel.send(`تم دعوته بواسطة  ${Invite.inviter} `) ;         
}
          dat[Inv] = Invite.uses;
     
     });
  });
});

const mepro = [
 '* من تحب اكثر امك او ابك*', '* من تحب اكثر الوجبات سريعة ولا وبجات في بيت *', 'من تحب اكثر اخيك ولا اختك.', '  من تحب اكثر النوم ولا  السهر.', 'من تحب اكثر هاتف فقد انت تمتلكه في عالم او تلفاز ضخم. ', 'من تحب اكثر ميدنتك او اليابان', ' من تحب اكثر ابيك يضربك كف قوي ولا شخص غريب يضربك كف قوي.', 'من تحب اكثر جدك او نانتك. ', 'من تحب اكثر كرة سلة او كرة قدم ', 'من تحب اكثر تشحن هاتفك كل ثلاث ايام ولا بدون انترنت لمدة ثلاث ايام.', '
  .', 'من تحب اكثر تبرمج العاب ولا تبرمج مواقع', ' من تحب اكثر تشتهر بواسطة سوشيال ميديا ولا تشتهر بفضل لعبة البولينغ.*', ' من تحب اكثر تكون ممثل وانت بطل قصة وفلوس قليلة ولا تكون الشخصية شريرة بس فلوس كثيرة.', '*من تحب اكثر كريستيانو ولا ميسي. *', '*من تحب اكثر النوم او تشتغل في الليل والنهار وتربح كثير فلوس.*', '* من تحب اكثر يكون عندك اصدقاء في طفولى وماعندك اصدقاء لمه تكبر او العكس. *', '*  من تحب اكثر تولد بدون يكون عندك فقد يد وحدة ولا تولد عندك رجل وحدة فقد.*', '*من تحب اكثر يكون عمبرك قليل والكل يحبك او عمرك طويل جدا والكل يكرهك. *', '*من تحب اكثر تعيش في اسوأ مكان في عالم وامك موجودة معك ولا تعيش افضل بلد معك بس امك ميتة. *' 
] 
client.on('message', message => {
 var prefix = 'L'; 
if (message.content.startsWith(prefix + 'من تحب اكثر')){ 
var mariam= new Discord.RichEmbed() 
.setTitle("لعبة من تحب اكثر ..")
 .setColor('RANDOM') 
.setDescription({mepro[Math.floor(Math
.random() * mepro.length)]}) message
.channel.sendEmbed(mariam); message.react("🤔")
 }
 });

client.login(process.env.BOT_TOKEN);
