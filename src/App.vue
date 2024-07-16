<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AboutUs from './page/AboutUs.vue'
import {store} from './store.js'


export default {
  name:'App',
  components: {
    AppHeader,
    AppFooter,
    AboutUs,
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
</main>

<AppFooter/>
</template>

<style scoped>

</style>
