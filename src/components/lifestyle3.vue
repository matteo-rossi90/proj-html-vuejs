<script>
export default{
    name:'lifestyle3',
    data() {
        return {
            currentIndex: 0,
            slides: [
                {
                    image: '../../public/imgs/assets/best-places.webp',
                    data: 'December 25, 2024',
                    title: 'Places for a Rode Trip',
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                },
                {
                    image: '../../public/imgs/assets/music-love.webp',
                    data: 'December 25, 2024',
                    title: 'Music the Love of my Life',
                    text: 'Love of my life, you have hurt me, You have broken my heart, and now you leave me. Love of my life, can not you see?. Bring it back bring it back',
                }, {
                    image: '../../public/imgs/assets/anime-fashion.webp',
                    data: 'December 25, 2024',
                    title: 'Fashion Trend now a Days',
                    text: 'Shine bright like a diamond',
                }, {
                    image: '../../public/imgs/assets/winter.webp',
                    data: 'December 25, 2024',
                    title: 'The Best Winter Outfits',
                    text: "Grab all of your friends and drop incredible winter outfits!",
                }, {
                    image: '../../public/imgs/assets/photographers-mistakes.webp',
                    data: 'December 25, 2024',
                    title: 'Beginner Photographer Mistake',
                    text: 'lights, camera, action!',
                }, {
                    image: '../../public/imgs/assets/ideas-anime.webp',
                    data: 'December 25, 2024',
                    title: 'Live ideas you Might be Anime',
                    text: 'あなたのアイデアを素晴らしいアニメ作品に変えよう.',
                }, {
                    image: '../../public/imgs/assets/visit-france.webp',
                    data: 'December 25, 2024',
                    title: 'Reason to visit France',
                    text: 'Les rêves des amoureux sont comme le bon vin. Ils donnent de la joie ou bien du chagrin. Affaibli par la faim je suis malheureux. Volant en chemin tout ce que je peux. Car rien n est gratuit dans la vie.',
                },{
                    image: '../../public/imgs/assets/travel-alone.webp',
                    data: 'December 25, 2024',
                    title: 'Travelling Alone is Awesome',
                    text: 'All this walking, Now paralyzes me, The journey of life, With nowhere to go..',
                },{
                    image: '../../public/imgs/assets/success-story.webp',
                    data: 'December 25, 2024',
                    title: 'The Succes Stories',
                    text: 'Money money money money money.',
                }
            ],
        }
    },
     //DEBO HACER LA LOGICA DEL CARRUSEL 
    methods: {
        nextImage() {
            console.log('hey');
            if (this.currentIndex > this.slides.length - 1) {
                this.currentIndex++
            }
        },

        prevImage() {
            if (this.currentIndex <= 0) {
                this.currentIndex = this.slides.length - 1;
                this.currentIndex--;
                
            }
        }
    }
};

</script>

<template>
    <section id="featured" >
        <!-- bottoni -->
        <span><h3 class="featuredTitle">FEATURED POSTS</h3></span>
        <div class="angleBox">
            <div class="angle" @click="prevImage">&#8249;</div>
            <div class="angle" @click="nextImage">&#8250;</div>
        </div>
        <!-- carroselo -->
        <div class= "slidesBox d-flex gap-3">
            <div class="cardBox position-relative" v-for="(slide, index) in slides" :key="index">
                <!-- <div class="position-relative"> -->
                <img :src="slide.image" :alt="slide.title">
                <!-- </div> -->
                <div class="buttonBox d-flex justify-content-between gap-3">
                   <button type="button" class="btn btn-secondary btn-sm">Lifestyle</button>
                   <button type="button" class="btn btn-primary btn-sm">Stories</button>
                </div>
                    <div class="captionBox d-flex justfy-content-center flex-column align-items-center gap-2 p-3">
                        <h3 class="size-12">{{ slide.title }}</h3>
                        <p>{{ slide.data }}</p>
                        <p>{{ slide.text }}</p>
                    </div>
                    <button type="button" class="btn btn-danger">Read More</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.featuredTitle {
    width: 82%;
    margin: 0 auto;
    font-weight: bolder;
}

.buttonBox{
    position:absolute;
    margin: 0 8rem;
    top: 1rem;
}

.angleBox {
    display: flex;
    justify-content: flex-end;
    width: 80%;
    margin: 0 auto;
    gap: 1rem;
    padding-bottom: 1rem;
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
    cursor: pointer;
}

.slidesBox {
    overflow: hidden;
    width: 82%;
    margin: 0 auto;
}


.cardBox {
    background-color: #e1e1e1;
    border-radius: 8px;
    text-align: center;
    width: 25rem;
    height: 34rem;
}

img {
    border-radius: 8px 8px 0 0;
    width: 25rem;
}

.captionBox {
    min-height: 14.5rem;
}
// font size 
.size-12{
    font-size: 18px;
    font-weight: bolder;

}
</style>