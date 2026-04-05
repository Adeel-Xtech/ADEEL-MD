const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "دلته_خپل_سیشن_ایډي_پېسټ_کړه",
    OWNER_NUMBER: "93790225887",
    OWNER_NAME: "RAEES ANSAR",
    BOT_NAME: "RAEES ANSAR-MD",
    ALIVE_IMG: "https://files.catbox.moe/sx07qa.jpg",
    ALIVE_MSG: "*سلام انصار جانه! ستا سایبري بوټ فعال دی. 🛡️*",
    AUTO_READ_STATUS: "true",
    MODE: "public",
    WAIT_MSG: "*لږ صبر وکړه...*",
};
