
<script>
export default {
    name:'AppFooter'
}
</script>

<template>
    <footer>
        <div class="container ">
            <div class="row justify-content-center ">
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
                <div class="col-3 d-flex flex-column mt-5 mb-5">
                    <h5><a href="#">SUBSCRIBE TO NEWSLETTER</a></h5>
                    <form action="subscription">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email">
                        <button type="button" class="btn subs_bt" data-bs-toggle="button">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
            <!-- <hr> -->
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../style/generals.scss' as *;
@use 'src/style/partials/_variables.scss' as *;
@use 'src/style/partials/_mixins.scss' as *;

footer{
 background-color: $primary-color;
 height: 400px;
    .col-2, .col-3{
        height: 200px;
            //remuvin style decoration defoult from li and a tag 
            li{
                list-style: none;
                line-height: 2rem;
                  
            }
            a{
                text-decoration: none;
            }
            // color of links 
            h5, a{
                color:$secondary-color;
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
    }
    // hr{
    //     color:$secondary-color;
    //     border: solid 1px;
    // }
}

    
</style>