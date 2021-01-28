<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="nameInput" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="phoneInput" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="emailInput" />
    </div>
    <div>
      <button>Add Friend</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      nameInput: "",
      emailInput: "",
      phoneInput: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-friend",
        this.nameInput,
        this.emailInput,
        this.phoneInput
      );
      this.nameInput = this.emailInput = this.phoneInput = "";
    },
  },
};
</script>
