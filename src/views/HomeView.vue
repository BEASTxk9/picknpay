<template>
  <div class="home">
    <div class="container">
<a href="/products">Shop</a>
      <div id="row-1" class="row mx-auto">
        <!-- logo -->
        <div class="col-12">
          <h3>
            <span id="s1">P</span><span id="s5">ick</span
            ><span id="s2">'n <span id="s3">P</span>ay</span>
            <span id="s4">Online</span>
          </h3>
        </div>

        <!-- toggle button -->
        <div class="col-12 justify-content-center">
          <h1>
            <router-link to="/">
              <button
                @click="
                  logshow = !logshow;
                  regshow = false;
                "
              >
                Login
              </button>
            </router-link>
            <router-link to="/">
              <button to="/products"
                @click="
                  regshow = !regshow;
                  logshow = false;
                "
              >
                Register
              </button>
            </router-link>
          </h1>
        </div>
      </div>


      <!-- _____________________________ -->
      <!-- collapse data -->
      <div class="row">

        <!-- login -->
        <div id="log" class="col-6">
          <form v-if="logshow" action="/login" method="POST">
            <input type="text" v-model="lemail" placeholder="Email" /><br />
            <input type="password" v-model="lpassword" placeholder="Password" />
            <br />
            <button to="/products" type="submit">Log in</button>
          </form>
        </div>


        <!-- register -->
        <div id="reg" class="col-6">
          <form
            v-if="regshow"
            action="/register"
            method="POST"
          >
            <!-- firstname -->
            <input
              type="text"
              placeholder="firstname"
              v-model="firstname"
            /><br />

            <!-- lastname -->
            <input
              type="text"
              placeholder="lastname"
              v-model="lastname"
            /><br />

            <!-- gender -->
            <input type="text" placeholder="gender" v-model="gender" /><br />
            <!-- address -->
            <input type="text" placeholder="address" v-model="address" /><br />
            <!-- userole -->
            <input type="text" placeholder="userole" name="userRole" /><br />
            <!-- email -->
            <input type="text" placeholder="email" v-model="email" /><br />
            <!-- password -->
            <input
              type="password"
              placeholder="userpassword"
              v-model="userpassword"
            /><br />
            <!-- buttonn -->
            <button v-on:click="submit">register</button>
          </form>
        </div>


      </div>


    </div>
  </div>
</template>
<script>


export default {
  name: "HomeView",
  components: {

  },
  data() {
    return {
      logshow: false,
      regshow: false,
    };
  },
};
</script>
<style scoped>
nav {
  display: none;
}
button {
  margin: 10px;
  font-size: 20px;
  width: 120px;
  border-radius: 5px;
  font-family: "Nunito", sans-serif;
  background-color: rgb(158, 1, 60);
  color: white;
  border-color: white;
  outline: none;
  transition: 0.5s;
  padding: 5px;
}
button:hover {
  background-color: rgb(0, 48, 85);
}
/* a{
 
} */
#row-1 {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 210px;
  font-family: "Nunito", sans-serif;
  /* position: relative;
  top: 10px;
  left:120px; */
}
#log {
  display: flex;
  justify-content: flex-end;
}
#reg {
  display: flex;
  justify-content: flex-start;
  position: relative;
}
form {
  padding: 40px;
  background-color: transparent;
  border: 4px solid rgb(0, 48, 85);
  border-radius: 7px;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.31);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
}
input {
  background-color: rgba(255, 255, 255, 0.825);
  color: black;
  width: 150px;
}
h3 {
  color: rgb(158, 1, 60);
  font-size: 55px;
  font-family: "Nunito", sans-serif;
  /* background-color:rgba(168, 6, 6, 0.808) ; */
  padding: 5px;
  border-radius: 10px;
  text-align: center;
}
h1 {
  text-align: center;
}
#s1 {
  color: white;
  font-size: 60;
  font-family: "Nunito", sans-serif;
  background-color: rgb(0, 48, 85);
  border-radius: 7px;
  /* padding-top: 2px;
  padding-bottom: 2px; */
  padding-left: 15px;
  padding-right: 15px;
}
/* #s2{
} */
#s3 {
  color: white;
  font-size: 60;
  font-family: "Nunito", sans-serif;
  background-color: rgb(158, 1, 60);
  border-radius: 7px;
  /* padding-top: 2px;
  padding-bottom: 2px; */
  padding-left: 15px;
  padding-right: 15px;
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
}
#s5 {
  color: rgb(0, 48, 85);
}
.home {
  background: linear-gradient(rgba(254, 250, 250, 0.516), rgba(0, 0, 0, 0.6)),
    url("https://i.postimg.cc/kG6ZSrKx/grocery-1232944.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  object-fit: cover;
  overflow-x: hidden;
  overflow-y: hidden;
}
/* img{
    width: 1200px;
    height: 550px;
    object-fit: contain;
}*/
/* h2{
  font-size: 25px;
  font-family:Georgia, 'Times New Roman', Times, serif ;
} */
@media only screen and (max-width: 425px) {
  img {
    margin-top: 50px;
    height: 200px;
  }
  h2 {
    margin-top: 20px;
  }
}
</style>
