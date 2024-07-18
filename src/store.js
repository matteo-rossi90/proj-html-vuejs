import { reactive } from "vue";
export const store = reactive({
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
            video: 'https://www.youtube.com/embed/zlwQERpksnw?showinfo=0&rel=0&enablejsapi=1&origin=https%3A%2F%2Fdemo.hasnaindev.com&widgetid=2'
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
});
