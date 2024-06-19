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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_46_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM2LFxuICAgICAgICA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTczLFxuICAgICAgICA1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0LFxuICAgICAgICA4LFxuICAgICAgICAxLFxuICAgICAgICA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA1LFxuICAgICAgICA1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNixcbiAgICAgICAgMTk1LFxuICAgICAgICA0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI2LFxuICAgICAgICAzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMjM1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDM5LFxuICAgICAgICA4MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDU2LFxuICAgICAgICAzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg1LFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2LFxuICAgICAgICA5MixcbiAgICAgICAgMixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYllzR29kaENVanRXTWZ4NUQzeG5PVmNmSkJBS1VONkJlK3dJRld2SmRhbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzYyODg1MzI4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkM0ODczQkEwNTZEOEMxNDAzRDA2NkI2QkY2QUEwMDlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4ODA0NzkyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInFnTnFybzVyUzRhcEN2bkt4dHhRQ1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTMxYTMwMzYtNDdlZS00YTRiLTliY2ItMGViYTBmMTVkZDAxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDMxLFxuICAgICAgMixcbiAgICAgIDQzLFxuICAgICAgMjAxLFxuICAgICAgMjA5LFxuICAgICAgMTI1LFxuICAgICAgMTM1LFxuICAgICAgMzIsXG4gICAgICAxODMsXG4gICAgICAxNTksXG4gICAgICAwLFxuICAgICAgNDksXG4gICAgICAyNDksXG4gICAgICA3NCxcbiAgICAgIDExNSxcbiAgICAgIDE5MSxcbiAgICAgIDExNCxcbiAgICAgIDIwNyxcbiAgICAgIDE2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDE5MCxcbiAgICAgIDE5NCxcbiAgICAgIDI1LFxuICAgICAgOTcsXG4gICAgICAxNzEsXG4gICAgICAyMzEsXG4gICAgICAxOTUsXG4gICAgICAzMyxcbiAgICAgIDEyOCxcbiAgICAgIDE5MixcbiAgICAgIDE3MyxcbiAgICAgIDExNCxcbiAgICAgIDUyLFxuICAgICAgMjE1LFxuICAgICAgMjUxLFxuICAgICAgNTMsXG4gICAgICAzNCxcbiAgICAgIDE5MSxcbiAgICAgIDE5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGODZDU1BaOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjc2Mjg4NTMyODE6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MTg4OTA3OTQ3MjI5MzoyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPemc5SUlIRUxEQ3k3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhvczlqcENnZEJJU0hPWUZRQkFxSjlYZTlYR01JcFloRzhRalVQR3RyblU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMXN5OHZHZWc5Y0kwa015bVZsZkFjTzJ3THFUUnV5dUN5cjV1UUZjMlNUY3lYYnd3M3UwUk14NVlQWVh1aGFUQXRPeTJ3SFgvNXRFVWxId1Yybm04Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNjRUeWUxc1NJWFZ4aFErM1pXOGZIRUdrRktsVXJ5OUVQdHVYS0JsVTd1NVJKOXBRb2JNS0pueG9XZVp4U21DWTRDQlU1aWxwdWZjUllmZnhaMUNyalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc2Mjg4NTMyODE6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg4MDQ3ODksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBSW5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFJbi5qc29uIjogIntcImtleURhdGFcIjpcImlxZnZTcGdoY1Z4V216VXc5OXpRQWFXL2NsWUlJUFJPc0Z5SXpQNmpmSVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg4NTE1NTQzNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4ODA0NzkwMjYwXCJ9Igp9"  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
