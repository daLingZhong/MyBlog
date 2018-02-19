import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
//数据库配置文件
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
import ejs from 'ejs'
import router from './router'
import config from '../../webpack.config'
import routes from './config/routes'
import cors from 'cors'


const app = express()

//连接数据库
mongoose.connect('mongodb://47.94.83.141/myblog');
//配置session，加载中间件
app.use(session({
  secret: "45454",
  resave: false, // 是否每次都重新保存会话，建议false
  saveUninitialized: false, // 是否自动保存未初始化的会话，建议false
  store: new MongoStore({
    cookieSecret: 'jdghjf',
    url: 'mongodb://47.94.83.141/myblog' //最新写法,
  })
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade')
app.engine('html', ejs.__express); //使用ejs模板引擎，并且将html尾缀替换成html
app.set('view engine', 'html');
if (process.env.NODE_ENV == 'development') {
  app.use(cors());
}

app.use(express.static(path.join(__dirname, 'public')))

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
//路由中间件

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))



const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use('/', router)
routes(app) //使用路由文件中的app参数
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
// will print stacktrace
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: err
  })
})

app.listen(80) //设置监听端口

export default app