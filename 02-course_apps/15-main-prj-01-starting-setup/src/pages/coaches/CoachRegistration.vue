<template>
  <base-card>
    <h2>Register as a coach now!</h2>
    <coach-form @save-data="saveData"></coach-form>
  </base-card>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      // Doesn't allow us to go back, good for submiting forms
      this.$router.replace('/coaches');
    }
  }
}
</script>