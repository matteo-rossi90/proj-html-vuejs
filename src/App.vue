<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import {store} from './store.js'


export default {
  name:'App',
  components: {
    AppHeader,
    AppFooter,
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

<main></main>

<AppFooter/>
</template>

<style scoped>

</style>
