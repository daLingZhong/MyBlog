import ModelUser from '../model/user'
import ModelBlog from '../model/blog'
import PluginUser from '../plugin/user'
import PluginBlog from '../plugin/blog'

//express路由配置文件
module.exports = function(app){

//获取session的中间件，若是session存在，就直接赋值在本地的变量上	
	app.use(function(req,res,next){
		var user = req.session.user;
		if (user) {
			app.locals.user = user; //相当于全局变量
		}else{
			app.locals.user = user;
		}
		next();
	})


	//登录
	app.get('/login',PluginUser.loginNo.get);
	app.post('/login',PluginUser.login.post);

	//注册
	app.get('/reg',PluginUser.loginNo.get);
	app.post('/reg',PluginUser.reg.post);
	
	//管理员权限
	app.get('/admin',PluginUser.admin.get)

	//发布博客
	// app.get('/add',PluginBlog.add.get);
	app.post('/add', PluginBlog.add.post);
	
	//微博内容
	app.get('/view/:_id', PluginBlog.view.get);	

	//微博列表
	app.get('/all',PluginBlog.list.get)
	app.get('/life',PluginBlog.life.get)

	//编辑博客
	app.get('/editor/:id',PluginBlog.editor.get)
	app.post('/editor/:id',PluginBlog.editor.post)

	//删除博客
	app.get('/del/:id',PluginBlog.removeArt.get)

	//登出
	app.post('/logout',PluginUser.logout.post);
}	