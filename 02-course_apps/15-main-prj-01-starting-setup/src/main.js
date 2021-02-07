import { createApp, defineAsyncComponent } from 'vue';

import router from './router.js';
import App from './App.vue';
import store from './store/index.js';

import BaseBadge from './components/base/BaseBadge.vue';
import BaseButton from './components/base/BaseButton.vue';
import BaseCard from './components/base/BaseCard.vue';
import BaseSpinner from './components/base/BaseSpinner.vue';
// import BaseDialog from './components/base/BaseDialog.vue';

const BaseDialog = defineAsyncComponent(() =>
  import('./components/base/BaseDialog.vue')
);

const app = createApp(App);

app.use(router);

app.use(store);

app.component('base-badge', BaseBadge);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.mount('#app');
