
<script>

import { store } from '../store'

export default {
    name:'Cards',
    data(){
        return{
            store,
        }
    }
    
}
</script>

<template>

    <div class="d-flex py-2">
        <div class="col px-2">
            <div class="box-image">
                <img src="/imgs/assets/anime-fashion.webp" alt="">
            </div>
        </div>
        <div class="col px-2">
            <div class="box-image">
                <img src="/imgs/assets/anime-fashion.webp" alt="">
            </div>
        </div>
        <div class="col px-2">
            <div class="box-image">
                <img src="/imgs/assets/anime-fashion.webp" alt="">
            </div>
        </div>
        <div class="col px-2">
            <div class="box-image">
                <img src="/imgs/assets/anime-fashion.webp" alt="">
            </div>
        </div>
        <div class="col px-2">
            <div class="box-image">
                <img src="/imgs/assets/anime-fashion.webp" alt="">
            </div>
        </div>
        <div class="col px-2">
            <div class="box-image">
                <img src="/imgs/assets/anime-fashion.webp" alt="">
            </div>
        </div>
        
    </div>

</template>

<style lang="scss" scoped>
@use '../style/generals.scss' as *;
@use 'src/style/partials/_variables.scss' as *;
@use 'src/style/partials/_mixins.scss' as *;

.col{

    .box-image{
        position: relative;
        
        img{
            max-width: 100%;
            border-radius: 5px;
            object-fit: cover;
            object-position: center;
            filter: brightness(0.5)
        }
    }
}
    
</style>