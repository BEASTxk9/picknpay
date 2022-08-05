<template>
<div class="container">
    
    <Navbar></Navbar>
    <div v-if="products" class="products">
   
        <div v-for="(product, index) in products" :key="index">
            <h2>Next Customer Please teller 5..</h2>

            make it look like a shelf
            <h2>{{product.prodName}}</h2>
            <img :src="product.prodUrl" alt="">
        </div>
    </div>

    <div v-else>
        <h2>Loading ...</h2>
    </div>
</div>
</template>

<script>
import Navbar from "../components/navbar2.vue"
export default {
   components: {
    Navbar
   },

    mounted() {
        this.$store.dispatch("getproducts")
    },
    computed: {
        products() {
            return this.$store.state.products
        }
    },
};

</script>

<style scoped>
.container{
    height: 90vh;
}
.products {
    height: 80vh;
}

img {
    width: 1200px;
    height: 600px;
}

h2 {
    font-size: 25px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}


</style>