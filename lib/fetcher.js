/*
By : Diego Bryan - https://wa.me/5527999307906
*/

const fetch = require('node-fetch')
const fs = require('fs')

exports.getBuffer = getBuffer = async (url) => {
	const res = await fetch(url, {headers: { 'User-Agent': 'okhttp/4.5.0'}, method: 'GET' })
	const anu = fs.readFileSync('./src/emror.jpg')
	if (!res.ok) return { type: 'image/jpeg', result: anu }
	const buff = await res.buffer()
	if (buff)
		return { type: res.headers.get('content-type'), result: buff }
}

exports.fetchJson = fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


exports.fetchText = fetchText = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.text())
        .then(text => {
            // console.log(text)
            resolve(text)
        })
        .catch((err) => {
            reject(err)
        })
})