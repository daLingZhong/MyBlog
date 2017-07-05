<template>
	<div class="coverbox">
		<div class="mmenuBar">
		 	<mt-header title="破罐子破摔" class="m_menu">
		      <mt-button slot="left" icon="back" @click="back">主页</mt-button>
		      <mt-button icon="more" slot="right"  @click="show"></mt-button>
		    </mt-header>
		</div>	
		<div class="cover"  @click="hide"></div>
	    <div class="left_menu">
	      <div class="left_title">
	        <p>破罐子破摔</p>
	        <span>钟大灵の博客</span>
	      </div>
	      <b>{{username}}</b>
	      <div class="left_line"></div>
	      <mt-cell title="首页" to="/index" is-link class="left_content"></mt-cell>
	      <mt-cell title="文章" label="查看所有" to="/all" is-link class="left_content"></mt-cell>
	      <mt-cell title="随笔" label="个人游记" to="/life" is-link class="left_content"></mt-cell>
	      <mt-cell title="关于我" label="钟大灵" to="/aboutme" is-link class="left_content"></mt-cell>
	      <div class="beian">
	        辽ICP备17010522号
	      </div>
	    </div>	
	</div>
</template>

<style type="text/css">
	.m_menu{
	  background-color: #424b50;
	}
	.cover{
	  height: 100%;
	  width: 100%;
	  background-color: gray;
	  opacity: .4;
	  filter: alpha(opacity=40); 
	  /*低版本IE，包括_position*/
	  top: 0;
	  position:fixed;
	  _position: absolute;
	  bottom: 0;
	  z-index: 10;
 	  display: none;
	}
	.left_title{
	  height: 80px;
	  width: 100%;
	  background-color: #424b50;
	  color: #fff;
	}
	.left_title p{
	  font-size: 20px;
	  text-align: center;
	  padding-top:20px;
	  margin-left: -20px;
	  /*line-height: 100px*/
	}
	.left_title span{
	  font-size: 13px;
	  /*margin-top: 20px;*/
	  margin-left: 40px;
	  text-align: center;
	  display: block;
	}
	.left_menu{
	  position: fixed;
	  width: 70%;
	  opacity: .95;
	  height: 100%;
	  background-color: #fff;
	  z-index: 11;
	  top: 0;
	  box-shadow:0 2px 10px #000000;
	  left: -71%;
	  /*display: none;*/
	}
	.left_menu b{
	  margin-top: 30px;
	  margin-left:10px;
	  margin-bottom:20px;
	  font-size: 20px;
	  display: block;
	}
	.left_line{
	  width: 60%;
	  height: 5px;
	  margin-left: 10px;
	  margin-bottom:40px;
	  background-color: #424b50;
	}
	.left_content{
	  margin-bottom: 10px;
	}
	.beian{
	  position: absolute;
	  /*text-align: center;*/
	  bottom: 20px;
	  left: 50%;
	  margin-left: -62px;
	  font-size: 13px;
	  color: #cccccc;
	}
</style>

<script type="text/javascript">
import $ from 'expose?$!jquery'
	export default{
 	data() {
      return {
      	name: '吃瓜群众'
      };
    },
    computed:{
      username(){
        let username = localStorage.getItem('ms_username');
        return username ? username : this.name;
    	}
	},
	methods:{
	    hide(){
	      $('.left_menu').animate({left:"-71%"},300,function(){
	        $('.cover').fadeOut(200)
	      })
	    },
	    show(){
	      $('.left_menu').animate({left:"0"},300,function(){
	        $('.cover').fadeIn(200)
	      })
	    },
	    back(){
	    	this.$router.push({path: '/index'});
	    }
	}
	}
</script>