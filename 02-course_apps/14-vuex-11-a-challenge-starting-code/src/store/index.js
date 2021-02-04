import { createStore } from 'vuex';

import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
import productsModule from './modules/products/index.js';
import cartModule from './modules/cart/index.js';

const store = createStore({
  modules: {
    products: productsModule,
    cart: cartModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  getters,
  mutations,
  actions
})

export default store;