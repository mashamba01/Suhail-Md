const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_06_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMzLFxuICAgICAgICA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDgxLFxuICAgICAgICAzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQwLFxuICAgICAgICA3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIxLFxuICAgICAgICA4NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMjIzLFxuICAgICAgICA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgOTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYyLFxuICAgICAgICA2NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2OSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDcwLFxuICAgICAgICAxMjksXG4gICAgICAgIDUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgODgsXG4gICAgICAgIDksXG4gICAgICAgIDUsXG4gICAgICAgIDcsXG4gICAgICAgIDgwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5LFxuICAgICAgICA3MixcbiAgICAgICAgNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODYsXG4gICAgICAgIDk4LFxuICAgICAgICA5MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc2LFxuICAgICAgICA1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NixcbiAgICAgICAgMjIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlI3SlNvdms2Rmp0YXJxRU1aRXlVd3BIWUJtTmtsZS8xUVEyR2RNelRrVzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImUyaG1pSldKU1htUkE2UGlibkY3NUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDIxYmJlY2MtNjUwOC00MTg2LTkwY2UtZDkzMDYxNzQyMDhmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OSxcbiAgICAgIDExMCxcbiAgICAgIDE0OCxcbiAgICAgIDY3LFxuICAgICAgMjIsXG4gICAgICA4MixcbiAgICAgIDcyLFxuICAgICAgMzMsXG4gICAgICAxLFxuICAgICAgNzAsXG4gICAgICAxNTksXG4gICAgICAwLFxuICAgICAgMTY2LFxuICAgICAgNzgsXG4gICAgICA2MyxcbiAgICAgIDExOSxcbiAgICAgIDY5LFxuICAgICAgMTcyLFxuICAgICAgMjMxLFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDIyMixcbiAgICAgIDI0NixcbiAgICAgIDIyLFxuICAgICAgMTU1LFxuICAgICAgMzQsXG4gICAgICAxOTgsXG4gICAgICA1NyxcbiAgICAgIDE5OCxcbiAgICAgIDE4MSxcbiAgICAgIDE1MixcbiAgICAgIDIxOCxcbiAgICAgIDU5LFxuICAgICAgMjQ0LFxuICAgICAgNTgsXG4gICAgICA2MyxcbiAgICAgIDIwMSxcbiAgICAgIDI0OSxcbiAgICAgIDMxLFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjI1MzdGSzIyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzYyODg1MzI4MToyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjcxODg5MDc5NDcyMjkzOjI0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcInByaW5jZW1hc2hhbWJhMDlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPM2c5SUlIRUp5Z3pMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhvczlqcENnZEJJU0hPWUZRQkFxSjlYZTlYR01JcFloRzhRalVQR3RyblU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZHhrSG4xeC9RbGZzSTdRRUEvNHo4TlNXU3ZSMHpuSnFhd2d2TENaQTAwN21zTzQ1UHplc1I5elg2a3I5VVRCMEREUUs5WWR1anhDZzhkK2NvczVyQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicUVJNExuaHRVOW5GL1pqY0pNRVczV09GV3NQL1FFa3R1RGJla1kzM0E3NWtBcXI3REgrcGtLNTdYZjh2dEt1c0R5anl3cFF1UTNoOW1EcElLaG02Z3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc2Mjg4NTMyODE6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg4MTY4MDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBSW9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFJby5qc29uIjogIntcImtleURhdGFcIjpcIjNKYTBIQU4wOWhUOW4yUHBoa3FtaXc2cHlRbEordlgxSmpVNm9YbEdqaVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg4NTE1NTQzNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODgxMzIyNzA3OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
