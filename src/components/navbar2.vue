<template>
   <nav>
    <router-link to="/">Pick 'n Pay</router-link> 
    
    <router-link to="/products">The Food Aisle</router-link> 
    
  </nav>
  <router-view/>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
  
  padding: 30px;
  font-family: 'Nunito', sans-serif;
  height: 10vh;
  
}


nav a {
  font-weight: bold;
  background-color: rgb(250,4,81);
  color: white;
  padding: 10px;
  text-decoration: none;
  transition: 0.5s;
  border-radius: 15px;
  margin: 0.3rem; 

  
}
nav a:hover{
  color: white;
}


nav a.router-link-exact-active {
  background-color:rgb(4,24,249);
  
}


</style>