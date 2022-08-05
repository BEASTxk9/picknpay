<template>
     <div class="container">
        <div class="row">
            <div class="col-sm-8">
                <form action="/register" method="POST">
                    <!-- firstname -->
                    <input type="text" placeholder="firstname" v-model="firstname"><br>

<!-- lastname -->
                    <input type="text" placeholder="lastname" v-model="lastname"><br>

<!-- gender -->
                    <input type="text" placeholder="gender" v-model="gender"><br>
<!-- address -->
                    <input type="text" placeholder="address" v-model="address"><br>
<!-- userole -->
                    <input type="text" placeholder="userole" name="userRole"><br>
<!-- email -->
                    <input type="text" placeholder="email" v-model="email"><br>
<!-- password -->
                    <input type="password" placeholder="userpassword" v-model="userpassword"><br>
<!-- buttonn -->
                    <button v-on:click="submit">register</button>
                </form>
            </div>
        </div>
     </div>




   
</template>

<script>
export default {
data() {
        return {
            name: "",
            lastname: "",
            gender: "",
            address: "",
            userRole: "",
            email: "",
            userpassword: "",
        }
    },
methods: {
        register() {
            // Fetches register function in store and passes values to it
            return this.$store.dispatch("register", {
                firstname: this.name,
                lastname: this.lastname,
                gender: this.gender,
                address: this.address,
                userRole: this.userRole,
                email: this.email,
                password: this.password,
            })
        },
    },
    computed: {
        // returns value from store
        user() {
            return this.$store.state.user
        },
    }
}

</script>

<style>

</style>