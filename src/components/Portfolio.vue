<script>
import { store } from '../store'

export default {
    name: 'Portfolio',
    data(){
        return{
            store,
        }
    }
    
}
</script>


<template>

    <section id="portfolio2">

    <!-- portfolio immagini -->
    <div class="row container-box py-4">
        <div class="col-3 py-1 px-1">
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
        <div class="col py-1 px-1">
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
        <div class="col-3 py-1 px-1">
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

</template>



<style lang="scss" scoped>
@use '../style/generals.scss' as *;
@use 'src/style/partials/_variables.scss' as *;
@use 'src/style/partials/_mixins.scss' as *;

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

    
</style>