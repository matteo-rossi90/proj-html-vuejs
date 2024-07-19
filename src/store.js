import { reactive } from "vue";
export const store = reactive({
    //Header
    navArray: [
        {
            title: 'home',
            icon: 'fa-solid fa-house-chimney',
            route: 'home'

        },
        {
            title: 'about-us',
            icon: 'fa-solid fa-user',
            route: 'about'

        },
        {
            title: 'contact-us',
            icon: 'fa-solid fa-envelope',
            route: 'contact'

        }
    ],

    activeSentence: 0,
    timer: null,
    sentencesArray: [
        {
            time: '05:37',
            sentence: 'find out more about us',
            img: '/imgs/assets/rice-ball.webp',
            route: 'about'
        },
        {
            time: '10:25',
            sentence: 'contact us!',
            img: '/imgs/assets/meal-time-150x150.webp',
            route: 'contact'
        },
        {
            time: '18:30',
            sentence: 'our home page',
            img: '/imgs/assets/winter-150x150.webp',
            route: 'home'
        },

    ],
    //YouTube player
    activeVideo: 0,
    videoArray: [
        {
            id: 1,
            title: 'Eternal Cultivation Anime',
            thumb: 'https://i.ytimg.com/vi/9rYkZlt2hHE/hqdefault.jpg',
            video: 'https://www.youtube.com/embed/9rYkZlt2hHE?showinfo=0&rel=0&enablejsapi=1&origin=https%3A%2F%2Fdemo.hasnaindev.com&widgetid=1'
        },
        {
            id: 2,
            title: "Sun's Out, Guns Out",
            thumb: 'https://i.ytimg.com/vi/zlwQERpksnw/hqdefault.jpg',
            video: 'https://www.youtube.com/embed/zlwQERpksnw?showinfo=0&rel=0&enablejsapi=1&origin=https%3A%2F%2Fdemo.hasnaindev.com&widgetid=2'
        },
        {
            id: 3,
            title: "Top 10 Vinland Saga Moments",
            thumb: 'https://i.ytimg.com/vi/itQnUDMMhaU/hqdefault.jpg',
            video: 'https://www.youtube.com/embed/CkC5CtabT1Y?showinfo=0&rel=0&enablejsapi=1&origin=https%3A%2F%2Fdemo.hasnaindev.com&widgetid=7'
        },
        {
            id: 4,
            title: "Everytime sukuna appears",
            thumb: 'https://i.ytimg.com/vi/IrU2dklT11s/hqdefault.jpg',
            video: 'https://www.youtube.com/embed/IrU2dklT11s?showinfo=0&rel=0&enablejsapi=1&origin=https%3A%2F%2Fdemo.hasnaindev.com&widgetid=4'
        },
        {
            id: 5,
            title: "Wizard King (Julius) vs Licht (Patri) Full Fight",
            thumb: 'https://i.ytimg.com/vi/H5qupR6YQpQ/hqdefault.jpg',
            video: 'https://www.youtube.com/embed/H5qupR6YQpQ?showinfo=0&rel=0&enablejsapi=1&origin=https%3A%2F%2Fdemo.hasnaindev.com&widgetid=5'
        },
        {
            id: 6,
            title: "Vinland Saga | SHATTERED",
            thumb: 'https://i.ytimg.com/vi/ICt1jYfucec/hqdefault.jpg',
            video: 'https://www.youtube.com/embed/ICt1jYfucec?showinfo=0&rel=0&enablejsapi=1&origin=https%3A%2F%2Fdemo.hasnaindev.com&widgetid=6'
        },
        {
            id: 7,
            title: "Konan arranges",
            thumb: 'https://i.ytimg.com/vi/CkC5CtabT1Y/hqdefault.jpg',
            video: 'https://www.youtube.com/embed/CkC5CtabT1Y?showinfo=0&rel=0&enablejsapi=1&origin=https%3A%2F%2Fdemo.hasnaindev.com&widgetid=7'
        },
    ],
    //bottom cards Array
    bottomCards: [
        {
            text: 'FASHION',
            image: '/imgs/assets/anime-fashion.webp',
            post: '3 posts'
        },
        {
            text: 'CULTURE',
            image: '/imgs/assets/success-story.webp',
            post: '3 posts'
        },
        {
            text: 'FOOD',
            image: '/imgs/assets/healthy-foods.webp',
            post: '3 posts'
        },
        {
            text: 'LIFESTYLE',
            image: '/imgs/assets/visit-france.webp',
            post: '4 posts'
        },
        {
            text: 'STORIES',
            image: '/imgs/assets/travel-alone.webp',
            post: '4 posts'
        },
        {
            text: 'TRAVEL',
            image: '/imgs/assets/best-places.webp',
            post: '3 posts'
        }
    ],

    //LifestyleStories
    lifeStory: [
        {
            img: '/imgs/assets/success-story.webp',
            button: 'Culture',
            title: 'The Best Succes Stories',
        },
        {
            img: '/imgs/assets/travel-alone-300x200.webp',
            button: 'Stories',
            title: 'Traveling alone is awesome',
        },
        {
            img: '/img/assets/ideas-anime.webp',
            button: 'Culture',
            title: 'Live Ideas you might be anime',
        },
        {
            img: '/img/assets/best-places.webp',
            button: 'Lifestyle',
            title: 'Places for a road trip',
        },
        {
            img: '/img/assets/visit-france.webp',
            button: 'Lifestyle',
            title: 'Reasons to visit france',
        },
        {
            img: '/img/assets/music-love.webp',
            button: 'Culture',
            title: 'Music the Love of my life',
        },
        {
            img: '/img/assets/anime-fashion.webp"',
            button: 'Fashion',
            title: 'Fashion trend now a days',
        }
    ],
    //riferimenti di contact US
    contactReference:[
        {
            text: 'CALL US',
            reference: '02 90 222 333',
            icon: 'fa-solid fa-phone-volume'
        },
        {
            text: 'EMAIL US',
            reference: 'info@domain.com',
            icon: 'fa-solid fa-envelope'
        },
        {
            text: 'VISIT US',
            reference: '3308 Fleming Street',
            icon: 'fa-solid fa-location-dot'
        }
    ]
});