<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setNewAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name">
      <input type="text" placeholder="Last Name">
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue';
// import { toRefs } from 'vue';

export default {
  props: [],
  components: {},
  setup() {
    // const uName = ref('Nicolás');
    // const uAge = ref(32);

    const user = reactive({
      name: 'Nico',
      age: 32
    })

    const setNewAge = () => {
      user.age = 30;
    };

    return { user, setNewAge };

    // const userRefs = toRefs(user);

    // return { userName: userRefs.name, userAge: userRefs.age };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  // methods: {
  //   setNewAge() {
  //     this.user.age = 30;
  //   }
  // }
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>