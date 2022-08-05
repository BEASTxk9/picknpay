<template>
  <div class="container">
    <div class="">
        <h2>Sign In</h2>
        <form @submit.prevent="login">
            <input type="text" v-model="email" placeholder="Email" /><br>
            <input type="text" v-model="password" placeholder="Password" /> <br>
            <button type="submit">Sign In</button>
        </form>
    </div>
  </div>  
</template>

<script>
export default {

}
</script>

<style>

</style>