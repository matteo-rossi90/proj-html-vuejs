<script>
export default {
    name:'AppHeader'
}
</script>
<template>
    <header>
        <section id="top-banner">
            <div class="container">
                <div id="updates">news updates</div>

            </div>
        </section>

        <section>
            <div class="container">
    
            </div>
        </section>
    </header>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    .container{
        margin: 0 10%;

        #updates{
            text-transform: uppercase;
            padding: 10px;
            background-color: #545454;
            color: white;
        }

        #social{

        }
    }

    #top-banner{
        background-color: $primary-color;
        min-height: 35px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>