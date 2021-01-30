<template>
  <ul>
    <learning-item
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-item>
  </ul>
</template>

<script>
import LearningItem from './LearningItem.vue';

export default {
  inject: ['resources'],
  components: {
    LearningItem
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>