import { createStore } from 'vuex'

export default createStore({
  state: {
    cartItems:[]
  },
  getters: {
    cartItemCount: state => {
      return state.cartItems.length
},
  getcartItem: state => {
    return state.cartItems
}
},
  mutations: {
    ADD_TO_CART(state, product) {
      state.cartItems.push({...product, qty:1})
  },
  REMOVE_FROM_CART(state,product){
    state.cartItems=state.cartItems.filter(item => item.id !=product.id)

  },
  CLEAR_CART(state){
    state.cartItems=[]
  }
},
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product)
    },
    RemoveFromCart({commit},product){
      commit('REMOVE_FROM_CART',product)

    },
    ClearCart({commit}){
      commit('CLEAR_CART')
    }

  },
  modules: {
  }
})
