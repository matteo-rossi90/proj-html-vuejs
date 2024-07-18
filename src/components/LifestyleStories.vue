<script>
export default{
    name: 'LifestyleStories',
}
</script>

<template>

<section class="my-5">
    <!-- titolo e bottoni di navigazione -->
    <div class="col-12 container d-flex mb-3">
        <div class="col-6">
            <h2>Lifestyle & Stories</h2>
        </div>

        <div class="col-6">

        </div>
    </div>
    <!-- contenitore card -->
    <div id="life-stories" class="container d-flex">

        <!-- contenitore img grande -->
        <div class="col-7 card-big">
            <img src="/public/imgs/assets/success-story.webp" alt="">
        </div>

        <!-- 3 img piccole con dettagli -->
        <div class="col-5 card-small_container d-flex flex-column justify-content-between">

            <div class="card-small d-flex p-3">
                <!-- immagine -->
                <div class="col-4">
                    <img src="/public/imgs/assets/travel-alone-300x200.webp" alt="">
                </div>
                <!-- dettagli -->
                <div class="col-8 d-flex flex-column justify-content-center ms-3">
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

            <div class="col-12 card-small p-3">
                
            </div>

            <div class="col-12 card-small p-3">
                
            </div>

        </div>

    </div>
</section>

</template>


<style lang="scss" scoped>
#life-stories{
    height: 450px;

    img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }

.card-small_container{

    .card-small{
        height: calc(100% / 3 - 10px);
        // debug
        background-color: aqua;

        .light-gray{
            color: #545454;
            i{
                font-size: 18px;
                margin-right: 5px;

                &:nth-child(3){
                    margin-left: 10px;
                }
            }
        }
    }
}
}

</style>