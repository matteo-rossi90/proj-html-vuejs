<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Home from './page/Home.vue'
import AboutUs from './page/AboutUs.vue'
import ContactUs from './page/ContactUs.vue'
import {store} from './store.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default {
  name:'App',
  components: {
    AppHeader,
    AppFooter,
    AboutUs,
    ContactUs,
    Home
  },
  data (){
    return{
      store
    }
  }
}

</script>

<template>

<AppHeader/>

<main>
  <AboutUs/>
  <ContactUs/>
  <Home/>
</main>

<AppFooter/>
</template>

<style scoped>

</style>
