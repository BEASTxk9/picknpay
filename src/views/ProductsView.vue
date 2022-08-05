<template>

<Nav></Nav>

  <ProductCard></ProductCard>

</template>

<script>
import ProductCard from '../components/ProductsCardView.vue';
import Nav from '../components/navbar2.vue';

export default {
components: {
    ProductCard,
    Nav
},
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

</style>