<script>

export default {
    name: 'Portfolio',
    data(){
        return{
        //elementi del portfolio
        columns: [
            [
              {
                buttons: ["Fashion", "Lifestyle"],
                author: "demo",
                date: "Dicembre 25, 2022",
                title: "Fashion Trend Now a Days",
                imgSrc: "/imgs/assets/anime-fashion.webp"
              },
              {
                buttons: ["Stories", "Travel"],
                author: "demo",
                date: "Dicembre 26, 2022",
                title: "Travelling Alone Is Awesome",
                imgSrc: "/imgs/assets/travel-alone.webp"
              }
            ]
        ],
          centerImage: {
              buttons: ["Lifestyle", "Stories", "Travel"],
              author: "demo",
              date: "Dicembre 25, 2022",
              title: "Places For a Road Trip",
              imgSrc: "/imgs/assets/best-places.webp"
          },
          columnsRight: [
          [
            {
                buttons: ["Culture", "Lifestyle"],
                author: "demo",
                date: "Dicembre 25, 2022",
                title: "Music The Love of My Life",
                imgSrc: "/imgs/assets/music-love.webp"
            },
            {
                buttons: ["Lifestyle", "Travel"],
                author: "demo",
                date: "Dicembre 26, 2022",
                title: "Reasons To Visit France",
                imgSrc: "/imgs/assets/visit-france.webp"
            }
          ]
        ]

      }
    }
    
}
</script>


<template>

<section id="portfolio2">
    <!-- portfolio immagini -->
    <div class="row container-box py-4">

      <!-- Colonna sinistra -->
      <div class="col-3 py-1 px-1" v-for="(column, colIndex) in columns" :key="'left-' + colIndex">
        
        <div class="box-image-col py-1" v-for="(image, imgIndex) in column" :key="'left-' + colIndex + '-' + imgIndex">

          <!-- pulsanti e link -->
          <div class="links py-3">
            <a v-for="(btn, btnIndex) in image.buttons" :key="btnIndex" href="#" class="btn py-1 px-4 btn-link">
              {{ btn }}
            </a>
          </div>

          <!-- parte dei testi -->
          <div class="text-image py-3">
            <span class="px-1">
              <i class="fa-solid fa-user px-1"></i>
              {{ image.author }}
            </span>
            <span class="px-1">
              <i class="fa-solid fa-calendar-days"></i>
              {{ image.date }}
            </span>
            <h5>{{ image.title }}</h5>
          </div>

          <!-- immagini -->
          <img :src="image.imgSrc" alt="">
        </div>
      </div>

      <!-- Colonna centrale -->
      <div class="col py-1 px-1">

        <div id="box-image-center" class="py-1">

          <!-- pulsanti e link -->
          <div class="links py-3">
            <a v-for="(btn, btnIndex) in centerImage.buttons" :key="btnIndex" href="#" class="btn py-1 px-4 btn-link">
              {{ btn }}
            </a>
          </div>

          <!-- parte dei testi -->
          <div id="text-image-center" class="py-3">
            <span class="px-1">
              <i class="fa-solid fa-user px-1"></i>
              {{ centerImage.author }}
            </span>

            <span class="px-1">
              <i class="fa-solid fa-calendar-days"></i>
              {{ centerImage.date }}
            </span>

            <h5>{{ centerImage.title }}</h5>
          </div>

          <!-- immagine -->
          <img :src="centerImage.imgSrc" alt="">
        </div>
      </div>

      <!-- Colonna destra -->
      <div class="col-3 py-1 px-1" v-for="(column, colIndex) in columnsRight" :key="'right-' + colIndex">

        <div class="box-image-col py-1" v-for="(image, imgIndex) in column" :key="'right-' + colIndex + '-' + imgIndex">

          <div class="links py-3">
            <a v-for="(btn, btnIndex) in image.buttons" :key="btnIndex" href="#" class="btn py-1 px-4 btn-link">
              {{ btn }}
            </a>
          </div>

          <div class="text-image py-3">
            <span class="px-1">
              <i class="fa-solid fa-user px-1"></i>
              {{ image.author }}
            </span>
            <span class="px-1">
              <i class="fa-solid fa-calendar-days"></i>
              {{ image.date }}
            </span>
            <h5>{{ image.title }}</h5>
          </div>

          <img :src="image.imgSrc" alt="">
        </div>
      </div>
    </div>
  </section>
</template>



<style lang="scss" scoped>
@use '../style/generals.scss' as *;
@use 'src/style/partials/_variables.scss' as *;
@use 'src/style/partials/_mixins.scss' as *;

#portfolio2{

    h5{
      font-size: 17px;
      font-weight: 700;
    }

    .container-box{
        width: 80%;
        margin: 0 auto;

    }

    #box-image-center{
        width: 100%;
        height: 100%;
        position: relative;

        img{
            height: 100%;
            width: 100%;
            border-radius: 5px;
            filter: brightness(0.5);
            transition: 0.4s;

            &:hover{
                opacity: 0.8;
            }
        }

    }

    #text-image-center{
        position: absolute;
        z-index: 11;
        color: $secondary-color;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        text-align: center;
    }

    .box-image-col{
        position: relative;

            img{
                max-width: 100%;
                border-radius: 5px;
                filter: brightness(0.5);
                transition: 0.4s;

                &:hover{
                    opacity: 0.8;
                }
            }

        }

        .links{
            position:absolute;
            z-index: 10;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;

            a{
                text-decoration: none;
                color: $quaternary-color;
                font-weight: bold;
            }
        }

        .text-image{
            position: absolute;
            z-index: 11;
            color: $secondary-color;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            text-align: center;
           

        }

        .btn-link{
            background-color: $secondary-color;

            &:hover{
                color: $primary-color;
            }
        }
}

    
</style>