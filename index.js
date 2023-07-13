/*
By : Diego Bryan - https://wa.me/5527999307906
*/
var http = require("http");
var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');

const PORT = 22 || 5000 || 3000

var { color } = require('./lib/color.js')
var apirouter = require('./routes/api.js')

var app = express()
app.enable('trust proxy')
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(bryan + '/views/home.html')
})

app.get('/dashboard', (req, res) => {
    res.sendFile(bryan + '/views/dashboard.html')
})

app.get('/apikey', (req, res) => {
    res.sendFile(bryan + '/views/apikey_invalida.html')
})

app.use('/api', apirouter)

http.createServer(app).listen(PORT, () => {
    console.log(color(`\nServidor em execução http://localhost:` + PORT, 'green'))
    console.log(color(`\n\nDesenvolvido por : Diego Bryan`, 'yellow'))
})
