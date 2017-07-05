<template>
    <div class="index">  
        <carousel-figure v-if="figure"></carousel-figure>
        <swipe v-if="swipe"></swipe>
        <icon v-if="welcome"></icon>
        <next></next>
    </div>
</template>

<style>

</style>

<script>
    import carouselFigure from './carouselFigure.vue';
    import swipe from './swipe.vue';
    import icon from './icon.vue';
    import next from './next.vue';
    export default {
        data(){
            return{
                screenWidth: document.body.clientWidth,
                welcome:true,
                swipe:false,
                figure:true
            }
        },
        mounted(){
            this.start(),
            window.addEventListener('resize', this.width);
        },
        components:{
            carouselFigure,
            icon,
            next,
            swipe
        },
        methods:{
            start(){
                this.screenWidth = document.body.clientWidth
                var width = this.screenWidth
                if (width<1366) {
                    this.welcome = false;
                    this.swipe = true;
                    this.figure = false;
                }else{
                    this.welcome = true;
                    this.swipe = false;
                    this.figure = true;
                }
            },
            width(){
                this.screenWidth = document.body.clientWidth
                var width = this.screenWidth
                if (width<1366) {
                    this.welcome = false;
                    this.swipe = true;
                    this.figure = false;
                }else{
                    this.welcome = true;
                    this.swipe = false;
                    this.figure = true;
                }
            }
        }
    };
</script>

<style type="text/css">
    .index{
        overflow: hidden;
    }
    canvas{
        display: none;
    }
</style>