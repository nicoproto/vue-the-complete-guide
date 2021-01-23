const app = Vue.createApp({
  data() {
    return {
      name: 'Nico',
      age: 32,
      imgLink: 'https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg'
    }
  },
  methods: {
    favNumber() {
      return Math.floor((Math.random() * 10) + 1);
    }
  }
});

app.mount('#assignment');