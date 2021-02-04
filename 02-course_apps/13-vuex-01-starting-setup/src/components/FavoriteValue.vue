<template>
  <h3>Fav value: {{ counter }}</h3>
  <p>We do more here...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters['numbers/normalizedCounter']
    }
  }
}
</script>