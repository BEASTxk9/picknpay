<template>

<div class="container mb-3">
  <div class="row justify-content-center">

    <div class="col-sm-5 text-start">
      <h3 id="logo">
            <span id="s1">P</span><span id="s5">ick</span
            ><span id="s2">'n <span id="s3">P</span>ay</span>
            <span id="s4">Online</span>
            <input type="text" placeholder="Im looking for ..."><button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
          </h3>
    </div>

<div class="col-sm-5 text-end justify-content-end">
<nav>

    <router-link to="/products">Shop</router-link>
     <router-link to="/">Login</router-link>
      <router-link to="/">Register</router-link>
      <router-link to="/Admin"><i class="fa-solid fa-user"></i></router-link>

  </nav>
</div> 

  </div>
</div>
   
  <router-view/>
</template>

<script>
export default {

}
</script>

<style scoped>
.row { 
  padding-top: 20px;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  font-family: 'Nunito', sans-serif;
  height: 10vh; 
}
/* logo */
#logo{
  position: relative;
  top: -7px;
  left: -7rem;
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


nav a {
  font-weight: bold;
  background-color: rgb(250,4,81);
  color: white;
  padding: 10px;
  text-decoration: none;
  transition: 0.5s;
  border-radius: 10px;
  margin: 0.2rem; 
 text-align: end;
 justify-content: end;
 position: relative;
 left: 7rem;
  
}

nav a:hover{
  color: white;
}

nav a.router-link-exact-active {
  background-color:rgb(4,24,249);
  
}

input, button{
  border: 1px solid rgba(128, 128, 128, 0.141);
  border-radius: 5px;
  margin: 10px;
  background: transparent;
  padding: 5px;
}




</style>