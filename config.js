import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['7745190032', '🤖┃ ᴮᴼᵀ', true],
  ['7745198093']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['50489079501', '573143917092']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = '🤖┃ ᴮᴼᵀ' 
global.author = '@fg98' 

//--info FG
global.botName = '🤖┃ ᴮᴼᵀ'
global.fgig = 'https://instagram.com/fg98_ff' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.id_canal = 'https://www.facebook.com/share/J9wPnWczeFD4A2pV/?mibextid=A7sQZp' //-ID de canal de WhatsApp
global.fgcanal = 'https://chat.whatsapp.com/GtXAWDlphvw3XHcb7scmdw'
global.bgp = 'https://chat.whatsapp.com/Hq2bBBAg3bpBDo1Zrpfw3Y'
global.bgp2 = 'https://chat.whatsapp.com/EST7ZYKGBvQ2v4ZSTHIGSd'
global.bgp3 = 'https://chat.whatsapp.com/FyEjePGLCOr701GxnvvbQI' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
