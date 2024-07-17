<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AboutUs from './page/AboutUs.vue'
import ContactUs from './page/ContactUs.vue'
import {store} from './store.js'


export default {
  name:'App',
  components: {
    AppHeader,
    AppFooter,
    AboutUs,
    ContactUs
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
</main>

<AppFooter/>
</template>

<style scoped>

</style>
