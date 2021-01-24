const app = Vue.createApp({
  data() {
    return {
      counter: 0
    }
  },
  watch: {
    resultOutput() {
      setTimeout(() => {
        console.log('updated')
        this.counter = 0;
      }, 5000);
    }
  },
  computed: {
    resultOutput() {
      if (this.counter == 0) {
        return 'Result';
      } else if (this.counter > 37) {
        return 'Too much!';
      } else if (this.counter < 37) {
        return 'Not there yet';
      } else {
        return this.counter;
      }
    }
  },
  methods: {
    add(num) {
      this.counter += num;
      console.log(this.counter);
    }
  }
});

app.mount('#assignment');