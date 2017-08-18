<template>
	<div class="carouse">
        <el-carousel :interval="4000" type="card" height="400px" trigger="click" id="box">
          <el-carousel-item v-for="item in imgData" :key="1" id="for">
            <img :src="item.url">
          </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style scope>
	#box{
		margin-top: 120px;
	}
    .el-carousel__item {
    	text-align: center;
  	}
	  .el-carousel__item img {
	    margin-left: auto;
	    height: 400px;
	  }
</style>

<script>
	export default{
		data(){
			return{
				imgData:[
					{url: require('../../../static/img/bg1.jpg') },
					{url: require('../../../static/img/bg2.jpg') },
					{url: require('../../../static/img/bg3.jpg') },
					{url: require('../../../static/img/bg4.jpg') },
					{url: require('../../../static/img/bg5.jpg') },
				]
			}
		}
	}
</script>