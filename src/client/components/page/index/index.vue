<template>
    <div class="index">
        <carousel-figure></carousel-figure>
        <icon></icon>
        <next></next>
    </div>
</template>

<style>

</style>

<script>
    import carouselFigure from './carouselFigure.vue';
    import icon from './icon.vue';
    import next from './next.vue';
    export default {
        components:{
            carouselFigure,
            icon,
            next
        }
    };
</script>

<style type="text/css">
    canvas{
        display: none;
    }
</style>