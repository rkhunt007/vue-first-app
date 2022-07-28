import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseModal from './components/BaseModal.vue'
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersList from './components/users/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import NotFound from './components/nav/NotFound.vue';
import AllUsers from './components/Pages/AllUsers.vue';
import CourseGoals from './components/Pages/CourseGoals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'teams',
      path: '/teams',
      components: {
        default: TeamsList, footer: TeamsFooter
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      meta: { needAuth: true },
      components: {default: UsersList, footer: UsersFooter}
    },
    {
      path: '/',
      component: AllUsers
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
    {
      path: '/courseGoals',
      component: CourseGoals
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {left: 0, top: 0};
  }
});

router.beforeEach(function(to, from, next) {
//    console.log({to, from, next})
   next();
});

const app = createApp(App);

app.use(router);

app.component('base-card', BaseCard);
app.component('base-modal', BaseModal);
app.component('base-button', BaseButton);

router.isReady().then(function() {
  app.mount('#app');
})

