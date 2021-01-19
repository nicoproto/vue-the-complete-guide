const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [],
      user: {
        name: 'Nico',
        age: 32,
      }
    };
  },
  methods: {
    addGoal() {
      if (this.enteredGoalValue != '') {
        this.goals.push(this.enteredGoalValue);
        this.enteredGoalValue = '';
      }
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
