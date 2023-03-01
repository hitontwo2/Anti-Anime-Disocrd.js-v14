import Discord,
{
    Client,
    GatewayIntentBits

} from "discord.js";

import chalk from "chalk"
import {exec} from "child_process"
import https from "https"
import fs from "fs"
const client = new Client({ intents:[GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent,GatewayIntentBits.Guilds,]})

client.on("ready", () => {
    console.log(chalk.greenBright("Bot has become online"))
})

client.on("messageCreate", async message => {
    let attachments = message.attachments.map(e => e.attachment)
    download(attachments[0])
    await AnimeScan(await at)
})

async function download(url:any){
    const file = fs.createWriteStream(`./cache/${new Date().getTime()}.png`)
    https.get(url, (res) => {
        res.pipe(file)
    })
}
async function AnimeScan(attachment) {
    let id = new Date().getTime()
    try{
        exec(`python ../Scanners/detect.py ../cache/${id}.png ../cache/${id}.jpg`)
    }catch(err){
        console.log("Error while scanning images")
    }
}
exec(`python detect.py ../cache/cringes.png ../cache/s.jpg`).stdout?.on("data", async data => {
    console.log(data)
})
client.login("ODMzOTQ3NjkwNjg4ODM5Njgw.G0hApx.jP7CZE0c4jfHiJnRDYUjEKOXX6oh153XZrs1TU")

