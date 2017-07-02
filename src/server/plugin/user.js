import ModelUser from '../model/user'

//登录
module.exports.login = {
	post:function(req,res,next){
		var postLogData = {
			name:req.body.name,
			pwd:req.body.pwd
		};
		var loginJson = {
			status:'',
			msg:''
		}
		ModelUser.findOne(postLogData,function(err,data){ 	//用findOne函数查找用户信息
			if (err) {
				console.log(err)
			}
			if(data){
				if (data.pwd == req.body.pwd) { 	//若是查找到了相同的用户名，则将查找到的data中的pwd和页面上获取到的pwd进行比对
					req.session.user = data;			//成功则赋值到session
					// res.redirect('/user/'+data._id);	
					//成功
					loginJson.status = '1';
					res.send(loginJson)
				}else{
					loginJson.msg = '用户名或密码错误';
					loginJson.status = '2';
					res.send(loginJson)
				}
			}else{
				loginJson.msg = '用户名或密码错误'; //没跳入状态码2，此项待定
				loginJson.status = '3';
				// console.log(loginJson.status)
				res.send(loginJson)
			}
		})
	}
};

//注册
module.exports.reg = {
	post:function(req,res,next){
		// res.send('注册成功')
		var postRegData = {
			name:req.body.name,
			pwd:req.body.pwd
		};
		var regJson = {
			status:'',
			msg:''
		}
		ModelUser.findOne({
			name:req.body.name
		},function(err,data){
			if (err) {
				console.log(err)
			}
			if (data) {
				regJson.msg = '此用户已被注册';
				regJson.status = '1';
				res.send(regJson)
			}else{
				ModelUser.create(postRegData,function(err,data){	//create函数为添加信息
					if (err) {
						console.log(err);
					};						
					req.session.user = data; 	//把用户信息存放在session中，data中即为注册成功的用户信息
					regJson.status = '0';
					res.send(regJson)
				});
			}
		})
	}
};

//登录后才能访问的页面
// module.exports.loginYes = function (req, res, next){
// 	var user = req.session.user;
	
// 	if(!user){
// 		// res.redirect('/'); 
// 		console.log('1')
// 	}else{
// 		next();
// 	}
// }

//登录后不能访问的页面
module.exports.loginNo = {
	get:function (req, res, next){
		var user = req.session.user;
		var check = true
		if(user){
			res.send(check)
		}
	}
}

//管理员权限
module.exports.admin = {
	get:function(req,res,next){
		var user = req.session.user
		var admin = true
		if(user.name == '钟大灵'){
			res.send(admin)
		}else{
			admin = false
			res.send(admin)
		}
	}
}

//登出
module.exports.logout = {
	post:function(req,res,next){
		delete req.session.user;	//删除存放在session中的用户信息，达到退出效果并且重定向
		res.send('ok')
	}
};

