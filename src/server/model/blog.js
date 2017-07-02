var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var blogSchema = Schema({
	author: {
		type: ObjectId,
		ref: 'user'
	},
    title: String, //标题
	type:String,
	content: String, //内容
	time:String
});

module.exports = mongoose.model('blog', blogSchema);