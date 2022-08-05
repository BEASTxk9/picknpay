<template>

<!-- navbar.vue fake nav cause code is dumb (-_-)7 -->
  <Nav></Nav>
    
</template>

<script>
import Nav from "./components/navbar.vue"

export default {
   components: {
    Nav
   }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
