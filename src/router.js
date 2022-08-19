import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegister from './pages/coaches/CoachRegister.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import NotFound from './pages/NotFound.vue';
import store from './store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/requests', component: RequestsReceived, meta: {requiredAuth: true} },
    { path: '/register', component: CoachRegister, meta: {requiredAuth: true} },
    { path: '/auth', component: UserAuth, meta: {requiredUnauth: true} },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach(function (to, from, next) {
  if (to.meta.requiredAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiredUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
