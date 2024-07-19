<script>
export default{
    name: 'LfSryB',
}
</script>

<template>
    <!-- contenitore card -->
    <div id="life-stories" class="container d-flex">

    <!-- contenitore img grande -->
    <div class="col-7 card-btn">
        <img src="/imgs/assets/visit-france.webp" alt="">
        <div class="btn">
            Lifestyle
        </div>
    </div>

    <!-- 3 img piccole con dettagli -->
    <div class="col-5 card-small_container d-flex flex-column justify-content-between">

        <div class="card-small d-flex px-3">
            <!-- immagine piccola 1 -->
            <div class="col-5 card-btn">
                <img src="/imgs/assets/success-story.webp" alt="">
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
                    <h6>The Best Succes Stories</h6>
                </div>
            </div>
        </div>
        <hr>
        <div class="card-small d-flex px-3">
            <!-- immagine piccola 2 -->
            <div class="col-5 card-btn">
                <img src="/imgs/assets/music-love.webp" alt="">
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
                    <h6>Music the Love of my life</h6>
                </div>
            </div>
        </div>
        <hr>
        <div class="card-small d-flex px-3">
            <!-- immagine piccola 3 -->
            <div class="col-5 card-btn">
                <img src="/imgs/assets/anime-fashion.webp" alt="">
                <div class="btn">
                    Fashion
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
                    <h6>Fashion trend now a days</h6>
                </div>
            </div>
        </div>


    </div>

</div>

</template>

<style lang="scss" scoped>
@use 'src/style/partials/_variables.scss' as *;

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
        transition: all 0.4s ease;
        &:hover{
            opacity: 0.8;
        }
    }


.card-small_container{

    h6{
        &:hover{
            color: $primary-color;
            cursor: pointer;
        }
    }


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
