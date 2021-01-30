<template>
  <section>
    <base-card>
      <template #header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template #default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
import BaseBadge from './UI/BaseBadge.vue';
import BaseCard from './UI/BaseCard.vue';

export default {
  components: {
    BaseBadge,
    BaseCard,
  },
  props: ['fullName', 'infoText', 'role'],
};
</script>
