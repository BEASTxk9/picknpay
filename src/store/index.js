import {
  createStore
} from 'vuex'
import axios from 'axios'
// const picknpayUrl = "https://pick-n-pay-duo-project.herokuapp.com"; 
export default createStore({
  state: {
    products: null
  },
  getters: {},
  mutations: {
    setproducts: (state, products) => {
      state.products = products
    }
  },
  actions: {
    // get products'
    getproducts: async (context) => {
      let res = await fetch("https://pick-n-pay-api.herokuapp.com/products");
      let data = await res.json();
      let result = data.results;
      if(result){
        context.commit("setproducts", result)
      }else{
        console.log("Loading....");
      }
        
      /*
      {
        headers: {
          'x-access-token':'',
          'Access-Control-Allow-Origin': '*'
        }
      */
      // let res = await axios.get("https://pick-n-pay-duo-project.herokuapp.com/products");
      // let data = await res.data.results;
      // console.log(data);
      // if(data) {
      //   context.commit('setproducts', data);
      // }
    }
  },
  modules: {}
})