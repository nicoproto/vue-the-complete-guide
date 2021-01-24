const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      displayInput: true,
      pcolor: false
    }
  },
  computed: {
    paraClasses() {
      return {
        user1: this.userInput == 'user1',
        user2: this.userInput == 'user2',
        visible: this.displayInput,
        hidden: !this.displayInput
      }
    }
  },
  methods: {
    toggleInput() {
      this.displayInput = !this.displayInput;
    }
  }
});

app.mount('#assignment');