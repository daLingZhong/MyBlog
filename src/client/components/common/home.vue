<template>
    <div class="home">
        <menu-bar v-if="menubar"></menu-bar>
        <mmenu-bar v-if="mmenubar"></mmenu-bar>
        <transition name="fade" mode="out-in"><router-view></router-view></transition>
        <foot></foot>
    </div>
</template>

<script>
    import menuBar from './menuBar.vue';
    import foot from './foot.vue';
    import mmenuBar from './mmenuBar.vue';
    export default {
        data(){
            return{
                screenWidth: document.body.clientWidth,
                menubar:true,
                mmenubar:false
            }
        },
        components:{
            menuBar, foot , mmenuBar
        },
        mounted(){
            this.menuBar(),
            window.addEventListener('resize', this.width);
        },
        methods:{
            menuBar(){
                this.screenWidth = document.body.clientWidth
                var width = this.screenWidth
                // console.log(width)
                if (width<1366) {
                    this.menubar = false;
                    this.mmenubar = true;
                }else{
                    this.menubar = true;
                    this.mmenubar = false;
                }
            },
            width(){
                this.screenWidth = document.body.clientWidth
                var width = this.screenWidth
                // console.log(width)
                if (width<1366) {
                    this.menubar = false;
                    this.mmenubar = true;
                }else{
                    this.menubar = true;
                    this.mmenubar = false;
                }
            }
        }
    }
</script>

<style type="text/css">
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
      opacity: 0
    }
</style>
