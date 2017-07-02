# MyBlog
vue2 + webpack + node.js + elementUI 个人博客 http://www.zhongdaling.me

## Keywords

- Vue
- Express
- Nodemon
- Webpack
- Npm
- ElementUI


## Structure
```
.
├── LICENSE
├── README.md
├── .babelrc
├── index.js
├── nodemon.json
├── package.json
├── src
│   ├── client
│   │   ├── App.vue
│   │   ├── components
│   │   │   └── Hello.vue
│   │   └── index.js
│   └── server
│       ├── index.js
│       ├── public
│       │   └── favicon.ico
│       ├── router.js
│       └── views
│           ├── error.jade
│           └── index.jade
└── webpack.config.js
```


## Usage
## need install and open mongodb first
1. Install dependencies

   `npm install`

2. Run the application

   `npm run dev`

## References

Some ideas are stolen from them, really appreciated.

- [Eslint guide](http://eslint.org/docs/user-guide/getting-started)
- [Express generator](http://expressjs.com/en/starter/generator.html)
- [Vue template](https://github.com/vuejs-templates/webpack)
- [Nodemon doc](https://github.com/remy/nodemon#nodemon)
- [Babel register](http://www.ruanyifeng.com/blog/2016/01/babel.html)
- [webpack-dev-middleware-boilerplate](https://github.com/madole/webpack-dev-middleware-boilerplate/tree/master/src)
