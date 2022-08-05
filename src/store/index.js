import {
  createStore
} from 'vuex'
import axios from 'axios'
// const picknpayUrl = "https://pick-n-pay-duo-project.herokuapp.com"; 
export default createStore({
  state: {
    products: null
  },
  getters: {
  },
  mutations: {
    setproducts: (state, products) => {
      state.products = products
    },

  },
  actions: {
getdata: async (context) => {
  fetch("https://pick-n-pay-api.herokuapp.com/")
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

    register: async (context, user) => {
      fetch("https://picknpay-apitest.herokuapp.com/register", {
        method: "POST",
        body: JSON.stringify(
          user
        ),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() =>(context.dispatch("getProducts")))
        // .then(() => (context.commit("setuser" , user)))
        router.push({name: "products"})
    },
  },
  modules: {
  }
})
