const app = Vue.createApp({
  data() {
    return {
      userName: '',
      confirmedInput: ''
    }
  },
  methods: {
    alertMsg() {
      alert('Hello there!');
    },
    setName(event) {
      this.userName = event.target.value;
    },
    setConfirmedInput() {
      this.confirmedInput = this.userName;
    }
  }
});

app.mount('#assignment');