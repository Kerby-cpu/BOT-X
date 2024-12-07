 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
//═══════[Required Variables]════════\\
global.audio = "www.youtube.com";
global.video = "www.youtube.com";global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ms.excelamadi@yahoo.com";
global.location = "Rivers,Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Xcelsama:Xcel@xcelsama.qpklf.mongodb.net/?retryWrites=true&w=majority&appName=Xcelsama";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Excelsama/BOT-X";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.website = process.env.GURL || " https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/jTJDVYj/Leonardo-Phoenix-A-vibrant-animestyle-illustration-of-a-young-2.jpg";
global.devs = "2347045035241";
global.sudo = process.env.SUDO || "2347045035241";
global.owner = process.env.OWNER_NUMBER || "2347045035241";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  " eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkFYajYwUzY4a1NmbXkyQ2xEU1pMK3I0SVFjaEY5TjkzcllUQVhRT3NtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjEzZzRnSXF3WWQwM2xqdjNnSjRNN1kxNzM1QUw0bVB6T0hHMXcxVTBpbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRWwvT2owcnRnL1NGMlh1aUE5Ukt5L2FDNUVSL2JzWmF1Y2hzM3NiYVVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKczMwUUw2akJtYWhJOWZSYVh0VHcrcnRTdjRIY0txUkhlMjZFeURySVZjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBPM2YzRlFFV0pZZzB1aVZwY204MFFDTU5qZnExT0dtYy9LY200QXlxbkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVWb1dtRXR3WFpNTUd0QVRMYitYZWFiOXBrL0IyUzBUOTNmd0p1T2dDd1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUR6Um5Md0VxSXFSaldwYWN3aVJUQmpwMloxbW5VcXhlbUxVWldjTHNGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTU4R0Z6VVlIUXNRZHh4RmtMRElsNGo1WGtLaE5WWktpc2lKVUJLOFJCaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdhbCtZdlpEcXh6dXJrVnQwK01iU3h1R3ZpWDlkSlMyKzNSRERnbktYY1FXWllzVTg2dlZvQmpLZmxxQ3RIOERMOUphamhxNGhacWtxNXlQOUtzZURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDcsImFkdlNlY3JldEtleSI6IlBETUJvVEQzZ2lqdGpZYVk0UG51MjNNOCsyZnNoQlJrMkRVdXRuQURHVlU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZTUlh2Ni1OUkdpVHhlcUwtRHBzcEEiLCJwaG9uZUlkIjoiOGFkNGZiYzItMmRlZS00MDg3LWFhYzItMjhkYTQ2ODY5YjBlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpYY3BidTlwUWZhazZiSDN6eE1GcWUzeHpNbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWWGQ3cEpzYm1wWVFIbWR0UkYvZWNhWjdNdXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN1FLR1ZaUDUiLCJtZSI6eyJpZCI6IjUwOTM4ODMwNjI3OjQ4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOeUx3YUVHRUlYN3pyb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPTFBCS014MlFYK09NZDBaK05EWGtyVVgrWis3bnBUdW5FTEwvK1lkRDBvPSIsImFjY291bnRTaWduYXR1cmUiOiJOZDBFR3Q0cTRSd2lkVWIvL281bU9pTHlsSzVYMURTWDVKUjErOG9TcDBTbG1yMFZkdjAxVHBXUDVIZ1ptV2Z0YUtHeFVuYzdhZ2w1eitMbjZwZzlEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicW1XWTZwUEhQbzlzY2ovL004bldGclA1TWFmRHUwaGdjRTk2RGJYLzdKYWRWT1RsOFJtc2hWUWN5SXB3RkdOWmZFdSsyUDBYNGx2aFlYZ25XaExxQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDkzODgzMDYyNzo0OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUaXp3U2pNZGtGL2pqSGRHZmpRMTVLMUYvbWZ1NTZVN3B4Q3kvL21IUTlLIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMzNTQxMjY2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5tZyJ9" // 
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BOT-X ™`",
  author: process.env.PACK_AUTHER || "Xcelsama",
  packname: process.env.PACK_NAME || "BOT-X",
  botname: process.env.BOT_NAME || "BOT-X",
  ownername: process.env.OWNER_NAME || "Xcelsama",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.UI|| "BOT-X.UI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
