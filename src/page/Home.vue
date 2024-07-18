<script>
export default {
    name:'Home',
    components: {
        YouTubePlayer,
        Carosello1
    }
};

import YouTubePlayer from '../components/YouTubePlayer.vue';
import Carosello1 from '../components/Carosello1.vue'
</script>

<template>
<section id="carosello1">
   <Carosello1/>
</section>

<section id="portfolio2">

    <!-- portfolio immagini -->
    <div class="row container-box py-4">
        <div class="col-3 p-0">
            <div class="box-image-col">
                <div class="links py-3">
                    <a href="#" class="btn py-1 px-4 btn-link">
                        Fashion
                    </a>
                    <a href="#" class="btn py-1 px-4 btn-link">
                        Lifestyle
                    </a>
                </div>
                <div class="text-image py-3">
                    <span class="px-1">
                        <i class="fa-solid fa-user px-1"></i>
                        demo
                    </span>
                    <span class="px-1">
                        <i class="fa-solid fa-calendar-days"></i>
                        Dicembre 25, 2022
                    </span>
                    <h5>Fashion trend now a days</h5>
                </div>
        
                <img src="/imgs/assets/anime-fashion.webp" alt="">
    
            </div>
            <div class="box-image-col pt-2">
                <div class="links py-3">
                    <a href="#" class="btn py-1 px-4 btn-link">
                        Stories
                    </a>
                    <a href="#" class="btn py-1 px-4 btn-link">
                        Travel
                    </a>
                </div>

                <div class="text-image py-3">
                    <span class="px-1">
                        <i class="fa-solid fa-user px-1"></i>
                        demo
                    </span>
                    <span class="px-1">
                        <i class="fa-solid fa-calendar-days"></i>
                        Dicembre 25, 2022
                    </span>
                    <h5>Fashion trend now a days</h5>
                </div>

                <img src="/imgs/assets/travel-alone.webp" alt="">
            </div>
        </div>
        <div class="col">
            <div id="box-image-center">
                <div class="links py-3">
                    <a href="#" class="btn py-1 px-4 btn-link">
                        Lifestyle
                    </a>
                    <a href="#" class="btn py-1 px-4 btn-link">
                        Stories
                    </a>
                    <a href="#" class="btn py-1 px-4 btn-link">
                        Travel
                    </a>
                </div>

                <div id="text-image-center" class="py-3">
                    <span class="px-1">
                        <i class="fa-solid fa-user px-1"></i>
                        demo
                    </span>
                    <span class="px-1">
                        <i class="fa-solid fa-calendar-days"></i>
                        Dicembre 25, 2022
                    </span>
                    <h5>Fashion trend now a days</h5>
                </div>

                <img src="/imgs/assets/best-places.webp" alt="">
            </div>
        </div>
        <div class="col-3 p-0">
            <div class="box-image-col">
                <div class="links py-3">
                    <a href="#" class="btn py-1 px-4 btn-link">
                        Culture
                    </a>
                    <a href="#" class="btn py-1 px-4 btn-link">
                        Lifestyle
                    </a>
                </div>

                <div class="text-image py-3">
                    <span class="px-1">
                        <i class="fa-solid fa-user px-1"></i>
                        demo
                    </span>
                    <span class="px-1">
                        <i class="fa-solid fa-calendar-days"></i>
                        Dicembre 25, 2022
                    </span>
                    <h5>Fashion trend now a days</h5>
                </div>

                <img src="/imgs/assets/music-love.webp" alt="">
            </div>
            <div class="box-image-col pt-2">
                <div class="links py-3">
                    <a href="#" class="btn py-1 px-4 btn-link">
                        Lifestyle
                    </a>
                    <a href="#" class="btn py-1 px-4 btn-link">
                        Travel
                    </a>
                </div>

                <div class="text-image py-3">
                    <span class="px-1">
                        <i class="fa-solid fa-user px-1"></i>
                        demo
                    </span>
                    <span class="px-1">
                        <i class="fa-solid fa-calendar-days"></i>
                        Dicembre 25, 2022
                    </span>
                    <h5>Fashion trend now a days</h5>
                </div>

                <img src="/imgs/assets/visit-france.webp" alt="">
            </div>
        </div>
    </div>


</section>

<section id="lifestyle3"></section>
<!-- cri seccion -->
<!-- <section  class="mb-5 bg-white">
            <div class="d-flex justify-content-center py-5">
                <img class="rounded" src="/imgs/assets/header-banner.webp" alt="adv">
            </div>
</section> -->
<section id="featured" class="d-flex justify-content-center gap-3 flex-wrap">
    <!-- card 1 -->
    <div class="card" style="width: 25rem;">
        <img src="../../public/imgs/assets/best-places.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Places for a Road Trip</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.!</p>
            <a href="#" class="btn btn-primary">Read More</a>
        </div>
    </div>
    <!-- card 2 -->
    <div class="card" style="width: 25rem;">
        <img src="../../public/imgs/assets/music-love.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Places for a Road Trip</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.!</p>
            <a href="#" class="btn btn-primary">Read More</a>
        </div>
    </div>
    <!-- card 3 -->
    <div class="card" style="width: 25rem;">
        <img src="../../public/imgs/assets/anime-fashion.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Places for a Road Trip</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.!</p>
            <a href="#" class="btn btn-primary">Read More</a>
        </div>
    </div>
    <!-- card 4 -->
    <div class="card" style="width: 25rem;">
        <img src="../../public/imgs/assets/winter.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Places for a Road Trip</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.!</p>
            <a href="#" class="btn btn-primary">Read More</a>
        </div>
    </div>
    <!-- card 5 -->
    <div class="card" style="width: 25rem;">
        <img src="../../public/imgs/assets/photographers-mistakes.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Places for a Road Trip</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.!</p>
            <a href="#" class="btn btn-primary">Read More</a>
        </div>
    </div>
    <!-- card 6 -->
    <div class="card" style="width: 25rem;">
        <img src="../../public/imgs/assets/ideas-anime.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Places for a Road Trip</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.!</p>
            <a href="#" class="btn btn-primary">Read More</a>
        </div>
    </div>
    <!-- card 7 -->
    <div class="card" style="width: 25rem;">
        <img src="../../public/imgs/assets/visit-france.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Places for a Road Trip</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.!</p>
            <a href="#" class="btn btn-primary">Read More</a>
        </div>
    </div>
    <!-- card 8 -->
    <div class="card" style="width: 25rem;">
        <img src="../../public/imgs/assets/travel-alone.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Places for a Road Trip</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.!</p>
            <a href="#" class="btn btn-primary">Read More</a>
        </div>
    </div>
    <!-- card 9 -->
    <div class="card" style="width: 25rem;">
        <img src="../../public/imgs/assets/success-story.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Places for a Road Trip</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.!</p>
            <a href="#" class="btn btn-primary">Read More</a>
        </div>
    </div>
</section>
<!-- finish cri seccion -->

    <YouTubePlayer />
</template>

<style lang="scss" scoped>
@use '../style/generals.scss' as *;
@use 'src/style/partials/_variables.scss' as *;
@use 'src/style/partials/_mixins.scss' as *;
#carosello1{

}

#portfolio2{

    .container-box{
        width: 80%;
        margin: 0 auto;

    }

    #box-image-center{
        width: 100%;
        height: 100%;
        position: relative;

        img{
            height: 100%;
            width: 100%;
            border-radius: 5px;
            filter: brightness(0.5);
            transition: 0.4s;

            &:hover{
                opacity: 0.8;
            }
        }

    }

        #text-image-center{
            position: absolute;
            z-index: 11;
            color: $secondary-color;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            text-align: center;
        }

    .box-image-col{
        position: relative;

            img{
                max-width: 100%;
                border-radius: 5px;
                filter: brightness(0.5);
                transition: 0.4s;

                &:hover{
                    opacity: 0.8;
                }
            }

        }

        .links{
            position:absolute;
            z-index: 10;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;

            a{
                text-decoration: none;
                color: $quaternary-color;
                font-weight: bold;
            }
        }

        .text-image{
            position: absolute;
            z-index: 11;
            color: $secondary-color;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            text-align: center;
           

        }

        .btn-link{
            background-color: $secondary-color;

            &:hover{
                color: $primary-color;
            }
        }
}

#lifestyle3{

}

//cri section
#featured4{
.bg-white{
    background-color: #F3F3F3;
}
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
