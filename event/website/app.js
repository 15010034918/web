//使用express构建web服务器
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const session = require('express-session');
/*引入路由模块*/
const userLogin=require("./routes/user_login");
const userReg=require("./routes/user_reg");
const noun = require('./routes/noun');
const news=require('./routes/news')
const details=require('./routes/text_details')
var app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))


var server = app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下

//app.use(express.static('public'));

app.use(cors({
  origin: "*"
}))
app.use(session({
  secret: '128为随机字符',
  resave: false,
  saveUninitialized:true
}))
/*使用路由器来管理路由*/
app.use("/user", userLogin);
app.use("/user", userReg);
app.use('/user', noun)
app.use('/user',news)
app.use('/user',details)

