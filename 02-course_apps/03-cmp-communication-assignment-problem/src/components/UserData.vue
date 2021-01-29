<template>
  <form @submit.prevent="updateUser">
    <div>
      <input type="text" v-model="name" placeholder="Your name">
    </div>
    <div>
      <input type="text" v-model="age" placeholder="Your age">
    </div>
    <button type="submit">Update info</button>
  </form>
</template>

<script>
export default {
  emits: {
    'update-user': (name, age) => {
      if (name === '' || age === '') {
        return false;
      } else {
        return true;
      }
    }
    },
  data() {
    return {
      name: '',
      age: ''
    }
  },
  methods: {
    updateUser() {
      this.$emit('update-user', this.name, this.age);
    }
  }
}
</script>