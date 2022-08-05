<template>
  <section id="admin">

<div class="container" v-if="products">

<!-- nav -->
    <div class="row justify-content-center pt-3">
        <div id="sidenav" class="col-sm-1 logo">
            <p>ADMIN</p>
        </div>

        <div id="table" class="col-sm-8">

  <h6 id="logo" class="py-1 text-end">
            <span id="s1">P</span><span id="s5">ick</span
            ><span id="s2">'n <span id="s3">P</span>ay</span>
            <span id="s4">Online</span>
          </h6>
        
              
        </div>
    </div>


<div class="row justify-content-center">
<!-- side nav -->
<div id="sidenav" class="col-sm-1 text-start">
<nav>

    <router-link to="/products">Shop</router-link><br>
      <router-link to="/Admin"><i class="fa-solid fa-user"></i></router-link>

  </nav>
</div>
<!-- table -->
<div id="table" class="col-sm-8">
<table class="table table-border">
    <thead>
        <th>ID</th>
        <th>Product</th>
        <th>Image</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Date Created</th>
    </thead>
    <tbody>

        <tr v-for="(product, index) in products" :key="index">
 <td>{{product.id}}</td>
  <td>{{product.prodName}}</td>
  <td><img class="rounded text-center justify-content-center mx-1" :src="product.prodUrl" alt="" defer></td>
    <td>R{{product.price}}</td>
    <td>{{product.quantity}}</td>
    <td>{{product.dateCreated}}</td>
        </tr>

    </tbody>
</table>
</div>

</div>

</div>

<div v-else>
        <h2>Please wait or restart the page...</h2>
    </div>
  </section>
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
#table{
    border-left: 0.5px solid rgba(128, 128, 128, 0.282);
    border-top: 0.5px solid rgba(128, 128, 128, 0.282);
    border-right: 0.5px solid rgba(128, 128, 128, 0.282);
}

thead{
    border-bottom: 0.5px solid rgba(128, 128, 128, 0.282);
    font-size: 1.5rem;
}

#sidenav{
       border-top: 0.5px solid rgba(128, 128, 128, 0.282);
           border-left: 0.5px solid rgba(128, 128, 128, 0.282);
}

nav a{
font-size: 1.5rem;
justify-content: start;
color: black;
text-decoration: none;
}

img{
    height: 20%;
    width: 20%;
}

#logo{
    font-weight: 700;
}

#s1 {
  color: white;
  font-size: 60;
  font-family: "Nunito", sans-serif;
  background-color: rgb(0, 48, 85);
  border-radius: 7px;
  /* padding-top: 2px;
  padding-bottom: 2px; */
  padding-left: 6px;
  padding-right: 6px;
}
/* #s2{
} */
#s3 {
  color: white;
  font-size: 60;
  font-family: "Nunito", sans-serif;
  background-color: rgb(191, 15, 36);
  border-radius: 7px;
  /* padding-top: 2px;
  padding-bottom: 2px; */
  padding-left: 6px;
  padding-right: 6px;
}
#s4 {
  color: white;
  font-size: 60;
  font-family: "Nunito", sans-serif;
  background-color: rgb(0, 48, 85);
  /* padding-top: 2px;
  padding-bottom: 2px; */
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 7px;
  margin-left: 5px;
}
#s5 {
  color: rgb(0, 48, 85);
}
</style>