
<script>
export default {
    name:'AppFooter'
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row justify-content-center pt-5  ">
                <!-- footer links section -->
                <div class="col-2 mt-5 mb-5">
                    <h5><a href="#">GET STARTED </a></h5>
                    <ul>
                        <li>
                            <a href="#">Resources</a>
                        </li>
                        <li>
                            <a href="#">Resources</a>
                        </li> 
                        <li>
                            <a href="#">Resources</a>
                        </li>
                        <li>
                            <a href="#">Resources</a>
                        </li>
                    </ul>
                </div>
                <div class="col-2 mt-5 mb-5">
                    <h5><a href="#"> ABOUT </a></h5>  
                    <ul>
                        <li>
                            <a href="#">Resources</a>
                        </li>
                        <li>
                            <a href="#">Resources</a>
                        </li> 
                        <li>
                            <a href="#">Resources</a>
                        </li>
                        <li>
                            <a href="#">Resources</a>
                        </li>
                    </ul>
                </div>
                <div class="col-2 mt-5 mb-5">
                    <h5><a href="#"> FEATURES </a></h5>
                    <ul>
                        <li>
                            <a href="#">Resources</a>
                        </li>
                        <li>
                            <a href="#">Resources</a>
                        </li> 
                        <li>
                            <a href="#">Resources</a>
                        </li>
                        <li>
                            <a href="#">Resources</a>
                        </li>
                    </ul>
                </div>
                <div class="col-2 mt-5 mb-5">
                    <h5><a href="#"> QUICK LINKS</a></h5>
                    <ul>
                        <li>
                            <a href="#">Resources</a>
                        </li>
                        <li>
                            <a href="#">Resources</a>
                        </li> 
                        <li>
                            <a href="#">Resources</a>
                        </li>
                        <li>
                            <a href="#">Resources</a>
                        </li>
                    </ul>
                </div>
                <!-- subscription section -->
                <div class="col-3 d-flex flex-column mt-5 mb-5 justify-content-between subscription_cont">
                    <h5><a href="#">SUBSCRIBE TO NEWSLETTER</a></h5>
                    <form action="subscription" class="d-flex flex-column justify-content-between mb-5">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email">
                        <button type="button" class="btn subs_bt" data-bs-toggle="button">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
            <hr>
            <!-- closing logo -->
            <div class="row d-flex justify-content-between align-items-baseline">
                <div class="col-3 mt-3 mb-1 ">
                    <img src="../../public/imgs/assets/anime-whitelogo-300x89.png" alt="">
                </div>
                <div class="col-3">
                    <span><i class="fa-regular fa-copyright"></i> Anime Tech, Theme by HasnainDEV</span>
                </div>
                
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../style/generals.scss' as *;
@use 'src/style/partials/_variables.scss' as *;
@use 'src/style/partials/_mixins.scss' as *;
footer{
 background-color: $primary-color;
    form {
        gap: 1.2rem;
    }
    .col-2, .col-3{
        height: 200px;
            //remuvin style decoration defoult from li and a tag 
            li{
                list-style: none;
                line-height: 2rem;
                a:hover{
                    color: $quaternary-color;
                }
            }
            a{
                text-decoration: none;     
            }
           
            // color of links 
            h5, a, span{
                color:$secondary-color;
                font-family: Sans-serif;
                font-size: 15px;
                font-weight: 600;
                font-style: normal;
                text-decoration: none;
            }
            
            //styling subscription button
            .subs_bt{
                width: 100%;
                background-color: $quaternary-color;
                color:$secondary-color ;
            }
            .subs_bt:hover{
                background-color: $secondary-color;
                color: $primary-color;

            }
            img{
                width: 100%;
            }
    }
    hr{
        color:$secondary-color;
        border: solid 1px;
    }
}

    
</style>