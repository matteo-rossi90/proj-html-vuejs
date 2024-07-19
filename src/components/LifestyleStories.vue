<script>
import { store } from '../store'

export default{
    name: 'LifestyleStories',
    data() {
        return {
            store,
        }
    },
    methods: {

    },
}
</script>

<template>

<section class="my-5">
    <!-- titolo e bottoni di navigazione -->
    <div id="section-title" class="col-12 container d-flex mb-3">
        <div class="col-6">
            <h3>Lifestyle & Stories</h3>
        </div>

        <div class="col-6 text-end">
            <div class="btn">
                all
            </div>

            <div class="btn">
                lifestyle
            </div>

            <div class="btn">
                stories
            </div>

        </div>
    </div>
    <!-- contenitore card -->
    <div id="life-stories" class="container d-flex">

        <!-- contenitore img grande -->
        <div class="col-7 card-btn">
            <img src="/public/imgs/assets/success-story.webp" alt="">
            <div class="btn">
                Culture
            </div>
        </div>

        <!-- 3 img piccole con dettagli -->
        <div class="col-5 card-small_container d-flex flex-column justify-content-between">

            <div class="card-small d-flex px-3">
                <!-- immagine piccola -->
                <div class="col-5 card-btn">
                    <img src="/public/imgs/assets/travel-alone-300x200.webp" alt="">
                    <div class="btn">
                        Culture
                    </div>
                </div>
                <!-- dettagli -->
                <div class="col-7 d-flex flex-column justify-content-center ms-3">
                    <!-- dettagli grigio chiaro -->
                    <div class="light-gray">
                        <i class="fa-solid fa-user"></i>
                        <span>demo</span>
                        <i class="fa-solid fa-calendar-days"></i>
                        <span>December 26, 2022</span>
                    </div>
                    <!-- titolo card -->
                     <div>
                        <h6>Traveling alone is awesome</h6>
                     </div>
                </div>
            </div>
            <hr>
            <div class="card-small d-flex px-3">
                <!-- immagine piccola -->
                <div class="col-5 card-btn">
                    <img src="/imgs/assets/ideas-anime.webp" alt="">
                    <div class="btn">
                        Culture
                    </div>
                </div>
                <!-- dettagli -->
                <div class="col-7 d-flex flex-column justify-content-center ms-3">
                    <!-- dettagli grigio chiaro -->
                    <div class="light-gray">
                        <i class="fa-solid fa-user"></i>
                        <span>demo</span>
                        <i class="fa-solid fa-calendar-days"></i>
                        <span>December 26, 2022</span>
                    </div>
                    <!-- titolo card -->
                     <div>
                        <h6>Live Ideas you might be anime</h6>
                     </div>
                </div>
            </div>
            <hr>
            <div class="card-small d-flex px-3">
                <!-- immagine piccola -->
                <div class="col-5 card-btn">
                    <img src="/imgs/assets/best-places.webp" alt="">
                    <div class="btn">
                        Lifestyle
                    </div>
                </div>
                <!-- dettagli -->
                <div class="col-7 d-flex flex-column justify-content-center ms-3">
                    <!-- dettagli grigio chiaro -->
                    <div class="light-gray">
                        <i class="fa-solid fa-user"></i>
                        <span>demo</span>
                        <i class="fa-solid fa-calendar-days"></i>
                        <span>December 26, 2022</span>
                    </div>
                    <!-- titolo card -->
                     <div>
                        <h6>Places for a road trip</h6>
                     </div>
                </div>
            </div>


        </div>

    </div>
</section>

</template>


<style lang="scss" scoped>
@use 'src/style/partials/_variables.scss' as *;

#section-title{
    h3{
        font-size: 1.75rem;
        font-weight: bolder;
        text-transform: uppercase;
    }

    .btn{
        background-color: #545454;
        text-transform: uppercase;
        color: white;
        margin-left: 20px;
    }


}

h6{
    &:hover{
        color: $primary-color;
        cursor: pointer;
    }
}

#life-stories{
    height: 450px;

    .card-btn{
        position: relative;
    }

    .btn{
        background-color: white;
        font-weight: bold;
        color: $quaternary-color;
        position: absolute;
        top: 8px;
        left: 15px;
        transition: all 0.4s ease;
        &:hover{
            color: $primary-color;
        }
    }
    img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        filter: brightness(0.5);
    }


.card-small_container{

    .card-small{
        height: calc(100% / 3 - 25px);

        .light-gray{
            color: #545454;
            i{
                font-size: 18px;
                margin-right: 5px;

                &:nth-child(3){
                    margin-left: 10px;
                }
            }

            span{
                &:hover{
                    color: $primary-color;
                    cursor: pointer;
                }
            }
        }
    }
}
}

</style>