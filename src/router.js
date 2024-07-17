import { createRouter, createWebHistory } from "vue-router";
import Home from './page/Home.vue';
import AboutUs from "./page/AboutUs.vue";
import ContactUs from "./page/ContactUs.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUs,
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactUs
        }
    ]
});
export { router };