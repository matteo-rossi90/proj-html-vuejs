<script>
export default {
    name:'AppHeader'
};
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
</script>
<template>
    <header>
        <section id="top-banner" class="container-fluid">
            <div class="col-1 offset-1" id="updates">
                news updates
            </div>
            <div class="col-8">


            </div>
            <div class="col-1 row align-items-center justify-content-center" id="social">
                <a href="#" class="social-i-container">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" class="social-i-container">
                    <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#" class="social-i-container">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#" class="social-i-container">
                    <i class="fa-brands fa-youtube"></i>
                </a>
            </div>
            <div class="offset-1"></div>
        </section>

        <section id="middle-banner" class="container-fluid row align-items-center">
            <div class="offset-1 col-4">
                <a href="#">
                    <img src="/imgs/assets/anime-logo.webp" alt="logo">
                </a>
            </div>
            <div class="col-6">
                <img id="headerBanner" src="/imgs/assets/header-banner.webp" alt="adv">
            </div>
        </section>

        <section id="menu" class="container-fluid">
            <nav class="navbar">
                <div class="offset-1 col-1">
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                        <div class="offcanvas-body text-center">

                            <div class="col-12 my-5">
                                <img id="canvas-logo" src="/imgs/assets/anime-logo.webp" alt="logo">
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>

                            <div class="col-12 row my-5">
                                <div class="col-4">
                                    <img src="/imgs/assets/music-love.webp" alt="banner">
                                </div>
                                <div class="col-4">
                                    <img src="/imgs/assets/best-places.webp" alt="banner">
                                </div>
                                <div class="col-4">
                                    <img src="/imgs/assets/anime-fashion.webp" alt="banner">
                                </div>
                            </div>

                            <div class="col12 my-2 canvas-info">
                                <i class="fa-solid fa-clock"></i>
                                <span>Sun - Sat : 9:00 AM - 18:00 PM</span>
                            </div>

                            <div class="col12 my-2 canvas-info">
                                <i class="fa-solid fa-envelope"></i>
                                <span>contact@domain.com</span>
                            </div>

                            <div class="col12 my-2 canvas-info">
                                <i class="fa-solid fa-phone-volume"></i>
                                <span>(+82) 8123 456 789</span>
                            </div>

                            <div class="col-12 my-4" id="social-canvas">
                                <a href="#" class="social-i-container">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="#" class="social-i-container">
                                    <i class="fa-brands fa-x-twitter"></i>
                                </a>
                                <a href="#" class="social-i-container">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                                <a href="#" class="social-i-container">
                                    <i class="fa-brands fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <ul class="col-8 text-center">
                    <li>
                        <router-link :to="{name: 'home'}">
                            <i class="fa-solid fa-house-chimney"></i>
                            home
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'about'}">
                            <i class="fa-solid fa-user"></i>
                            about-us
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'contact'}">
                            <i class="fa-solid fa-envelope"></i>
                            contact-us
                        </router-link>
                    </li>
                </ul>

                <div id="search" class="col-1 text-end">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div class="offset-1"></div>
            </nav>

        </section>
    </header>
    
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    header{
        #top-banner{
            background-color: $primary-color;
            height: 40px;
            display: flex;

            #updates{
            height: 100%;
            background-color: #545454;
            text-align: center;
            text-transform: uppercase;
            font-weight: 700;
            color: white;
            line-height: 36px;
            }

            #social{
                .social-i-container{
                    background-color: white;
                    border-radius: 50%;
                    text-align: center;
                    width: 27px;
                    height: 27px;
                    position: relative;
                    margin: 0 2px;
                }
                i{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    translate: -50% -50%;
                    color: $primary-color;
                    font-size: 15px;
                }
            }

        }

        #middle-banner{
            margin: 20px 0;

            div:first-child img{
                width: 50%;
                height: 100%;
            }

            img{
                border-radius: 5px;
                width: 100%;
                height: 80px;
            }    
        }

        #menu{

            .navbar .offcanvas{
                --bs-offcanvas-width: 600px;

                .offcanvas-body{

                    #canvas-logo{
                        width: 50%;
                    }

                    img{
                        width: 100%;
                        border-radius: 5px;
                    }

                    .canvas-info{
                        
                        i{
                            margin-right: 5px;
                            color: $primary-color;
                        }

                        &:hover{
                            
                            i{
                                color: black;
                            }
                            span{
                                color: $primary-color;
                            }
                        }
                        
                    }

                    #social-canvas .social-i-container{
                        background-color: $primary-color;
                        margin: 0 5px;
                        border-radius: 50%;
                        width: 35px;
                        height: 35px;
                        display: inline-block;
                        position: relative;

                        i{
                            color: white;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            translate: -50% -50%;
                        }
                    }
                }
            }

            ul{
                list-style: none;

                li{
                    display: inline-block;
                    margin: 0 20px;
                    padding-top: 5px;
                }
            }

            a{
                text-decoration: none;
                color: black;
                text-transform: uppercase;
                font-weight: 600;

                &:hover{
                    color: $primary-color;
                }
            }

            #search{
                i{
                    margin-right: 20px;
                    font-size: 30px;
                }
            }
        }
    }
</style>