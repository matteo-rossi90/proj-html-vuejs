<script>
export default {
    name:'AppHeader'
}
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

    }
</style>