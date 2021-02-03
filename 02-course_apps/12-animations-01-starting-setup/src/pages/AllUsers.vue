<template>
  <div class="container">
    <h2>All Users</h2>
    <router-link
      :to="courseGoalsLink">
      go to course goals
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    courseGoalsLink() {
      return {
        name: 'goals'
      };
    }
  }
}
</script>