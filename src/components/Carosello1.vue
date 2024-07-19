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
            dateEvent: 'December 26, 2022 No Comments',
            textLink: ['Food',]
        },
        {   
            id: 2,
            image:'../../public/imgs/assets/meal-time-150x150.webp',
            title:'The Best Time To Have A Meal',
            dateEvent: 'December 26, 2022 No Comments',
            textLink: ['Food',]
        },
        {
            id: 3,
            image:'../../public/imgs/assets/healthy-foods.webp',
            title:'The Best Healthy Foods',
            dateEvent: 'December 26, 2022 No Comments',
            textLink: ['Food',]
        },
        {
            id: 4,
            image:'../../public/imgs/assets/winter.webp',
            title:'The Best Winter Outfit',
            dateEvent: 'December 26, 2022 No Comments',
            textLink: ['Fashion',]
        },
        {
            id: 5,
            image:'../../public/imgs/assets/photographers-mistakes.webp',
            title:'Begginer Photographer s Mistakes',
            dateEvent: 'December 26, 2022 No Comments',
            textLink: ['Fashion',]
        },
        {
            id: 6,
            image:'../../public/imgs/assets/ideas-anime.webp',
            title:'Live Ideas You Might Be Anime',
            dateEvent: 'December 26, 2022 No Comments',
            textLink: ['Cultures','Stories']
        },
        {
            id: 7,
            image:'../../public/imgs/assets/visit-france.webp',
            title:'Reasons To Visit France',
            dateEvent: 'December 26, 2022 No Comments',
            textLink: ['Lifesyle','Travel']
        },
        {
            id: 8,
            image:'../../public/imgs/assets/travel-alone-300x200.webp',
            title:'Traveling Alone Is Awsome',
            dateEvent: 'December 26, 2022 No Comments',
            textLink: ['Stories','Travel']
        },
        {
            id: 9,
            image:'../../public/imgs/assets/success-story.webp',
            title:'The Best Success Stories',
            dateEvent: 'December 26, 2022 No Comments',
            textLink: ['Cultures','Stories']
        },
        {
            id: 10,
            image:'../../public/imgs/assets/best-places.webp',
            title:'Place Fora A Road Trip',
            dateEvent: 'December 25, 2022 No Comments',
            textLink: ['Lifestyle','Stories', 'Travel']
        },
        {
            id: 11,
            image:'../../public/imgs/assets/music-love.webp',
            title:'Music The Love Of My Life',
            dateEvent: 'December 25, 2022 No Comments',
            textLink: ['Culture', 'Lifestyle']
        },
        {
            id: 12,
            image:'../../public/imgs/assets/anime-fashion.webp',
            title:'Fashion Trend Now A Days',
            dateEvent: 'December 25, 2022 No Comments',
            textLink: ['Fashion', 'Lifestyle']
        },
        ],
        autoplayInterval: null,
        autoplayDelay: 3000 // tempo in millisecondi tra ogni scorrimento automatico
        }
    },
    // mounted() {
    //     this.startAutoplay();
    // },
    // beforeDestroy() {
    //     this.stopAutoplay();
    // },
    methods: {
        startAutoplay() {
            this.autoplayInterval = setInterval(() => {
                this.nextCard();
            }, this.autoplayDelay);
        },
        stopAutoplay() {
            clearInterval(this.autoplayInterval);
        },
        prevCard() {
            this.cardCarosel1.unshift(this.cardCarosel1.pop());
        },
        nextCard() {
            this.cardCarosel1.push(this.cardCarosel1.shift());
        }
    }
}
</script>

<template>
    <div class="container-fluid">
         
        <!-- Cards -->
        <div class="row d-flex flex-nowrap relative"> 
            <div class="col-3 card car_card "  v-for="element in cardCarosel1" :key="element.id">
                <img :src="element.image" class="card-img-top " alt="img">
                <div class="card-body text-center">
                    <h5>{{element.title}}</h5>
                    <p>{{element.dateEvent}}</p>
                    <!-- Link buttons -->
                    <div class="bottoni">
                        <a v-for="(link, index) in element.textLink" :key="index" href="#" class="btn mt-3 position-absolute top-0 bt-style" :style="{ left: index * 7 + 'em' }">{{ link }}</a>
                    </div>
                </div>
            </div>
            <!-- cursor prev -->
            <div id="prev_cursor" @click="prevCard">
                <i class="fa-solid fa-circle-chevron-left icon"></i>
            </div>
            <!-- cursor next-->
            <div id="next_cursor"@click="nextCard">
                <i class="fa-solid fa-circle-chevron-right icon"></i>
            </div>
            
        </div> 
     
    </div> 
</template>
<style lang="scss" scoped>
@use '../style/generals.scss' as *;
@use 'src/style/partials/_variables.scss' as *;
@use 'src/style/partials/_mixins.scss' as *;
.container-fluid {
    overflow: hidden;
    //dato la position relative alla row dove si trovano le card
    .relative{
        position: relative;
        //costumizzazione le card di bootstrap
        .card{
            margin: 0.2rem; 
            padding: 0; 
            width: 23.3rem;
        }
        .bt-style{
            padding: 0.3rem;
            background-color: $secondary-color;
            color: black ;
                &:hover{
                    background-color: $secondary-color;
                    color:$primary-color;
                }
        }
    }
    // costumizzazione dei cursori di scorrimento 
    .icon{
        font-size: 30px;
        background-color: $primary-color;
        border-radius: 50%;
        &:hover{
            background-color: $secondary-color;
            color: $primary-color ;
        }
    }

    #prev_cursor,  #next_cursor{
        color: $secondary-color;
        position: absolute;
        top: 40%;
        left: 0;
            
    }
    #next_cursor{
        left: 95%;
    }
}
</style>
