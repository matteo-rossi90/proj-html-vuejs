<script>
export default {
    name:'Home'
};

</script>

<template>
<section id="carosello1">

</section>

<section id="portfolio2">
    <div class="row container-box py-4">
        <div class="col-3 py-2">
            <div class="box-image-col">
                <img src="/imgs/assets/anime-fashion.webp" alt="">
            </div>
            <div class="box-image-col">
                <img src="/imgs/assets/anime-fashion.webp" alt="">
            </div>
        </div>
        <div class="col py-2">
            <div id="box-image-center">
                <img src="/imgs/assets/best-places.webp" alt="">
            </div>
        </div>
        <div class="col-3 py-2">
            <div class="box-image-col">
                <img src="/imgs/assets/anime-fashion.webp" alt="">
            </div>
            <div class="box-image-col">
                <img src="/imgs/assets/anime-fashion.webp" alt="">
            </div>
        </div>
    </div>


</section>

<section id="lifestyle3"></section>

<section id="featured">

</section>

<section id="yt-player">
    <iframe width="840" height="550" src="https://www.youtube.com/embed/9rYkZlt2hHE" title="Eternal Cultivation Anime Episode :) 113,114 | Anime Land Explain In Hindi." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</section>
</template>

<style lang="scss" scoped>
#carosello1{

}

#portfolio2{

    .container-box{
        width: 80%;
        margin: 0 auto;

    }

    .col-3,
    .col{
        background-color: green;
        border: 1px dashed white;

    }

    #box-image-center{
        width: 100%;
        height: 100%;

        img{
            width: 100%;
            border-radius: 5px;
        }
    }

    .box-image-col{
        height: calc(100% / 2);

        img{
            max-width: 100%;
            border-radius: 5px;
        }

    }
}

#lifestyle3{

}

#featured4{

}
</style>
