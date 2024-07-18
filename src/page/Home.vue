<script>

export default {
    name:'Home',
    components: {
        YouTubePlayer,
        Carosello1,
        Portfolio
    }
};

import YouTubePlayer from '../components/YouTubePlayer.vue';

import Carosello1 from '../components/Carosello1.vue';

import Portfolio from '../components/Portfolio.vue';

</script>

<template>
<section id="carosello1">
   <Carosello1/>
</section>


<section id="lifestyle3"></section>
<!-- cri seccion -->
<div class="angleBox">
    <div class="angle">&#8249;</div>
    <div class="angle">&#8250;</div>
</div>
<section id="featured" class="d-flex justify-content-center gap-3">
    <!-- card 1 -->
    <div class="card">
        <img src="../../public/imgs/assets/best-places.webp" class="card-img-top" alt="...">
        <div class="">
            <h5 class="">Places for a Road Trip</h5>
            <p class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit.!</p>
            <a href="#" class="">Read More</a>
        </div>
    </div>
    <!-- card 2 -->
    <div class="card">
        <img src="../../public/imgs/assets/music-love.webp" class="card-img-top" alt="...">
        <div class="">
            <h5 class="">Places for a Road Trip</h5>
            <p class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit.!</p>
            <a href="#" class="">Read More</a>
        </div>
    </div>
    <!-- card 3 -->
   <div class="card">
        <img src="../../public/imgs/assets/anime-fashion.webp" class="card-img-top" alt="...">
        <div class="">
            <h5 class="">Places for a Road Trip</h5>
            <p class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit.!</p>
            <a href="#" class="">Read More</a>
        </div>
    </div>
    <!-- card 4 -->
    <div class="card">
        <img src="../../public/imgs/assets/winter.webp" class="card-img-top" alt="...">
        <div class="">
            <h5 class="">Places for a Road Trip</h5>
            <p class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit.!</p>
            <a href="#" class="">Read More</a>
        </div>
    </div>
</section>
<!-- finish cri seccion -->

    <Portfolio/>
    <YouTubePlayer />
</template>

<style lang="scss" scoped>
@use '../style/generals.scss' as *;
@use 'src/style/partials/_variables.scss' as *;
@use 'src/style/partials/_mixins.scss' as *;
#carosello1{

}

#lifestyle3{

}

//cri section
//featured4
.angleBox {
    display: flex;
    justify-content: flex-end;
}

.angle {
    font-size: 25px;
    background-color: #2d2b2b;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    text-align: center;
    font-weight: bolder;
    color: white;
}
    

//finish cri section

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
