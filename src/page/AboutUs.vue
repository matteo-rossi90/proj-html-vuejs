<script>
export default {
     name:'AboutUs'
}
</script>

<template>
<!-- header -->
<div class="headerAboutUs d-flex justify-content-center align-items-center">About Us</div>
<!-- content -->
<div class="container">
    <div>About Anime Tech</div>
    <!-- start improving -->
    <div class="d-flex d-flex justify-content-between pink">
        <div class="w-100">
            <h1>START IMPROVING</h1> 
            <h1>YOUR BUSSINESS TODAY</h1>
        </div>
        <div class="w-100">
            <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt, vitae assumenda autem molestiae tempora praesentium veritatis. Culpa soluta sunt voluptatem in amet veniam est, eos odit quia provident officiis.<br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
        </div>
    </div>
    <!-- our mision -->
    <div class="d-flex d-flex justify-content-between green">
        <div class="w-100">
            <h1>OUR MISSION</h1> 
            <h1>VISION</h1>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt, vitae assumenda autem molestiae tempora praesentium veritatis. Culpa soluta sunt voluptatem in amet veniam est, eos odit quia provident officiis.<br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
            <img  src="../../public/imgs/assets/anime-contact.webp" alt="anime contact">
    </div>
    <!-- our team -->
    <h1 class= "text-center">OUR TEAM</h1>
    <div class="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        <div class="container-fluid text-center violet">
            <div class="row">
                <div class="col">
                <img class="member rounded-circle" src="../../public/imgs/assets/team-member.webp" alt="team member">
                <h4>David Anderson</h4>
                <div>Founder & Ceo</div>
                </div>
                <div class="col">
                <img class="member rounded-circle" src="../../public/imgs/assets/team-member.webp" alt="team member">
                <h4>David Anderson</h4>
                <div>Founder & Ceo</div>
                </div>
                <div class="col">
                <img class="member rounded-circle" src="../../public/imgs/assets/team-member.webp" alt="team member">
                <h4>David Anderson</h4>
                <div>Founder & Ceo</div>
                </div>
                <div class="col">
                <img class="member rounded-circle" src="../../public/imgs/assets/team-member.webp" alt="team member">
                <h4>David Anderson</h4>
                <div>Founder & Ceo</div>
                </div>
            </div>
        </div>
    </div>
    <!-- FAQ -->
    <h1 class= "text-center">FAQ</h1>
        <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       A Frequently Asked Question Surrounding Your Service
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        A Frequently Asked Question Surrounding Your Service
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        A Frequently Asked Question Surrounding Your Service
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
</div>
</template>

<style  lang="scss" scoped>

// debug
.pink {
    background-color: pink;
}

//debug
.green {
    background-color: greenyellow;
}

//debug
.violet {
    background-color: rgb(177, 113, 175);
}
.headerAboutUs {
    // background-image: url(../../public/imgs/assets/300x250.webp);
    // debug
    height: 17rem;
    width: 100%;
    background-color: #93232ee3;
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
}
</style>