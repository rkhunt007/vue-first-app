import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/teams',
            component: TeamsList
        },
        {
            path: '/teams/:teamId',
            component: TeamMembers,
            props: true
        },
        {
            path: '/users',
            component: UsersList
        },
        {
            path: '/',
            redirect: '/teams'
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
});

const app = createApp(App);

app.use(router);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
