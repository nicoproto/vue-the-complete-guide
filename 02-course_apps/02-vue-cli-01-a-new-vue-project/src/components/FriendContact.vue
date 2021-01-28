<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "⭐️" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">
      {{ isFavorite ? "Remove" : "Save" }} favorite
    </button>
    <button @click="deleteFriend">
      Delete
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phone }}</li>
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["id", "name", "phone", "email", "isFavorite"],
  // props: {
  //   id: {
  //     type: String,
  //     required: true,
  //   },
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  //   phoneNumber: {
  //     type: String,
  //     required: true,
  //   },
  //   emailAddress: {
  //     type: String,
  //     required: true,
  //   },
  //   isFavorite: {
  //     type: Boolean,
  //     required: false,
  //     default: false,
  //   },
  // },
  emits: ['toggle-favorite', 'delete-friend'],
  // emits: {
  //   'toggle-favorite': (id) => {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn('Id is missing!');
  //       return false;
  //     }
  //   }
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
    deleteFriend() {
      this.$emit('delete-friend', this.id);
    }
  },
};
</script>
