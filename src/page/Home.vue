<script>

export default {
    name:'Home',
    components: {
        YouTubePlayer,
        Carosello1,
        Portfolio,
        lifestyle3,
        Cards,
        LifestyleStories
    }
};

import YouTubePlayer from '../components/YouTubePlayer.vue';

import Carosello1 from '../components/Carosello1.vue';

import Portfolio from '../components/Portfolio.vue';

import lifestyle3 from '../components/lifestyle3.vue';

import Cards from '../components/Cards.vue';

import LifestyleStories from '../components/LifestyleStories.vue';

</script>

<template>
<section id="carosello1">
   <Carosello1/>
</section>
    <Portfolio/>

    <LifestyleStories/>
<section id="lifestyle3">
    <lifestyle3/>
</section>
    <YouTubePlayer />
</template>

<style lang="scss" scoped>
@use '../style/generals.scss' as *;
@use 'src/style/partials/_variables.scss' as *;
@use 'src/style/partials/_mixins.scss' as *;
#carosello1{
    width: 100%;
}
</style>
