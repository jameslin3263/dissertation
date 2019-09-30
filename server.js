var express = require('express')
var http = require('http')
var path = require('path')
var reload = require('reload')
var bodyParser = require('body-parser')
var logger = require('morgan')
var cors = require('cors');

var app = express()

app.use(cors());
app.options('*', cors());

var publicDir = path.join(__dirname, 'src')

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'html')
app.set('src','./src')
app.use(logger('dev'))
app.use(bodyParser.json()) 
app.use(express.static('src'))
app.get('/',(req, res) => { res.sendFile(path.join(publicDir, 'index.html'))})

var server = http.createServer(app)
// Reload code here
server.listen(3000, function () {
  console.log('Web server listening on port ' + app.get('port'))
})
reload(app);
