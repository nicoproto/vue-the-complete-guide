const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
      lastName: '',
      // fullname: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullname() {
      console.log('fullname running');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Proto';
    },
    increaseCounter(num) {
      this.counter = this.counter + num;
    },
    decreaseCounter(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value
    },
    submitForm() {
      alert('submitted');
    },
    setConfirmedName() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');