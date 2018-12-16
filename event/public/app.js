//使用express构建web服务器
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const session = require('express-session');

var app = express();
const path = require('path') 

app.use(express.static(path.join(__dirname, 'public')))


var server = app.listen(8080);
//使用body-parser中间件
//app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下

app.use(express.static('public'));

app.use(cors({
  origin: "*"
}))
app.use(session({
  secret: '128为随机字符',
  resave: false,
  saveUninitialized:true
}))

