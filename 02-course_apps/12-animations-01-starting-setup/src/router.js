import {
  createRouter,
  createWebHistory
} from 'vue-router';

import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [{
      path: '/',
      component: AllUsers
    },
    {
      name: 'goals',
      path: '/goals',
      component: CourseGoals
    }
  ]
})

export default router