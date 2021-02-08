<template>
  <section class="container">
    <user-data :firstName="firstName" :lastName="lastName"></user-data>
    <button @click="setNewAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set last name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
  props: [],
  components: {
    UserData
  },
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const uAge = ref(32);

    provide('userAge', uAge)
    // computing properties are read only, NOT WRITE
    const fullName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    // watch(uAge,(newValue, oldValue) => {
    //   console.log('Old value: ' + oldValue);
    //   console.log('New value: ' + newValue);
    // });

    watch([uAge, firstName],(newValues, oldValues) => {
      console.log('Old value: ' + oldValues[0]);
      console.log('New value: ' + newValues[0]);

      console.log('Old value: ' + oldValues[1]);
      console.log('New value: ' + newValues[1]);
    });

    const setNewAge = () => {
      uAge.value = 30;
    };

    const setLastName = () => {
      lastName.value = lastNameInput.value.value;
    };


    return {
      age: uAge,
      setNewAge,
      firstName,
      lastName,
      lastNameInput,
      fullName,
      setLastName
    };
  },
  // watch: {
  //   age(val) {
  //     console.log(val);
  //   }
  // },
  // provide() {
  //   return { age: this.age };
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
