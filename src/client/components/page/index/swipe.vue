<template>
	<div class="swipe">
	    <mt-swipe :auto="3000" class="swipebox">
	      <mt-swipe-item v-for="item in imgData" :key="item" class="swipeitem">
	        <img :src="item.url">
	      </mt-swipe-item>
	    </mt-swipe>
	</div>
</template>

<script>

export default {
  data () {
    return {
      imgData:[
        {url: require('../../../static/img/bg1.jpg') },
        {url: require('../../../static/img/bg2.jpg') },
        {url: require('../../../static/img/bg3.jpg') },
        {url: require('../../../static/img/bg4.jpg') },
        {url: require('../../../static/img/bg5.jpg') },
      ] 
    }
  },
  methods:{
    // hide(){
    //   $('.left_menu').animate({left:"-71%"},300,function(){
    //     $('.cover').fadeOut(200)
    //   })
    // },
    // show(){
    //   $('.left_menu').animate({left:"0"},300,function(){
    //     $('.cover').fadeIn(200)
    //   })
    // }
  }
}
</script>

<style type="text/css">
	.swipebox{
	  height: 260px;
	  text-align: center;
	  background-color: #f3f8f1;
	}
	.swipeitem img{
	  height: 260px;
	}
</style>