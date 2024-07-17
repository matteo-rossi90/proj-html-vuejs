
<script>
export default {
    name:'ContactUs'
    
}
</script>

<template>

    <!-- sezione relativa al banner e ai contatti -->
    <section>
        <div class="container-fluid">

            <!-- banner -->
            <div class="row">
                 <div class="col">
                    <div id="banner-contact" class="d-flex justify-content-center align-items-center">
                        <h2>About us</h2>
                    </div>
                 </div>
            </div>
           
            <!-- riferimenti per i contatti -->
            <div class="row container-fluid container-box py-4 g-5">

                <div class="col px-2">
                    <div class="box-contact p-2 d-flex align-items-center">
                        <div class="box-icon d-flex justify-content-center align-items-center p-3">
                             <i class="fa-solid fa-phone-volume"></i>
                        </div>
                        <span>
                            <div class="text p-3">
                                <h4>CALL US</h4>
                                <small>02 90 222 333</small>
                            </div>
                        </span>
                    </div>
                    
                </div>

                <div class="col px-2">
                    <div class="box-contact p-2 d-flex align-items-center">
                        <div class="box-icon d-flex justify-content-center align-items-center p-3">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <span>
                            <div class="text p-3">
                                <h4>EMAIL US</h4>
                                <small>info@domain.com</small>
                            </div>
                        </span>
                    </div>
                    
                </div>

                <div class="col px-2">
                    <div class="box-contact p-2 d-flex align-items-center">
                        <div class="box-icon d-flex justify-content-center align-items-center p-3">
                             <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <span>
                            <div class="text p-3">
                                <h4>POSITION US</h4>
                                <small>3308 Fleming Street</small>
                            </div>
                        </span>
                    </div>
                    
                </div>

            </div>

        </div>

    </section>

    <!-- sezione relativa al form -->
    <section>
        <div class="row container-fluid container-box my-5">

            
            <div class="col-7">

                <!-- intestazione e paragrafo -->
                <div class="py-4">
                    <h2 class="my-3">GET IN TOUCH</h2>
                    <p class="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <!-- parte del form -->
                <form class="row pe-3">

                    <!-- Nome -->
                    <div class="col-md-6 pe-2 mb-3">
                        <label for="inputName" class="form-label">Name</label>
                        <input type="email" class="form-control" id="inputEmail4">
                    </div>

                    <!-- Cognome -->
                    <div class="col-md-6 mb-3">
                        <label for="inputLastName" class="form-label">Last name</label>
                        <input type="email" class="form-control" id="inputLastName">
                    </div>

                    <!-- mail -->
                    <div class="col-md-6 pe-2 mb-3">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4">
                    </div>

                    <!-- telefono -->
                    <div class="col-md-6 mb-3">
                        <label for="inputPhone" class="form-label">Phone</label>
                        <input type="Phone" class="form-control" id="inputPhone">
                    </div>

                    <!-- messaggio di testo -->
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <!-- pulsante per l'invio delle informazioni -->
                    <div class="col-12 d-flex justify-content-end">
                        <button type="submit" class="btn py-2 px-4 btn-send">
                            <span>SEND MESSAGE</span>
                        </button>
                    </div>
                </form>
            </div>

            <!-- immagine -->
            <div class="col-5">
                <div id="box-image" class="ps-3">
                    <img src="/imgs/assets/anime-contact.webp" alt="">
                </div>
            </div>
        </div>
    </section>

    <!-- sezione relativa alla mappa e ai riferimenti geografici -->
    <section>
        <div class="row container-fluid">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5571774233263!2d-0.12169171831549892!3d51.502993197356524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7be3d9791%3A0x67bb55b5c4867f8c!2sLondon%20Eye%20Ticket%20Office!5e0!3m2!1sit!2sit!4v1721207445926!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
    
</template>

<style lang="scss" scoped>
@use '../style/generals.scss' as *;
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

#banner-contact{
    height: 200px;
    background-image: url('/imgs/assets/300x250.webp');
    background-color: rgba(0,0,0,0.6);
    background-size: 100%, cover;
    background-position-x: center;
    background-position-y: 80%;
    background-repeat: no-repeat;

    h2{
        color: white;
    }
}

.container-box{
    margin: 0 auto;
    width: 80%;

}

.box-contact{
    background-color: $tertiary-color;
    height: 100%;
    border-radius: 5px;

    .box-icon{
        border-radius: 100%;
        background-color: $primary-color;
        height: 60px;
        width: 60px;

        i{
            text-align:center;
            font-size: 30px;
            color: white;
        }
    }
}

.btn-send{
    background-color: $primary-color;
    color: white;
    border-radius: 20px;
    transition: 0.5s;

    &:hover{
        background-color: $quaternary-color;
    }
}

#box-image{
    height: 100%;
    width: 100%;

    img{
        max-width: 100%;
        border-radius: 5px;
    }
}

    
</style>