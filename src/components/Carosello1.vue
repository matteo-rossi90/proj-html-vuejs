<script>
export default{
    name:'Carosello1',
}
</script>

<template>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner stricia_carosello d-flex flex-wrap"> 
                <div class="carousel-item item_car active"> 
                    <!-- 1 -->
                    <div class="card car_card">
                        <img src="../../public/imgs/assets/rice-ball.webp" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                            <p>December 26, 2022 No Comments</p>
                        </div>
                    </div>
                </div>
                 <div class="carousel-item item_car"> 
                    <!-- 2 -->
                    <div class="card car_card">
                        <img src="../../public/imgs/assets/meal-time-150x150.webp" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5>THE BEST TIME TO HAVE A MEAL</h5>
                            <p>December 26, 2022 No Comments</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item item_car"> 
                    <!-- 3 -->
                    <div class="card car_card">
                        <img src="../../public/imgs/assets/healthy-foods.webp" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5>THE BEST HEALTHY FOODS</h5>
                            <p>December 26, 2022 No Comments</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item item_car"> 
                    <!-- 4 -->
                    <div class="card car_card">
                        <img src="../../public/imgs/assets/winter.webp" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5>THE BEST WINTER OUTFITS</h5>
                            <p>December 26, 2022 No Comments</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item item_car"> 
                    <!-- 5 -->
                    <div class="card car_card">
                        <img src="../../public/imgs/assets/photographers-mistakes.webp" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                            <p>December 26, 2022 No Comments</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item item_car"> 
                    <!-- 6 -->
                    <div class="card car_card">
                        <img src="../../public/imgs/assets/ideas-anime.webp" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                            <p>December 26, 2022 No Comments</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item item_car"> 
                    <!-- 7 -->
                    <div class="card car_card">
                        <img src="../../public/imgs/assets/visit-france.webp" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                            <p>December 26, 2022 No Comments</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item item_car"> 
                    <!-- 8 -->
                    <div class="card car_card">
                        <img src="../../public/imgs/assets/travel-alone-300x200.webp" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                            <p>December 26, 2022 No Comments</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item item_car"> 
                    <!-- 9 -->
                    <div class="card car_card">
                        <img src="../../public/imgs/assets/success-story.webp" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                            <p>December 26, 2022 No Comments</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item item_car"> 
                    <!-- 10 -->
                    <div class="card car_card">
                        <img src="../../public/imgs/assets/best-places.webp" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                            <p>December 26, 2022 No Comments</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item item_car"> 
                    <!-- 11 -->
                    <div class="card car_card">
                        <img src="../../public/imgs/assets/music-love.webp" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                            <p>December 26, 2022 No Comments</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item item_car"> 
                    <!-- 12 -->
                    <div class="card car_card">
                        <img src="../../public/imgs/assets/anime-fashion.webp" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5>HYGENIC RECEIPE TO PREPARE RICE</h5>
                            <p>December 26, 2022 No Comments</p>
                        </div>
                    </div>   
                </div>    
        </div> 
        <!-- cursor next prev -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div> 
</template>
<style lang="scss" scoped>
@use '../style/generals.scss' as *;
@use 'src/style/partials/_variables.scss' as *;
@use 'src/style/partials/_mixins.scss' as *;
.stricia_carosello{
    width: 100%;
}

.car_card {
   
    width: calc(100% );
}
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