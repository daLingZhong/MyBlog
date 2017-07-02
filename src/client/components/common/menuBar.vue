<template>
	<div id="menuBar">
		<!-- <p>LoVueAn</p> -->
		<el-row>
		  <el-col :span="2"><div class="grid-content dark"></div></el-col>
		  <el-col :span="4">

			  <div class="grid-content dark title" @click="backIndex">
			  		<p>破罐子破摔</p>
			  		<span>钟大灵の博客</span>
			  </div>

		  </el-col>

		  <el-col :span="8">
		  <!-- <div class="grid-content bg-purple-light"></div> -->
		  	<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo dark" mode="horizontal" @select="handleSelect" roter>
  			  <el-menu-item index="1" @click="backIndex">首页</el-menu-item>
  			  <el-submenu index="2" style="text-align:center;">
  			    <template slot="title"><i class="el-icon-star-on"></i>技术专题</template>
            <el-menu-item index="all">全部</el-menu-item>
  			    <el-menu-item index="2-2">前端</el-menu-item>
  			    <el-menu-item index="2-3">后端</el-menu-item>
  			    <el-menu-item index="2-4">其他</el-menu-item>
  			  </el-submenu>
  			  <el-menu-item index="3"><i class="el-icon-edit"></i>随笔</el-menu-item>
  			  <el-menu-item index="aboutme"><i class="el-icon-information"></i>关于我</a></el-menu-item>
			  </el-menu>
		  </el-col>

		  <el-col :span="4"><div class="grid-content dark"></div></el-col>

		  <el-col :span="4">
		  	<div class="grid-content dark">
		  		<div class="user-info">
		            <el-dropdown trigger="click" @command="handleCommand">
		                <span class="el-dropdown-link">
		                    <img class="user-logo" src="../../static/img/head1.jpg">
		                    {{username}}
		                </span>
		                <el-dropdown-menu slot="dropdown">
		                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
		                </el-dropdown-menu>
		            </el-dropdown>
        		</div>
		  	</div>
		  </el-col>

		  <el-col :span="2">
        <div class="grid-content dark" style="line-height:60px;">
         <el-button class='add' @click="toAdd">发布</el-button>
         <!-- <i class="el-icon-setting" style="color:#D3DCE6;font-size:20px;margin-left:25px;position:absolute;top: 20px;cursor:pointer"></i> -->
        </div>
      </el-col>

		</el-row>

	</div>
</template>
<style>
	*{
		margin:0;
		padding:0;
	}
	a{
		text-decoration: none;
	}
	.title{
		position: relative;
		cursor: pointer;
	}
		.title p{
			color:#fff;
			line-height: 50px;
			text-align: center;
			font-size: 25px;
			margin-left: -30px;
			/*float: left;	*/
		}
		.title span{
			position: absolute;
			top: 37px;
			color:#fff;
			font-size: 13px;
			left:105px; 
		}
   .el-menu{
   	border-radius: 0;
   }
  .el-row {
	margin-bottom: 20px;
	&:last-child {
	  margin-bottom: 0; 
     }
  }
  .dark{
  	background-color: #424b50;
  }
  .grid-content {
    min-height: 60px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }



    .user-info {
        float: left;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
        line-height:60px;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 60px;
        line-height: 60px;
        margin-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:10px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .add{
    	background-color: transparent;
    	color: #fff;
    }
    .add:hover{
    	background-color: #fff;
    	color: #000;
      border-color: #fff;
    }
    .add:visited{
      background-color: transparent;
      color: #fff;
      border-color:#fff;
    }
</style>
<script>
    export default {
 	data() {
      return {
      	name: '吃瓜群众',
        activeIndex: '1',
        router:true
      };
    },
    computed:{
      username(){
        let username = localStorage.getItem('ms_username');
        return username ? username : this.name;
    	},
      onRoutes(){
          return this.$route.path.replace('/','');
          console.log('click')
      }
	},
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.$router.push('/'+key)
      },
      handleCommand(command) {
      	let username = localStorage.getItem('ms_username');
            if(command == 'loginout'){
                localStorage.removeItem('ms_username')
                this.$http.post('/logout',username).then((param)=>{
                	 this.$router.push({path: '/login', replace: true});
                },response=>{
                	alert('error')
                })
            }
        },
      toAdd(){
        this.$http.get('/admin').then((param)=>{
          if(param.data == true){
            this.$router.push('/add')
            // this.activeIndex = 0

          }else{
            this.$message.error('你不是钟大灵sama  （╯＾╰）');
          }
        })
      },
      backIndex(){
        this.$router.push('/index')
      }
    }
    }
</script>