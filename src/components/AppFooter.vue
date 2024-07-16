
<script>
export default {
    name:'AppFooter'
}
</script>

<template>
    <div class="container ">
        <div class="flex-row">
            <div class="col-2"></div>
            <div class="col-2"></div>
            <div class="col-2"></div>
            <div class="col-2"></div>
            <div class="col-4"></div>
        </div>
        
    </div>
</template>

<style lang="scss">
@use '../style/generals.scss' as *;
@use 'src/style/partials/_variables.scss' as *;
@use 'src/style/partials/_mixins.scss' as *;

.container{
 background-color: $primary-color;
 height: 300px;
    .col-2{
        background-color: $secondary-color;
        height: 100px;
    }
}

    
</style>