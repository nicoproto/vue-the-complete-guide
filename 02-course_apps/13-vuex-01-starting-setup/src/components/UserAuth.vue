<template>
  <button v-if="!isAuth" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>
  <p>{{ testAuth }}</p>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      isAuth: 'userIsAuthenticated',
      testAuth: 'numbers/testAuth'
    })
  },
  methods: {
    ...mapActions(['login', 'logout']),

  }
}
</script>