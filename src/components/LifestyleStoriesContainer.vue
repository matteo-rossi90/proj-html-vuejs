<script>
import LfSryA from './LifeStyleFolder/LfSryA.vue';
import LfSryB from './LifeStyleFolder/LfSryB.vue';
import LfSryC from './LifeStyleFolder/LfSryC.vue';
import { ref } from 'vue';
export default{
    name: 'LifestyleStoriesContainer',
    components: {
        LfSryA,
        LfSryB,
        LfSryC
    },

    setup() {
        const currentComponent = ref('LfSryA');
        const activeButton = ref('LfSryA');
        const loading = ref(false);

        const showComponent = (componentName) => {
            currentComponent.value = componentName;
            loading.value = false;
        };

        const handleClick = (componentName) => {
            loading.value = true;
            activeButton.value = componentName;
            setTimeout(() => {
                showComponent(componentName);
            }, 800);
        }

        return {
            currentComponent,
            activeButton,
            loading,
            handleClick
        };
    }
}
</script>

<template>

<section class="my-5 container p-0">
    <!-- titolo e bottoni di navigazione -->
    <div id="section-title" class="row mb-3">
        <div class="col-6">
            <h3>Lifestyle & Stories</h3>
        </div>

        <div class="col-6 text-end">
            <div class="btn" :class="{ active: activeButton === 'LfSryA' }" @click="handleClick('LfSryA')">
                all
            </div>

            <div class="btn" :class="{ active: activeButton === 'LfSryB' }" @click="handleClick('LfSryB')">
                lifestyle
            </div>

            <div class="btn" :class="{ active: activeButton === 'LfSryC' }" @click="handleClick('LfSryC')">
                stories
            </div>

        </div>

        <div id="loading-indicator" v-if="loading">
            <div class="lds-hourglass"></div>
        </div>

    </div>


    <LfSryA v-if=" currentComponent === 'LfSryA'" />
    <LfSryB v-if=" currentComponent === 'LfSryB'" />
    <LfSryC v-if=" currentComponent === 'LfSryC'" />
</section>

</template>


<style lang="scss" scoped>
@use 'src/style/partials/_variables.scss' as *;

#section-title{
    position: relative;
    h3{
        font-size: 1.75rem;
        font-weight: bolder;
        text-transform: uppercase;
    }

    .btn{
        background-color: #545454;
        text-transform: uppercase;
        color: white;
        margin-left: 20px;
    }

    .active{
        background-color: $primary-color;
    }
}


#loading-indicator {

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 10px;
    background: white;
    height: 510px;
    width: 1325px;
    z-index: 900;
    filter: opacity(0.4);
}

.lds-hourglass {
    display: inline-block;
    position: relative;
    width: 15px;
    height: 55px;
}

.lds-hourglass:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 6px;
    box-sizing: border-box;
    border: 26px solid #333;
    border-color: $primary-color transparent $primary-color transparent; 
    animation: lds-hourglass 1.2s infinite;
}

@keyframes lds-hourglass {
    0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
        transform: rotate(1800deg);
    }
}
</style>