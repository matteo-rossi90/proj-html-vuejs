<script>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'; //import
import '@splidejs/vue-splide/css'; //import

export default {
    name:'lifestyle3',
    components: {Splide, SplideSlide, SplideTrack}, //import
    data() {
        return {
            currentIndex: 0,
            slides: [
                {
                    image: '../../public/imgs/assets/best-places.webp',
                    categories: ["Lifestyle", "Stories"],
                    data: 'December 25, 2024',
                    title: 'Places for a Rode Trip',
                    text: 'Marvel\'s Avengers is an epic, third-person.',
                },
                {
                    image: '../../public/imgs/assets/music-love.webp',
                    categories: ["Culture", "Lifestyle"],
                    data: 'December 25, 2024',
                    title: 'Music the Love of my Life',
                    text: 'Love of my life, you have hurt me.',
                }, {
                    image: '../../public/imgs/assets/anime-fashion.webp',
                    categories: ["Fashion", "Lifestyle"],
                    data: 'December 25, 2024',
                    title: 'Fashion Trend now a Days',
                    text: 'Shine bright like a diamond',
                }, {
                    image: '../../public/imgs/assets/winter.webp',
                    categories: ["Fashion"],
                    data: 'December 25, 2024',
                    title: 'The Best Winter Outfits',
                    text: "Grab all of your friends.!",
                }, {
                    image: '../../public/imgs/assets/photographers-mistakes.webp',
                    categories: ["Fashion"],
                    data: 'December 25, 2024',
                    title: 'Beginner Photographer Mistake',
                    text: 'lights, camera, action!',
                }, {
                    image: '../../public/imgs/assets/ideas-anime.webp',
                    categories: ["Culture", "Stories"],
                    data: 'December 25, 2024',
                    title: 'Live ideas you Might be Anime',
                    text: 'あなたのアイデアを素晴らし.',
                }, {
                    image: '../../public/imgs/assets/visit-france.webp',
                    categories: ["Culture", "Lifestyle"],
                    data: 'December 25, 2024',
                    title: 'Reason to visit France',
                    text: 'Les rêves des amoureux sont comme le bon vin.',
                },{
                    image: '../../public/imgs/assets/travel-alone.webp',
                    categories: ["Travel", "Lifestyle"],
                    data: 'December 25, 2024',
                    title: 'Travelling Alone is Awesome',
                    text: 'All this walking, Now paralyzes me.',
                },{
                    image: '../../public/imgs/assets/success-story.webp',
                    categories: ["Stories", "Travel"],
                    data: 'December 25, 2024',
                    title: 'The Succes Stories',
                    text: 'Money money money money money.',
                }
            ],
            splideOptions: { //add styles module
                type: 'loop', //add styles module
                perPage: 3, //add styles module
                gap: '1rem', //add styles module
                perMove: 1, //add styles module
                pagination: false, //add styles module
                arrows: false, //add styles module
                autoplay: true, //add styles module
            },
        }
    }
};

</script>

<template>
    <div  class="bannerBox d-flex justify-content-center align-items-center">
        <img id="bannerLifestyle3" src="../../public/imgs/assets/header-banner.webp" alt="banner">
    </div>

    <section class="container" id="featured" >
        <!-- bottoni -->
        <span><h3 class="featuredTitle">FEATURED POSTS</h3></span>
        <div class="angleBox">
            <!-- Nelle frecciete aggiungiamo @click="this.$refs.carousel.splide.go('<') per fare andare indietro le immagini"  -->
            <button class="angle" @click="this.$refs.carousel.splide.go('<')">
                <i class="fa-solid fa-angle-left"></i>
            </button>
            <!-- aggiungiamo @click="this.$refs.carousel.splide.go('>') per fare andare indietro le immagini"  -->
            <button class="angle" @click="this.$refs.carousel.splide.go('>')">
                <i class="fa-solid fa-angle-right"></i>
            </button>
        </div>
        <!-- carroselo add tag Splide per il contenitore e SplideSlide per la struttura delle card. Dentro del tag slide aggiungiamo ref carousel bla bla bla per aggiungere delle options tramite API-->
        <Splide ref="carousel" :options="splideOptions" class= "slidesBox d-flex gap-3">
            <SplideSlide class="cardBox position-relative" v-for="(slide, index) in slides" :key="index">
                <img :src="slide.image" :alt="slide.title">
                <div class="buttonBox d-flex justify-content-between gap-3">
                <button type="button" v-for="category in slide.categories" :key="category" class="btn btn-sm btn-light fw-bold" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">{{ category }}</button>
                <!-- <button type="button" class="btn btn-sm btn-light fw-bold" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">Stories</button> -->
                </div>
                <div class="captionBox d-flex justfy-content-center flex-column align-items-center gap-2 p-3">
                    <h3 class="size-12">{{ slide.title }}</h3>
                    <p>{{ slide.data }}</p>
                    <p>{{ slide.text }}</p>
                </div>
                 <button type="button" class="btn btn-danger btn-outline-light rounded-pill fw-bold">Read More</button>
            </SplideSlide> 
        </Splide>
        <!-- chiudere entrambi i tag -->
    </section>
</template>

<style lang="scss" scoped>

.bannerBox {
    background-color: #F3F3F3;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-bottom: 3rem;
    margin-top: 5rem;
}

#bannerLifestyle3 {
    width: 78rem;
    border-radius: 10px;
}

.featuredTitle {
    width: 95%;
    margin: 0 auto;
    font-weight: bolder;
}

.buttonBox{
    position:absolute;
    margin: 0 8rem;
    top: 1rem;
}

button:hover {
    color: #bf1d2e;
}

.angleBox {
    display: flex;
    justify-content: flex-end;
    width: 95%;
    margin: 0 auto;
    gap: 1rem;
    padding-bottom: 1rem;
}

.angle {
    font-size: 15px;
    background-color: #2d2b2b;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    font-weight: bolder;
    color: white;
    cursor: pointer;
}

.slidesBox {
    overflow: hidden;
    width: 95%;
    margin: 0 auto;
}

.cardBox {
    background-color: #F3F3F3;
    border-radius: 8px;
    text-align: center;
    width: 25rem;
    height: 30rem;
}

img {
    border-radius: 8px 8px 0 0;
    width: 25rem;
}

// font size 
.size-12{
    font-size: 18px;
    font-weight: bolder;
}
</style>