<script>
export default{
    name:'Carosello1',
    //array object card
    data(){
        return{
            cardCarosel1: [
        {
            id: 1,
            image:'../../public/imgs/assets/rice-ball.webp',
            title:'Hygenic Recepe To Prepare Rice',
            dateEvent: 'December 26, 2022 No Comments'
        },
        {   
            id: 2,
            image:'../../public/imgs/assets/meal-time-150x150.webp',
            title:'The Best Time To Have A Meal',
            dateEvent: 'December 26, 2022 No Comments'
        },
        {
            id: 3,
            image:'../../public/imgs/assets/healthy-foods.webp',
            title:'The Best Healthy Foods',
            dateEvent: 'December 26, 2022 No Comments'
        },
        {
            id: 4,
            image:'../../public/imgs/assets/winter.webp',
            title:'The Best Winter Outfit',
            dateEvent: 'December 26, 2022 No Comments'
        },
        {
            id: 5,
            image:'../../public/imgs/assets/photographers-mistakes.webp',
            title:'Begginer Photographer s Mistakes',
            dateEvent: 'December 26, 2022 No Comments'
        },
        {
            id: 6,
            image:'../../public/imgs/assets/ideas-anime.webp',
            title:'Live Ideas You Might Be Anime',
            dateEvent: 'December 26, 2022 No Comments'
        },
        {
            id: 7,
            image:'../../public/imgs/assets/visit-france.webp',
            title:'Reasons To Visit France',
            dateEvent: 'December 26, 2022 No Comments'
        },
        {
            id: 8,
            image:'../../public/imgs/assets/travel-alone-300x200.webp',
            title:'Traveling Alone Is Awsome',
            dateEvent: 'December 26, 2022 No Comments'
        },
        {
            id: 9,
            image:'../../public/imgs/assets/success-story.webp',
            title:'The Best Success Stories',
            dateEvent: 'December 26, 2022 No Comments'
        },
        {
            id: 10,
            image:'../../public/imgs/assets/best-places.webp',
            title:'Place Fora A Road Trip',
            dateEvent: 'December 25, 2022 No Comments'
        },
        {
            id: 11,
            image:'../../public/imgs/assets/music-love.webp',
            title:'Music The Love Of My Life',
            dateEvent: 'December 25, 2022 No Comments'
        },
        {
            id: 12,
            image:'../../public/imgs/assets/anime-fashion.webp',
            title:'Fashion Trend Now A Days',
            dateEvent: 'December 25, 2022 No Comments'
        },
    ]

        }
    }
}
</script>

<template>
    <div class="container-fluid" data-bs-ride="carousel">
        <div class="row d-flex flex-nowrap "> 
            <div class="col-3 card car_card active" v-for="element in cardCarosel1" :key="element.id">
                <img :src="element.image" class="card-img-top " alt="...">
                <div class="card-body text-center">
                    <h5>{{element.title}}</h5>
                    <p>{{element.dateEvent}}</p>
                </div>
            </div>
            <!-- cursor next prev -->
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div> 
     
    </div> 
</template>
<style lang="scss" scoped>
@use '../style/generals.scss' as *;
@use 'src/style/partials/_variables.scss' as *;
@use 'src/style/partials/_mixins.scss' as *;

</style>

















<!-- <div class="container-fluid mt-3 mb-3">
    <div class="row">
                <div class="card" style="width: 25rem;">
            <img src="../../public/imgs/assets/rice-ball.webp" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                <p>December 26, 2022 No Comments</p>
            </div>
        </div>
                <div class="card" style="width: 25rem;">
            <img src="../../public/imgs/assets/meal-time-150x150.webp" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5>THE BEST TIME TO HAVE A MEAL</h5>
                <p>December 26, 2022 No Comments</p>
            </div>
        </div>
                <div class="card" style="width: 25rem;">
            <img src="../../public/imgs/assets/healthy-foods.webp" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5>THE BEST HEALTHY FOODS</h5>
                <p>December 26, 2022 No Comments</p>
            </div>
        </div>
                <div class="card" style="width: 25rem;">
            <img src="../../public/imgs/assets/winter.webp" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5>THE BEST WINTER OUTFITS</h5>
                <p>December 26, 2022 No Comments</p>
            </div>
        </div>
                <div class="card" style="width: 25rem;">
            <img src="../../public/imgs/assets/photographers-mistakes.webp" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                <p>December 26, 2022 No Comments</p>
            </div>
        </div>
                <div class="card" style="width: 25rem;">
            <img src="../../public/imgs/assets/ideas-anime.webp" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                <p>December 26, 2022 No Comments</p>
            </div>
        </div>
                <div class="card" style="width: 25rem;">
            <img src="../../public/imgs/assets/visit-france.webp" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                <p>December 26, 2022 No Comments</p>
            </div>
        </div>
                <div class="card" style="width: 25rem;">
            <img src="../../public/imgs/assets/travel-alone-300x200.webp" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                <p>December 26, 2022 No Comments</p>
            </div>
        </div>
                <div class="card" style="width: 25rem;">
            <img src="../../public/imgs/assets/success-story.webp" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                <p>December 26, 2022 No Comments</p>
            </div>
        </div>
        
        <div class="card" style="width: 25rem;">
            <img src="../../public/imgs/assets/best-places.webp" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                <p>December 26, 2022 No Comments</p>
            </div>
        </div>
        
        <div class="card" style="width: 25rem;">
            <img src="../../public/imgs/assets/music-love.webp" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                <p>December 26, 2022 No Comments</p>
            </div>
        </div>
        
        <div class="card" style="width: 25rem;">
            <img src="../../public/imgs/assets/anime-fashion.webp" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                <p>December 26, 2022 No Comments</p>
            </div>
        </div>       
    </div>
</div> -->