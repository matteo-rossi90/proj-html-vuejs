<script>
export default {
    name:'Home',
    components: {
        YouTubePlayer
    }
};

import YouTubePlayer from '../components/YouTubePlayer.vue';

</script>

<template>
<section id="carosello1">
    <div class="container-fluid mt-3 mb-3">
        <div class="row">
            <!-- 1 -->
            <div class="card" style="width: 25rem;">
                <img src="../../public/imgs/assets/rice-ball.webp" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                    <p>December 26, 2022 No Comments</p>
                </div>
            </div>
            <!-- 2 -->
            <div class="card" style="width: 25rem;">
                <img src="../../public/imgs/assets/meal-time-150x150.webp" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                    <p>December 26, 2022 No Comments</p>
                </div>
            </div>
            <!-- 3 -->
            <div class="card" style="width: 25rem;">
                <img src="../../public/imgs/assets/healthy-foods.webp" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                    <p>December 26, 2022 No Comments</p>
                </div>
            </div>
            <!-- 4 -->
            <div class="card" style="width: 25rem;">
                <img src="../../public/imgs/assets/winter.webp" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                    <p>December 26, 2022 No Comments</p>
                </div>
            </div>
            <!-- 5 -->
            <div class="card" style="width: 25rem;">
                <img src="../../public/imgs/assets/photographers-mistakes.webp" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                    <p>December 26, 2022 No Comments</p>
                </div>
            </div>
            <!-- 6 -->
            <div class="card" style="width: 25rem;">
                <img src="../../public/imgs/assets/ideas-anime.webp" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                    <p>December 26, 2022 No Comments</p>
                </div>
            </div>
            <!-- 7 -->
            <div class="card" style="width: 25rem;">
                <img src="../../public/imgs/assets/visit-france.webp" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                    <p>December 26, 2022 No Comments</p>
                </div>
            </div>
            <!-- 8 -->
            <div class="card" style="width: 25rem;">
                <img src="../../public/imgs/assets/travel-alone-300x200.webp" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                    <p>December 26, 2022 No Comments</p>
                </div>
            </div>
            <!-- 9 -->
            <div class="card" style="width: 25rem;">
                <img src="../../public/imgs/assets/rice-ball.webp" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                    <p>December 26, 2022 No Comments</p>
                </div>
            </div>
            <!-- 10 -->
            <div class="card" style="width: 25rem;">
                <img src="../../public/imgs/assets/rice-ball.webp" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                    <p>December 26, 2022 No Comments</p>
                </div>
            </div>
            <!-- 11 -->
            <div class="card" style="width: 25rem;">
                <img src="../../public/imgs/assets/rice-ball.webp" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                    <p>December 26, 2022 No Comments</p>
                </div>
            </div>
            <!-- 12 -->
            <div class="card" style="width: 25rem;">
                <img src="../../public/imgs/assets/rice-ball.webp" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                    <p>December 26, 2022 No Comments</p>
                </div>
            </div>       
        </div>
    </div>
</section>

<section id="portfolio2">

    <!-- portfolio immagini -->
    <div class="row container-box py-4">
        <div class="col-3 p-0">
            <div class="box-image-col">
                <img src="/imgs/assets/anime-fashion.webp" alt="">
            </div>
            <div class="box-image-col pt-2">
                <img src="/imgs/assets/anime-fashion.webp" alt="">
            </div>
        </div>
        <div class="col">
            <div id="box-image-center">
                <img src="/imgs/assets/best-places.webp" alt="">
            </div>
        </div>
        <div class="col-3 p-0">
            <div class="box-image-col">
                <img src="/imgs/assets/anime-fashion.webp" alt="">
            </div>
            <div class="box-image-col pt-2">
                <img src="/imgs/assets/anime-fashion.webp" alt="">
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

        img{
            height: 100%;
            width: 100%;
            border-radius: 5px;
        }
    }

    .box-image-col{

        img{
            max-width: 100%;
            border-radius: 5px;
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
