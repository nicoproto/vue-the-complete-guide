const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredInput: '',
      displayList: true,
    }
  },
  computed: {
    toggleBtn() {
      return (this.displayList ? 'Show List' : 'Hide List');
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredInput);
    },
    toggleList() {
      this.displayList = !this.displayList;
    }
  }
});

app.mount('#assignment');