<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="showGoal">{{ courseGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleDisplay">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { ref } from 'vue';
// import { toRefs, reactive } from 'vue';
// import { reactive } from 'vue';

export default {
  // setup() {
  //   // const courseGoal = ref('Learn Vue');
  //   // const viewGoal = ref(false);

  //   // const toggleDisplay = () => {
  //   //   viewGoal.value = !viewGoal.value;
  //   // }

  //   // return { courseGoal, viewGoal, toggleDisplay };

  //   // const courseGoal = reactive({
  //   //   title: 'Learn Vue',
  //   //   display: false
  //   // })

  //   // const goalRefs = toRefs(courseGoal);

  //   // const toggleDisplay = () => {
  //   //   courseGoal.display = !courseGoal.display;
  //   // }

  //   // return { title: goalRefs.title, display: goalRefs.display, toggleDisplay };

  //   const courseGoal = reactive({
  //     title: 'Learn Vue',
  //     display: false
  //   })

  //   const toggleDisplay = () => {
  //     courseGoal.display = !courseGoal.display;
  //   }

  //   return { toggleDisplay, courseGoal };
  // },
  data() {
    return {
      courseGoal: 'Learn Vue!',
      showGoal: false,
    };
  },
  methods: {
    toggleDisplay() {
      this.showGoal = !this.showGoal;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
