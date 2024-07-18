<script>

export default {
    name:'Home',
    components: {
        YouTubePlayer,
        Carosello1,
        Portfolio,
        lifestyle3,
    }
};

import YouTubePlayer from '../components/YouTubePlayer.vue';

import Carosello1 from '../components/Carosello1.vue';

import Portfolio from '../components/Portfolio.vue';

import lifestyle3 from '../components/lifestyle3.vue';

</script>

<template>
<section id="carosello1">
   <Carosello1/>
</section>
    <Portfolio/>
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

#yt-player{
    .player-card{
        height: 100px;
        background-color: $tertiary-color;
        border-bottom: 1px solid $quaternary-color;

        .vd-number{
            background-color: $quaternary-color;
            color: white;
            border-radius: 5px;
            height: 30px;
            width: 30px;
        }

        .vd-thumb{
            img{
                width: 80%;
                border-radius: 15px;
                margin: 0 10px;
            }
        }

        .vd-title{
            span{
                color: $primary-color;
            }
        }
    }
    #player-header{
        height: 90px;
        background-color: $quaternary-color;
        color: white;

        i{
            font-size: 40px;
        }
        span{
            font-size: 13px;
        }
    }

    #video-list{
        height: 550px;
    }
}
</style>
