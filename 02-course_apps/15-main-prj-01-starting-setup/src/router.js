import {
  createRouter,
  createWebHistory
} from "vue-router";

import CoachesList from './pages/coaches/CoachesList.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index.js';

const CoachDetails = () => import('./pages/coaches/CoachDetails.vue');
const CoachRegistration = () => import('./pages/coaches/CoachRegistration.vue');
const ContactCoach = () => import('./pages/requests/ContactCoach.vue');
const RequestsRecieved = () => import('./pages/requests/RequestsRecieved.vue');
const UserAuth = () => import('./pages/auth/UserAuth.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'root',
      path: '/',
      redirect: '/coaches'
    },
    {
      name: 'coaches',
      path: '/coaches',
      component: CoachesList
    },
    {
      name: 'coach',
      path: '/coaches/:id',
      component: CoachDetails,
      props: true,
      children: [
        {
          name: 'coach_contact',
          path: 'contact',
          component: ContactCoach
        },
      ]
    },
    {
      name: 'register',
      path: '/register',
      props: true,
      meta: { requiresAuth: true },
      component: CoachRegistration
    },
    {
      name: 'requests',
      path: '/requests',
      meta: { requiresAuth: true },
      component: RequestsRecieved
    },
    {
      name: 'auth',
      path: '/auth',
      meta: { requiresUnauth: true },
      component: UserAuth
    },
    {
      name: 'not_found',
      path: '/:notFound(.*)',
      component: NotFound
    },

  ],
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;