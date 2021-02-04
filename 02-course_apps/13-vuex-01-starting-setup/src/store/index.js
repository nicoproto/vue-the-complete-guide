import {
  createStore
} from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
import counterModule from './counter/index.js';

const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations,
  actions,
  getters
});

export default store;