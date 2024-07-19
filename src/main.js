import { createApp } from 'vue'

import { router } from './router';

import { store } from './store'

import App from './App.vue'
//import librera slider
import VueSplide from '@splidejs/vue-splide';

const app = createApp( App );
app.use( VueSplide );
app.use(store);
createApp(App).use(router).mount('#app')
