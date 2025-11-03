const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME15UmhIaDM0d1hEYWgrRzZHK0g0Vk8zcmN0bmtYZHdPNXlYUHRBenJWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieitLbGJKbmhwa1M1OGNrQkphTjk1cEF1eU94Z3ZhNlF6U0NUWDNWdWdTZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTG5PQWI3UGNiZGxldlRtQ2FWQVVlYjR1aGphNTRKdEhaTnE2WTA4aG0wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsUE1uYXhON3dTOHJpaFdkeHljSzV4d2NSd0JlYSsvRFh2Q0l4cTQ3dGpnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhPa0d2UDJMVXZiSktLWEF4VFdadnFIdTlrN2ZmcmR0SjhlcmZWOTk4bTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImM1WXBGZElwdmhzUDdzUEJNMEtoQzBXZE1NaEI5ckoyb1lUNktxZEpJQlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUY4eFFUR2dubVhldC8wY0NQekVqOTNQRmFxaklvbnkvbGxTbHZUa20ydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkhrMG9vamdldkZORDhjL0QzQUhuVzl0SEQrUm93c2ZIc3dEeTNnRXoxWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imd4b0FMSXlQZ0lQSmNPSkRzS2Z3cVlmNTlzc2VPdnNVRldoYTM4RXJPaXJxR2FaeVh2Q3N2ZHd2YlJ0QVgzam9oRGU0UkZORkVYRUJWYzRKTzdpamdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MSwiYWR2U2VjcmV0S2V5IjoiWGJmMU9QbjE1b1hXb0VnWXB1OUs1aTJGWjJCRkM3REl1YkttNGJwaEZOYz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5ODkxNTE3ODIzMDJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNFQ0IzQTQ5NEQ0ODJEQ0NCMUNFMkREMTA3REMzNzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MjE4MTgxM30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTg5MTUxNzgyMzAyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNDQyRUE2NTlFQTQ3QTlBMjlEQTVGMjA1NzIzN0Q4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjIxODE4MTN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkFERUVMNU1EIiwibWUiOnsiaWQiOiI5ODkxNTE3ODIzMDI6NEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjU4MDA4NDk5MzkyNjM3OjRAbGlkIiwibmFtZSI6Itix2KfYtNmA2YDZgNmA2YDZgNivINio2YDZhNmA2YjahvCdn6/wnZ+s8J2friJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDdIeVh3UXA0V2p5QVlZQkNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNytnRVJJTE15QmJ1N1NkRDZ2NmQzZE5BTGZTbHJqQ3VFUmkvZFdseHdBbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoib2k3WnhzSHhRS0lqclAvU2RVMU9OSXg1YlJnakNzakxLSlY3ZlZmazN2QWVyU3ZZOSs0OGgwb0pCUWtnd3ZTR2N5eUd0alFZOTAyektTZjRpNXRrRFE9PSIsImRldmljZVNpZ25hdHVyZSI6ImVmdkpBcjVrMzZ1N1BHd0g5N3E5ZVMzMlhiNVZYMTJYbnNnYkIwMzg4dHN3eDVFd0FyS0ZTb0d6TVBaL2JpOUEwTHprZys2ODJuWVFpdXJyQktwWmp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTg5MTUxNzgyMzAyOjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZS9vQkVTQ3pNZ1c3dTBuUStyK25kM1RRQzMwcGE0d3JoRVl2M1ZwY2NBSyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYyMTgxODExLCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNldyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ADEEL-MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn-bandaheali.vercel.app/file/ADEEL-MD31424.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ADEEL-MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "ADEEL-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923035512967",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ADEEL-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴅᴇᴇʟ-ᴍᴅ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn-bandaheali.vercel.app/file/ADEEL-MD31424.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*ADEEL-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923035512967",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
