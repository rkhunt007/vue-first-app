## Table of Contents

  - [Router](#router)

## Router

### Installing

Using npm:
```bash
$ npm install vue-router
```
In your main.js
```js
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
```js
<router-view></router-view>
```
Navigation to the route
```js
<router-link to="/teams">
    Teams
</router-link>
```
Navigating programmatically
```js
this.$router.push('/teams');
```
Getting route params
```js
this.$route.params.teamId
```
Passing route param as prop
```js
{
    path: '/teams/:teamId',
    component: TeamMembers,
    props: true
},
```
And in the TeamMembers component, declare the prop
```js
props: ['teamId']
```
Handling undefined paths
```js
{
    path: '/:notFound(.*)',
    component: NotFound
}
```
Adding named routes
```js
{
    name: 'team-members',
    path: ':teamId',
    component: TeamMembers,
    props: true,
},
```
And in the component
```js
teamMembersLink() {
    return { name: 'team-members', params: { teamId: this.id } };
},
```
Passing query params
```js
teamMembersLink() {
    return {
        name: 'team-members',
        query: { sort: 'asc' },
    };
},
```
And for fetching query params
```js
this.$route.query.sort
```
Multiple router view
```js
{
    path: '/teams',
    components: {
        default: TeamsList, footer: TeamsFooter
    }
}
```
in the template for
```html
<main>
    <router-view></router-view>
</main>
<footer>
    <router-view name="footer"></router-view>
</footer>
```
Global Navigation guard
```js
router.beforeEach(function(to, from, next) {
    if (to.name === 'team-members) {
        next(); // allow navigation
    } else if (to.name === 'users') {
        next(false); // prevent navigation
    } else {
        next({ name: 'teams', params {...}}); // redirect
    }
});
```
Local Navigation guard
```js
{
    path: '/users',
    components: {default: UsersList, footer: UsersFooter},
    beforeEnter(to, from, next) {
        //...
        next();
    }
},
```
OR can be used in component 
```js
beforeRouteEnter(to, from, next) {
    //...
    next();
}
```
Router update handler
```js
beforeRouteUpdate(to, from, next) {
    //...
    next();
}
```