
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
                <div class="col" id="banner-contact">
            </div>
            
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4"></div>
                <div class="col-4"></div>
            </div>

            </div>

        </div>

    </section>
    
</template>

<style lang="scss">
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

    
</style>