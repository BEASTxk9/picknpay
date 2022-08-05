import {
  createStore
} from 'vuex'
import axios from 'axios';
// Picknpay url
const picknpayUrl = "https://pick-n-pay-api.herokuapp.com/";

 
export default createStore({
  state: {
    users: null,
    products: null
  },

  getters: {
    getUsers: state => state.users,
    getProducts: state => state.products
  },

  mutations: {
  setUsers(state, values) {
      state.users = values
    },

    setproducts: (state, products) => {
      state.products = products
    },
  },

  actions: {
// get users
fetchUsers: async (content) => {
  let res = await axios.post(picknpayUrl+"register", data);
  let {results } = await res.data;
  if(results) {
    content.commit('setUsers', results);
  }else{
    console.log("There is no data");
  }
},

    //Signup
    signUp: async (context, playload)=> {
      let {firstname, lastname, gender, address, userole, email, userpassword} = playload;
      const data = {
        firstname, 
        lastname, 
        gender,
        address,
        userole, 
        email,
        userpassword
      };
      let res = await axios.post(picknpayUrl+"register", data);
      let results = await res.json();
      console.log(results);
      if(results) {
        context.commit('setUsers', results);
      }else {
        console.error("No dota");
      }
    },

// get products
    getproducts: async (context) => {
      let res = await fetch('https://pick-n-pay-api.herokuapp.com/products');
      let data = await res.json();
      let result = data.results;
      if(result){
        context.commit('setproducts', result)
      }else{
        console.log('loading...')
      }
    },

   
  },
  modules: {
  }
})
