
<script>
export default {
    name:'AppFooter'
}
</script>

<template>
    <footer>
        <div class="container ">
            <div class="row justify-content-center">
                <div class="col-2">
                    <h3>GET STARTED </h3>
                </div>
                <div class="col-2">
                    <h3>ABOUT </h3>  
                </div>
                <div class="col-2">
                    <h3>FEATURES </h3>
                </div>
                <div class="col-2">
                    <h3>QUICK LINKS</h3>
                </div>
                <div class="col-3">
                    <h3>SUBSCRIPT</h3>
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
 height: 400px;
    .col-2, .col-3{
        background-color: $secondary-color;
        height: 100px;
        border: solid 0.5px black;
            h3{
                color: $secondary-color;
            }
    }

}

    
</style>