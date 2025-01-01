const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_58_12_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMixcbiAgICAgICAgMTg0LFxuICAgICAgICAzMixcbiAgICAgICAgMTY0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg5LFxuICAgICAgICAxODIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MixcbiAgICAgICAgMjEyLFxuICAgICAgICA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY3LFxuICAgICAgICA4MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgxLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgzLFxuICAgICAgICA1NixcbiAgICAgICAgMjIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNyxcbiAgICAgICAgOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcwLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDgwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0NixcbiAgICAgICAgMTI2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMwLFxuICAgICAgICA0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTczLFxuICAgICAgICAzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlp1SVJZYzgwNFUvRUFlekhGY3lvMGMzTEl3NVhrTzY3L1ZudjF0SnVkYzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNFaHVtOHVBUVdPcl84bFpUN2NJTkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGQxNTgxZWMtZGIyNy00N2Y5LWEwNDYtODAyOWIwNTdhY2RiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUsXG4gICAgICAxNzYsXG4gICAgICAxMjgsXG4gICAgICAxODMsXG4gICAgICAxMDQsXG4gICAgICA4NCxcbiAgICAgIDM4LFxuICAgICAgMTMyLFxuICAgICAgMTgyLFxuICAgICAgMTIxLFxuICAgICAgOTgsXG4gICAgICAyMjIsXG4gICAgICA0MixcbiAgICAgIDUxLFxuICAgICAgNzUsXG4gICAgICAxMzksXG4gICAgICA0NyxcbiAgICAgIDIwMyxcbiAgICAgIDgzLFxuICAgICAgMTIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk2LFxuICAgICAgOTQsXG4gICAgICA1OSxcbiAgICAgIDE2LFxuICAgICAgNDgsXG4gICAgICAyMDYsXG4gICAgICAxOTEsXG4gICAgICAxMDYsXG4gICAgICAyMTcsXG4gICAgICA0LFxuICAgICAgMjM5LFxuICAgICAgMjMyLFxuICAgICAgNzIsXG4gICAgICAxMjAsXG4gICAgICAyMjksXG4gICAgICAxNyxcbiAgICAgIDIyOSxcbiAgICAgIDc4LFxuICAgICAgNyxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBKODNLUlJKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDkzMTczODM1MToxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzc4MTYzMTgxODU1NTU6MTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDdPNmxBUStOVFB1d1lZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJITWRRWXhWeHV5NVJQN1BSTzVsYmVpSU1sSW41TDBVaGMybDYwMk9qQlRJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImFTNjZqa014N2MrSzAyNm9KMFhsbVM3L081RVFrb2J4dFZOR3lJSkxES3ZCYzl0Q1d1TGxjTGg3dTlrMVJ6NVM2UWFRWjRuMHZLdS90RTEydml5U0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZXazhsMVJYWWQvSFI2cVpzdEJLaEduY2NqeTRlcytRVzl1WU1ZMWh5L2lYay9pdEwwRWlkbWNXVVp0VEFLVElJczZLT0V6eS9SblY5b09SS3hXNUNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTMxNzM4MzUxOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NjQ5OTE2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "kelly",
  packname: process.env.PACK_NAME || "kelly-tec",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
