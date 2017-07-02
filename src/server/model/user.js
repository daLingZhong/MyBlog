var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name:{
		type:String,
		unique:true //用户名查重
	},
	pwd:String
});

module.exports = mongoose.model('user', userSchema);