
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
        <div class="col px-2" v-for="(card, index) in store.bottomCards" :key="index">
            <div class="box-image">
                <div class="overlay"></div>
                <div class="text-message">
                    <h2>{{ card.text }}</h2>
                    <h5>{{ card.post }}</h5>
                </div>
                <img :src="card.image" :alt="card.text">
            </div>
        </div>
        
    </div>

</template>

<style lang="scss" scoped>
@use '../style/generals.scss' as *;
@use 'src/style/partials/_variables.scss' as *;
@use 'src/style/partials/_mixins.scss' as *;

.box-image {
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    cursor:pointer;

    .text-message {
        position: absolute;
        z-index: 10;
        color: $secondary-color;
        padding: 2rem 2rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        transition: opacity 0.3s ease-in-out;

        h2{
            font-size: 1.5em;
            font-weight: 800;
        }
        
        h5{
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }
        
    }

    img {
        height: 100%;
        max-width: 100%;
        border-radius: 5px;
        object-fit: cover;
        object-position: center;
        filter: brightness(0.5);
        transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
        transform: scale(1.3);
    }

    &:hover h5 {
        opacity: 1;
        left: 0;
    }

    &:hover img {
        transform: translate(10%) scale(1.3);
        object-position: left;
    }

    &:hover .text-message{
        border: 1px solid $secondary-color;
        opacity: 1;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 0, 0, 0.5);
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        z-index: 5;
    }

    &:hover .overlay {
        opacity: 1;
    }
}
    
</style>