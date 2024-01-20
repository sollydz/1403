///By Alan
///By Alan
const express = require("express");
const app = express();
app.listen(() => console.log("Server Started  A L A N"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); // All partials are loaded automatically
///By Alan
client.on('ready', async () => {
  console.log(`${client.user.username} is ready!                        Fatures: 
1- Streaming Added
2- Joined Voice Channel
3- Without Offline 24/7
Dont Miss Credits To 'kurdm98`);
})
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
///By Alan 
  client.user.setActivity("", { type: "", url: "" })
  setInterval(async () => {
    client.channels.fetch("1185234955161309295")
      .then((channel) => {
        const VoiceConnection = joinVoiceChannel({
          channelId: channel.id,
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator
        });
      }).catch((error) => { return; });
  }, 1000)
});
client.login(process.env.token);
const keepAliveServer = require('./keep_alive.js');
///By Alan
