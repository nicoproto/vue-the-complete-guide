const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01234 4556 2335',
          email: 'manuel@gmail.com'
        },
        {
          id: 'vincent',
          name: 'Vincent Perez',
          phone: '01234 5555 1234',
          email: 'vincent@gmail.com'
        },
      ]
    };
  }
});

app.component('friend-contact', {
  template: `
    <li>
      <h2>{{friend.name}}</h2>
      <button @click="toggleDetails">
        {{detailsAreVisible ? 'Hide' : 'Show'}} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '01234 4556 2335',
        email: 'manuel@gmail.com'
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});

app.mount('#app');