## Table of Contents

  - [Router](#router)

## Router

### Installing

Using npm:
```bash
$ npm install vue-router
```
In your main.js
```
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/teams',
            component: TeamsList
        },
        {
            path: '/teams/:teamId',
            component: TeamMember
        }
    ]
});
const app = createApp(App);

app.use(router);
```
In the base component
```
<router-view></router-view>
```
Navigation to the route
```
<router-link to="/teams">
    Teams
</router-link>
```
Navigating programmatically
```
this.$router.push('/teams');
```
Getting route params
```
this.$route.params.teamId
```
Passing route param as prop
```
{
    path: '/teams/:teamId',
    component: TeamMembers,
    props: true
},
```
And in the TeamMembers component, declare the prop
```
props: ['teamId']
```
Handling undefined paths
```
{
    path: '/:notFound(.*)',
    component: NotFound
}
```

