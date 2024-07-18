<script>
import { store } from '../store'
export default{
    name: 'YouTubePlayer',
    data() {
        return {
            store,
        }
    },
}


</script>

<template>
    <section id="yt-player" class="my-5">
    <div class="container">
        <div class="row">
            <!-- video grande -->
            <div class="col-8 px-0 text-end">
                <!-- video 1 -->
                 <div class="">
                    <iframe width="840" height="550" src="https://www.youtube.com/embed/9rYkZlt2hHE" title="Eternal Cultivation Anime Episode :) 113,114 | Anime Land Explain In Hindi." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 </div>
                <!-- video 2 -->
                 <div class="display">
                    <iframe width="840" height="550" src="https://www.youtube.com/embed/zlwQERpksnw" title="Non picchia solo il sole | Il meglio di Escanor (Spoiler!) | I Sette Peccati Capitali" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <!-- video 3 -->
                <div class="display">
                    <iframe width="840" height="550" src="https://www.youtube.com/embed/itQnUDMMhaU" title="Top 10 Vinland Saga moments" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <!-- video 4 -->
                <div class="display">
                    <iframe width="840" height="550" src="https://www.youtube.com/embed/IrU2dklT11s" title="Everytime Sukuna Appears" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <!-- video 5 -->
                <div class="display">
                    <iframe width="840" height="550" src="https://www.youtube.com/embed/H5qupR6YQpQ" title="Wizard King (Julius) vs Licht (Patri) Full Fight [English Sub]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
                </div>
                <!-- video 6 -->
                <div class="display">
                    <iframe width="840" height="550" src="https://www.youtube.com/embed/ICt1jYfucec" title="Vinland Saga | SHATTERED" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
                </div>
                <!-- video 7 -->
                <div class="display">
                    <iframe width="840" height="550" src="https://www.youtube.com/embed/CkC5CtabT1Y" title="Konan arranges 600 billion explosive charms to defeat Uchiha Madara" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <!-- sexione lista video -->
            <div id="video-list" class="col-4 px-0">
                <!-- header lista video -->
                <div id="player-header" class="col-12 d-flex align-items-center player-card">
                    <div class="col-2 p-3 text-center">
                        <i class="fa-solid fa-play"></i>
                    </div>
                    <div class="col-10">
                        <h6 class="mb-0">Video Playlist</h6>
                        <span> {{ store.videoArray[store.activeVideo].id }}/{{ store.videoArray.length }} </span>
                    </div>                    
                </div>
                <!-- body lista player -->
                <div id="player-body" class="overflow-y-auto">
                    <!-- card video -->
                    <div class="col-12 d-flex align-items-center player-card" v-for="(video, index) in store.videoArray" :key="video.id">
                        <!-- numero video -->
                        <div class="col-1">
                            <div class="vd-number text-center ms-1">
                                {{ video.id }}
                            </div>
                        </div>
                        <!-- thumbnail video -->
                         <div class="col-3 vd-thumb">
                            <img :src="video.thumb" :alt="video.title">
                         </div>
                         <!-- titolo video -->
                          <div class="col-8 vd-title">
                            <span>{{ video.title }}</span>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

#yt-player{
    .display{
        display: none;
    }

    .player-card{
        height: 100px;
        background-color: $tertiary-color;
        border-bottom: 1px solid $quaternary-color;

        .vd-number{
            background-color: $quaternary-color;
            color: white;
            border-radius: 5px;
            height: 30px;
            width: 30px;
        }

        .vd-thumb{
            img{
                width: 80%;
                border-radius: 15px;
                margin: 0 10px;
            }
        }

        .vd-title{
            span{
                color: $primary-color;
            }
        }
    }
    #player-header{
        height: 90px;
        background-color: $quaternary-color;
        color: white;

        i{
            font-size: 40px;
        }
        span{
            font-size: 13px;
        }
    }

    #player-body{
        height: 460px;
    }

    #video-list{
        height: 550px;
    }
}


</style>