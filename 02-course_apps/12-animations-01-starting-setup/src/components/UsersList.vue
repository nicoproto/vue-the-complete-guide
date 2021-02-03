<template>
  <div>
    <input type="text" v-model.trim="newUser" v-on:keyup.enter="addUser">
    <button @click="addUser">Add User</button>
  </div>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
  </transition-group>
</template>

<script>
export default {
  data() {
    return {
      users: ['Robert', 'Landon', 'Nico', 'Nacho', 'Vincent'],
      newUser: '',
    };
  },
  methods: {
    addUser() {
      if (this.newUser) {
        this.users.unshift(this.newUser);
        this.newUser = '';
      }
    },
    removeUser(user) {
      const index = this.users.indexOf(user);
      if (index > -1) {
        this.users.splice(index, 1);
      }
    }
  }
};
</script>

<style scoped>
div {
  margin-bottom: 1rem;
}

input {
  margin-right: 1rem;
  height: 32px;
  border-radius: 16px;
}
input:focus {
  outline: none;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  border: 1px solid #cccc;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.user-list-enter-active {
  transition: all 0.5s ease;
}

.user-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

.user-list-leave-active {
  transition: all 0.5s ease;
  position: absolute; /* Need this for removing item list animation */
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.user-list-move {
  transition: transform 0.8s ease;
}


</style>