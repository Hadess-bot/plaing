var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Developing Hadess",
assets : {
large_image : "hades",
large_text : "Hadess" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Team Funzomb" , url : "https://discord.gg/zDTGfCrsmd"},{label : "Hadess",url : "Link2"}]
}
})
})
client.login({ clientId : "820022375923974154" }).catch(console.error);