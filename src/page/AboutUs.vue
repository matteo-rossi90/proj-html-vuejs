<script>
export default {
     name:'AboutUs'
}
</script>

<template>
<!-- header -->
<div class="headerAboutUs d-flex justify-content-center align-items-center"><h3 class="fw-bold white">ABOUT US</h3></div>
<!-- content -->
<div class="container py-5">
    <h3 class="fw-bold">ABOUT ANIME TECH</h3>
    <!-- start improving -->
    <div class="d-flex d-flex justify-content-between">
        <div class="w-100">
            <h1 class="fw-bold">START IMPROVING</h1> 
            <h1 class="fw-bold red">YOUR BUSSINESS TODAY!</h1>
        </div>
        <div class="w-100">
            <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt, vitae assumenda autem molestiae tempora praesentium veritatis. Culpa soluta sunt voluptatem in amet veniam est, eos odit quia provident officiis.<br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt, vitae assumenda autem molestiae tempora praesentium veritatis. Culpa soluta sunt voluptatem in amet veniam est, eos odit quia provident officiis
            </span>
        </div>
    </div>
</div>
    <!-- our mision -->
    
    <div class="d-flex d-flex justify-content-between px">
            <div class="w-100">
                <h1 class="fw-bold">OUR MISSION</h1> 
                <h1 class="fw-bold red">VISION</h1>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt, vitae assumenda autem molestiae tempora praesentium veritatis. Culpa soluta sunt voluptatem in amet veniam est, eos odit quia provident officiis.
                <br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                </p>
            </div>
                <img  src="../../public/imgs/assets/anime-contact.webp" alt="anime contact">
    </div>
   
    <!-- our team -->
    <div class="container  d-flex flex-column py-5 gap-4">
        <h1 class= "text-center fw-bold">OUR TEAM</h1>
        <div class="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <div class="container-fluid text-center violet">
                <div class="row">

                    <div class="col">
                        <div class=boxHover>
                            <img class="member rounded-circle" src="../../public/imgs/assets/team-member.webp" alt="team member">
                            <!-- hover -->
                            <div class= "hoverImg">
                                <div class="d-flex  justify-content-between  align-items-center w-100 px-5">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-x-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-youtube"></i>
                                </div>
                            </div>
                        </div>
                        <h4 class="fw-bold">Cristina A.</h4>
                        <div class="fw-bold red">Founder & Ceo</div>
                    </div>


                    <div class="col">
                        <div class=boxHover>
                            <img class="member rounded-circle" src="../../public/imgs/assets/team-member.webp" alt="team member">
                            <!-- hover -->
                            <div class= "hoverImg">
                                <div class="d-flex  justify-content-between  align-items-center w-100 px-5">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-x-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-youtube"></i>
                                </div>
                            </div>
                        </div>
                        <h4 class="fw-bold">Ennio B.</h4>
                        <div class="fw-bold red">Founder & Ceo</div>
                    </div>


                    <div class="col">
                        <div class=boxHover>
                            <img class="member rounded-circle" src="../../public/imgs/assets/team-member.webp" alt="team member">
                            <!-- hover -->
                            <div class= "hoverImg">
                                <div class="d-flex  justify-content-between  align-items-center w-100 px-5">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-x-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-youtube"></i>
                                </div>
                            </div>
                        </div>
                        <h4 class="fw-bold">Elona H.</h4>
                        <div class="fw-bold red">Founder & Ceo</div>
                    </div>


                    <div class="col">
                        <div class=boxHover>
                            <img class="member rounded-circle" src="../../public/imgs/assets/team-member.webp" alt="team member">
                            <!-- hover -->
                            <div class= "hoverImg">
                                <div class="white d-flex  justify-content-between  align-items-center w-100 px-5">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-x-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-youtube"></i>
                                </div>
                            </div>
                        </div>
                        <h4 class="fw-bold">Matteo R.</h4>
                        <div class="fw-bold red">Founder & Ceo</div>
                    </div>
                </div>
            </div>
        </div>
    <!-- FAQ -->
        <h1 class= "text-center fw-bold">FAQ</h1>
        <div class="container-fluid text-center orange">
            <div class="row row-cols-2">
                <!-- accordeon 1 -->
                <div class="col">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold red" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                A Frequently Asked Question Surrounding Your Service
                            </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold red" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                A Frequently Asked Question Surrounding Your Service
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold red" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                A Frequently Asked Question Surrounding Your Service
                            </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- accordeon 2 -->
                <div class="col">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold red" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                A Frequently Asked Question Surrounding Your Service
                            </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold red" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                A Frequently Asked Question Surrounding Your Service
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold red" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                A Frequently Asked Question Surrounding Your Service
                            </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit</div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</div>
</template>

<style  lang="scss" scoped>
.px {
    background-color: #eeeeee;
    padding-right: 13rem;
    padding-left: 13rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
}

.headerAboutUs {
    background-image: url(../../public/imgs/assets/300x250.webp);
    height: 17rem;
    width: 100%;
    background-size: cover;
    background-position-x: center;
    background-position-y: 53%;
    background-repeat: no-repeat;
}

.container{
    width: 75%;
    margin: 0 auto;
}

img {
    width: 30rem;
}

img.member{
    width:100%;
    height: 15rem;
}

.red {
    color:#bf1d2e
}

.white {
    color:white;
}

// hover
.boxHover{
    position:relative,
}
.hoverImg {
    width: 100%;
    height: 15rem;
    display:none;
    background-color: #bebebe7a;
    position: absolute;
    border-radius: 50%;
    transition: 3s ease;
}

.boxHover:hover .hoverImg {
            display:flex;
            bottom: 0; 
        }
</style>