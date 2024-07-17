
<script>
export default {
    name:'ContactUs'
    
}
</script>

<template>

    <!-- sezione relativa al banner e ai contatti -->
    <section>
        <div class="container-fluid">

            <div class="row">
                 <div class="col" id="banner-contact"></div>
            </div>
           
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4"></div>
                <div class="col-4"></div>
            </div>

        </div>

    </section>

    <!-- sezione relativa al form -->
    <section>
        <div class="row container-fluid">
            <div class="col-7"></div>
            <div class="col-5"></div>
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
    background-color: yellow;
}

.col-4{
    background-color: pink;
    height: 100px;
    border: 1px solid black;
}

.col-7{
    background-color: grey;
    height: 500px;
}

.col-5{
    background-color: rgb(0, 120, 212);
    height: 500px;
}

    
</style>