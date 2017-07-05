import ModelBlog from '../model/blog'

//添加微博
module.exports.add = {
	post:function (req,res,next){
		var addData = {
			author: req.session.user._id,
			title: req.body.title,
			type:req.body.type,
			content: req.body.content,
			time:req.body.time
		};
		ModelBlog.create(addData, function (err, data){
			if(err)console.log(err);
			res.send(data._id); //传递文章所生产的id给前台负责跳转
		});
	}	
};

//微博内容
module.exports.view = {
	get: function (req, res, next){
		var getData = {
			_id: req.param('_id')  
		};
		ModelBlog.findOne(getData, function (err, data){
			// console.log(getData)
			if(err) console.log(err);
			if(data){
				res.send(data)
				// console.log(data)
			}else{
				res.send('此微博，不存在！');
			}		
		});
	}
};

//微博列表
module.exports.list = {
	get:function(req,res,next){
		ModelBlog.find({},null,{
			sort:{
				_id:-1
			}
		}).populate('author').exec(function(err,data){
			if (err) {
				console.log(err)
			}
			// console.log(data)
			res.send(data)
		});
		// console.log('111')
	}
};

module.exports.life = {
	get:function(req,res,next){
		ModelBlog.find({
			type:'随笔'
		},null,{
			sort:{
				_id:-1
			}
		}).populate('author').exec(function(err,data){
			if (err) {
				console.log(err)
			}
			// console.log(data)
			res.send(data)
		});
		// console.log('111')
	}
};

module.exports.editor = {
	get: function (req, res, next){
		var str = req.url 
		var arr = str.toString().split("/")
		// console.log(arr)
		var id = arr[2]
		var editor = true
		var user = req.session.user;
		if(user.name == '钟大灵'){
			ModelBlog.findOne({
				_id: id
			}, null, function (err, data){
				if(err){console.log(err)}
				if (data) {
					res.send(data)
				}
			});
			
		}else{
			editor = false
			res.send(editor)
		}
	},
	post:function(req,res,next){
		// console.log(req.body)
		var str = req.url 
		var arr = str.toString().split("/")
		var id = arr[2]
		var change = true
		ModelBlog.update({
			_id:id
		},{
			$set:{
				title: req.body.title,
				content: req.body.content,
				time:req.body.time
			}
		},function(err){
			if(err){
				console.log(err)
				change = false
			}else{
				change = true
			}
			res.send(change)
		})
	}
};

module.exports.removeArt = {
	get:function(req,res,next){
		var delstr = req.url 
		var delarr = delstr.toString().split("/")
		var delid = delarr[2]
		var del = false
		var user = req.session.user;
		if(user.name == '钟大灵'){
			ModelBlog.remove({
				_id:delid
			},function(err){
				if(err){
					console.log(err)
				}else{
					del = true
					console.log('删了')
				}
				res.send(del)
			})
		}else{
			del = false
			res.send(del)
		}
	}
}