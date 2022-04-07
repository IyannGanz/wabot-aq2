let fs = require('fs')
let chalk = require('chalk')
let tum1 = fs.readFileSync('./gambar1.jpeg')
let tum2 = fs.readFileSync('./gambar2.jpeg')
//let tum3 = fs.readFileSync('./gambar3.jpeg')
const { MessageType} = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
let { performance } = require('perf_hooks')
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`
}
runtime = process.uptime()
teks = `${kyun(runtime)}`
run = `${kyun(runtime)}`

global.owner = ['505']// Put your number here

global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  nrtm: 'https://nurutomo.herokuapp.com',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  amel: 'https://melcanz.com',
  amell: 'https://melcanz.net',
  Dehan: 'https://dhnjing.xyz',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': '9cd4f4af8da100ea',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://api.lolhuman.xyz': '0490467fefc57404e8a4eb5d',
  'https://leyscoders-api.herokuapp.com': 'DestaPrasApi',
  'https://melcanz.com': 'beli bang',
  'https://melcanz.net': 'gratisan',
  'https://dhnjing.xyz': 'LitRHap',
}
//sosmed owner
global.yt = 'https://youtube.com/channel/UCVv3wC5Q7_juw-d9HepjpOQ' //UBAH JADI LINK YT LU
global.ig = `https://instagram.com/the.sad.boy01` //UBAH JADI LINK IG LU

//donasi
global.donate = `
¨q©¤¡¸  Donasi ? Pulsa ¡¹
©À? tre [0857 4234 4873]
¨t©¤©¤©¤©¤

¨q©¤¡¸  Donasi ? Non Pulsa ¡¹
©À? Gopay [0857 4234 4873]
©À? saweria [https://saweria.co/JulianKastaraaa09]
¨t©¤©¤©¤©¤

¨q©¤¡¸  Hubungi ¡¹
©À? Ingin donasi? Wa.me/6285742344873
¨t©¤©¤©¤©¤` //UBAH JADI NOMER DAN LINK SAWERIA MU

//Rules bot
global.rules = `
¨q©¤ *¡¸ RULES BOT¡¹*
©¦
©À? DILARANG TOXIC
©À? DILARANG SPAM COMMAND BOT
©À? DILARANG KIRIM VIRTEX
©À? DILARANG KIRIM 18+ APAPUN ITU
©À? DILARANG TELPON / VC KEBOT
©À? DILARANG CULIK BOT KE GRUP
©À? DILARANG PROMOSI KE BOT
©À? BOT TIDAK MENERIMA SAVE KONTAK
©¦
©À? KALO MELANGGAR AKAN LANGSUNG DIBAN DAN DI BLOKIR TANPA TOLERANSI SEDIKIT PUN
©¦
©¸©¤ *¡¸ RULES BOT¡¹*` //Ubah jadi semau mu

// Sticker WM
global.wm = '? Tohka Yatogami' //UBAH JADI NAMAMU
global.botwm = '? Tohka Yatogami' //UBAH JADI NAMAMU
global.image = 'https://telegra.ph/file/8498b727d19499438c5c1.jpg'

global.wait = '_*tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.CanvasAPI = '';

// Sticker WM

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
// var sticker_name = 'I hope you\'re fine'
//var sticker_author = 'Nurutomo'
var sticker_name = 'IyannGanz' // ganti aja
var sticker_author = '' // ganti aja
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

global.packname = sticker_name
global.author = sticker_author


global.multiplier = 250 // The higher, The harder levelup

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

// Tambahan By Me (RyuuZeyy)
gc1 = 'https://chat.whatsapp.com/BET5aPmPiMAJ1LWPPaSTx''
gc2 = ''
gc3 = ''
namaig = 'https://instagram.com/Gtau'
linkf = gc1
linkff = namaig
namabot = 'Tohka Yatogami'
namagithub = 'https://github.com/IyannGanz'
gcid = '972502255007-1406453544'
footer = 'Tohka Yatogami'
lolkey = 'rey2k21'
global.wait = 'Tunggu Sebentar'
bc = 'Tohka Yatogami'
titler = 'TOHKA YATOGAMI BOT'
body = run
kasihcaption = `¤¢${namaig}\n\n¤¢${namagithub}`
gambar1 = tum1
gambar2 = tum2
