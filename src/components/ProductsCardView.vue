<template>
<section  v-if="products">



<div class="container">
    <div class="row">
<div id="
card" v-for="(product, index) in products" :key="index" class="col-sm-3 text-start">


<img class="rounded" :src="product.prodUrl" alt="">
<h2>{{product.prodName}}</h2>
<h5>Price: R{{product.price}}</h5>
<h5>Quantity: {{product.quantity}}</h5>
<h5>Total Amount: {{product.totalamount}}</h5>
<a :href="product.id">View</a>

        </div>
    </div>
</div>

</section>


    <div v-else>
        <h2>Loading ...</h2>
    </div>


</template>

<script>

export default {
mounted() {
        this.$store.dispatch("getproducts")
    },
    computed: {
        products() {
            return this.$store.state.products
        }
        }
}
</script>

<style scoped>
img{
 width: 60%;
 height: 40%;
}

#card{
    background-color: rgb(173, 166, 166);
}
</style>