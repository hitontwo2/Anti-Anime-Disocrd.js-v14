var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
import { Client, GatewayIntentBits } from "discord.js";
import chalk from "chalk";
import { exec } from "child_process";
import https from "https";
import fs from "fs";
const client = new Client({ intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds,] });
client.on("ready", () => {
    console.log(chalk.greenBright("Bot has become online"));
});
client.on("messageCreate", (message) => __awaiter(void 0, void 0, void 0, function* () {
    let attachments = message.attachments.map(e => e.attachment);
    yield download(attachments[0]);
}));
function download(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const file = fs.createWriteStream(`./cache/${new Date().getTime()}.png`);
        https.get(url, (res) => {
            res.pipe(file);
        });
    });
}
function AnimeScan() {
    return __awaiter(this, void 0, void 0, function* () {
        let id = new Date().getTime();
        try {
            exec(`python ../Scanners/detect.py ../cache/${id}.png ../cache/${id}.jpg`);
        }
        catch (err) {
            console.log("Error while scanning images");
        }
    });
}
(_a = exec(`python detect.py ../cache/cringes.png ../cache/s.jpg`).stdout) === null || _a === void 0 ? void 0 : _a.on("data", (data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(data);
}));
client.login("ODMzOTQ3NjkwNjg4ODM5Njgw.G0hApx.jP7CZE0c4jfHiJnRDYUjEKOXX6oh153XZrs1TU");
