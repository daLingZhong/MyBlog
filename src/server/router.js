import express from 'express'

const router = express.Router()
// var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '破罐子破摔blog' })
});


export default router
