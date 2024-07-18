import { reactive } from "vue";
export const store = reactive({
    //YouTube player
    activeVideo: 0,
    videoArray: [
        {
            id: 1,
            title: 'Eternal Cultivation Anime',
            thumb: 'https://i.ytimg.com/vi/9rYkZlt2hHE/hqdefault.jpg',
        },
        {
            id: 2,
            title: "Sun's Out, Guns Out",
            thumb: 'https://i.ytimg.com/vi/zlwQERpksnw/hqdefault.jpg',
        },
        {
            id: 3,
            title: "Top 10 Vinland Saga Moments",
            thumb: 'https://i.ytimg.com/vi/itQnUDMMhaU/hqdefault.jpg',
        },
        {
            id: 4,
            title: "Everytime sukuna appears",
            thumb: 'https://i.ytimg.com/vi/IrU2dklT11s/hqdefault.jpg',
        },
        {
            id: 5,
            title: "Wizard King (Julius) vs Licht (Patri) Full Fight",
            thumb: 'https://i.ytimg.com/vi/H5qupR6YQpQ/hqdefault.jpg',
        },
        {
            id: 6,
            title: "Vinland Saga | SHATTERED",
            thumb: 'https://i.ytimg.com/vi/ICt1jYfucec/hqdefault.jpg',
        },
        {
            id: 7,
            title: "Konan arranges",
            thumb: 'https://i.ytimg.com/vi/CkC5CtabT1Y/hqdefault.jpg',
        },





    ],
});
