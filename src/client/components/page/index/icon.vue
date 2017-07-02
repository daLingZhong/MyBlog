<template>
	<div class="icon">
		<el-row>
			<el-col :span="24" >
				<div class="wrapper">
					<div class="sml_wrapper"></div>
					<div class="smr_wrapper"></div>
					<div class="icon_container"></div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<style>
	.icon .wrapper{
		margin-top: 130px;
		text-align: center;
		overflow: hidden;
		height: 800px;
	}
	.sml_wrapper{
		background-color: #b9b612;
		height: 1300px;
		width: 50%;
		transform: rotate(-20deg);
		position:relative;
		left:-5%; 
		top:-20%;
		z-index: 10;
	}
	.smr_wrapper{
		background-color: #177cb0;
		height: 1500px;
		width: 55%;
		transform: rotate(-20deg);
		position:relative;
		right:-50%; 
		top:-200%;
		z-index: 10;
	}
    .icon_container{
    float: left;
    display: inline-block;
    position: absolute;
    top: 270px;
    font-size: 60px;
    margin-left: -300px;
    margin-top: 200px;
	}
	@keyframes blink-caret { 50% { background-color: transparent; } }
	.icon_container span{
	    animation:blink-caret 1s step-end infinite;
	    width: 3px;
	    height: 65px;
	    background-color: #000;
	    float: left;
	    position: absolute;
	    right: -10px;
	}
</style>

<script>
import $ from 'expose?$!jquery'
import 'jquery.easing' //插件可用   
	export default{
       data(){
       	   return{
       	   		scroll: '',
       	   		move:false
       	   }
       },
   		mounted(){
			this.start(),
			window.addEventListener('scroll', this.menu);
		},
       methods: {
       	start(){
       		var s = 'Welcome to MyBlog';
		    var con = $('.icon_container');
		    var index = 0;
		    var length = s.length;
		    var tId = null;
	        con.text('');
	        con.append('<span></span>');
	        tId=setInterval(function(){
	            con.append(s.charAt(index));
	            if(index++ === length){
	                clearInterval(tId);
	                index = 0;
	            }
	        },500);
       	},
		menu() {
		    this.scroll = document.body.scrollTop;
		    var top = this.scroll
		    if(top>500){
		    	$('.sml_wrapper').animate({left:"-20%"},2000,'easeOutBack');
		    	$('.smr_wrapper').animate({right:"-75%"},2000,'easeOutCubic');
		    }
		   }
		}
	};



	    
</script>