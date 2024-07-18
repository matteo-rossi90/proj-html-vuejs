<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import {store} from './store.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


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

<router-view></router-view>

<AppFooter/>
</template>

<style scoped>

</style>
