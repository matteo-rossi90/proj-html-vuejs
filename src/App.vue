<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import {store} from './store.js'


export default {
  name:'App',
  components: {
    Header,
    Footer,
  },
  data (){
    return{
      store
    }
  }
}

</script>

<template>
<Header/>
<main></main>
<Footer/>
</template>

<style scoped>

</style>
