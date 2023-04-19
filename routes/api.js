
//=====*#* By : Diego Bryan *#*=====//

bryan = process.cwd()
var fs = require('fs')
require ('../settings.js')
var express = require('express')
var axios = require('axios')
var fetch = require('node-fetch')

var router  = express.Router()
var { color, bgcolor } = require('../lib/color.js')

const { fetchJson } = require(bryan + '/lib/fetcher.js')
const { getBuffer } = require(bryan + '/lib/getbuffer.js')

const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4 } = require(bryan + '/lib/youtube.js');

loghandler = {

noapikey:{
status: 403,
message: 'Digite o parâmetro apikey',
maintanied_by: `${OwnerName}`
},

apikey: {
status: 403,
message: 'apikey inválida, entre em contato com o desenvolvedor para obter sua apikey',
maintanied_by: `${OwnerName}`
},

noturl: {
status: 403,
message: 'URL inválida, insira os parâmetros de URL',
maintanied_by: `${OwnerName}`,
},

notText: {
status: 403,
message: 'Texto inválido, insira os parâmetros de TEXTO',
maintanied_by: `${OwnerName}`,
}

}

//=====# ApiKey Invalida #=====//
var apikey_invalida = bryan + '/views/apikey_invalida.html'

try {

//=====# Downloaders #=====//
router.get('/downloader/play', async(req, res, next) => {
var apikey = req.query.apikey;
var musica = req.query.musica
if(!apikey) return res.sendFile(apikey_invalida)
if (!musica) return res.json({ status : false, OwnerName : `${OwnerName}`, message : "Insira os parâmetros de musica"})
if(ApiKey.includes(apikey)){
ytPlayMp3(musica).then((akk) => {
res.json({
	status: true,
	código: 200,
	criador: `${OwnerName}`,
		resultado: akk
})
})
} else {
  res.sendFile(apikey_invalida)
}
})

router.get('/downloader/playv', async(req, res, next) => {
var apikey = req.query.apikey;
var video = req.query.video
if(!apikey) return res.sendFile(apikey_invalida)
if (!video) return res.json({ status : false, OwnerName : `${OwnerName}`, message : "insira os parâmetros de nome"})
if(ApiKey.includes(apikey)){
ytPlayMp4(video).then((akk) => {
res.json({
	status: true,
	código: 200,
	criador: `${OwnerName}`,
		resultado: akk
})
})
} else {
  res.sendFile(apikey_invalida)
}
})

router.get('/downloader/ytmp3', async(req, res, next) => {
var apikey = req.query.apikey;
var link = req.query.link
if(!apikey) return res.sendFile(apikey_invalida)
if (!link) return res.json({ status : false, OwnerName : `${OwnerName}`, message : "insira os parâmetros de url"})
if(ApiKey.includes(apikey)){
ytDonlodMp3(link).then((akk) => {
res.json({
	status: true,
	código: 200,
	criador: `${OwnerName}`,
		resultado: akk
})
})
} else {
  res.sendFile(apikey_invalida)
}
})

router.get('/downloader/ytmp4', async(req, res, next) => {
var apikey = req.query.apikey;
var link = req.query.link
if(!apikey) return res.sendFile(apikey_invalida)
if (!link) return res.json({ status : false, OwnerName : `${OwnerName}`, message : "insira os parâmetros de url"})
if(ApiKey.includes(apikey)){
ytDonlodMp4(link).then((akk) => {
res.json({
	status: true,
	código: 200,
	criador: `${OwnerName}`,
		resultado: akk
})
})
} else {
  res.sendFile(apikey_invalida)
}
})

router.get('/downloader/mediafire', async (req, res, next) => {
var apikey = req.query.apikey
var link = req.query.link
if(!apikey) return res.sendFile(apikey_invalida)
if (!link) return res.json({ status : false, criador : `${OwnerName}`, message : "Insira o parâmetro link"})
if(ApiKey.includes(apikey)){
let mediaf = await fetchJson(`https://bryan-api.diego-bryanbrya.repl.co/api/downloader/mediafire?url=${link}&apikey=${ApiKeyBryan}`)
res.json({
	status: 200,
	criador: `${OwnerName}`,
	    resultado: mediaf.resultado
})
} else {
  res.sendFile(apikey_invalida)
}
})

router.get('/downloader/facebook', async (req, res, next) => {
var apikey = req.query.apikey
var link = req.query.link
if(!apikey) return res.sendFile(apikey_invalida)
if (!link) return res.json({ status : false, criador : `${OwnerName}`, message : "Insira o parâmetro link"})
if(ApiKey.includes(apikey)){
let faceb = await fetchJson(`https://bryan-api.diego-bryanbrya.repl.co/api/downloader/fbdown?url=${link}&apikey=${ApiKeyBryan}`)
res.json({
	status: 200,
	criador: `${OwnerName}`,
	    resultado: faceb.resultado
})
} else {
  res.sendFile(apikey_invalida)
}
})

router.get('/downloader/tiktok', async (req, res, next) => {
var apikey = req.query.apikey
var link = req.query.link
if(!apikey) return res.sendFile(apikey_invalida)
if (!link) return res.json({ status : false, criador : `${OwnerName}`, message : "Insira o parâmetro link"})
if(ApiKey.includes(apikey)){
let tiktk = await fetchJson(`https://bryan-api.diego-bryanbrya.repl.co/api/downloader/tikok?url=${link}&apikey=${ApiKeyBryan}`)
res.json({
	status: 200,
	criador: `${OwnerName}`,
	    resultado: tiktk.resultado
})
} else {
  res.sendFile(apikey_invalida)
}
})







} catch (err) {
console.error(chalk.redBright(`\n${err}\n`))
}

module.exports = router