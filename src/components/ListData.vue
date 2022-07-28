<template>
    <transition-group tag="ul" name="user-names">
        <li v-for="user of users" :key="user" @click="removeUser(user)">
            {{ user }}
        </li>
    </transition-group>

    <input type="text" ref="user">
    <div>
        <button @click="addUser">Add User</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: ['Tom', 'Max', 'Nancy', 'Veronica', 'Dokota']
        }
    },
    methods: {
        addUser() {
            this.users.unshift(this.$refs.user.value);
        },
        removeUser(user) {
            this.users = this.users.filter(usr => usr !== user);
        }
    }
}
</script>

<style scoped>

ul {
    list-style: none;
    margin: auto;
    padding: 0;
}

li {
    border: 1px solid gray;
    padding: 1rem;
    text-align: center;
}

input {
    margin: 0.4rem auto;
    text-align: center;
    padding: 0.2rem 0;
}

.user-names-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}
.user-names-enter-active {
    transition: all 1s ease-in;
}

.user-names-leave-active {
    transition: all 1s ease-in;
    position: absolute;
}

.user-names-enter-to,
.user-names-leave-from {
    opacity: 1;
    transform: translateX(0px);
}

.user-names-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.user-names-move {
    transition: transform 1s ease;
}

</style>