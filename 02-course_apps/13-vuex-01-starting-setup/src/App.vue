<template>
  <base-container title="User Auth">
    <user-auth></user-auth>
  </base-container>

  <base-container v-if="isAuth" title="Vuex">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="increase">Add {{ increaseValue }}</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  data() {
    return {
      increaseValue: 5
    }
  },
  computed: {
    ...mapGetters({
      isAuth: 'userIsAuthenticated'
    })
  },
  methods: {
    increase() {
      this.$store.dispatch({
        type: 'numbers/increase',
        value: this.increaseValue
      })
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>