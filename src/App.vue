<template>
  <div>
    <TheHeader></TheHeader>
    <router-view></router-view>
  </div>

  <!-- <base-container title="Vuex"></base-container>

  <learning-survey></learning-survey>
  <user-experiences></user-experiences>
  <the-navigation></the-navigation>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <footer>
    <router-view name="footer"></router-view>
  </footer>

  <div class="container">
    <list-data></list-data>
  </div>

  <div class="container">
    <div class="block" :class="{ animate: animateDialog }"></div>
    <button @click="animateDialog = true">Animate</button>
  </div>

  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>

  <div class="container">
    <transition
      name="para"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="showParagraph">This is a Paragraph...</p>
    </transition>
    <button @click="showParagraph = !showParagraph">Toggle Paragraph</button>
  </div> -->
</template>

<script>
// import LearningSurvey from './components/survey/LearningSurvey.vue';
// import UserExperiences from './components/survey/UserExperiences.vue';

import TheNavigation from './components/nav/TheNavigation.vue';
import TheHeader from './components/layout/TheHeader.vue';
import ListData from './components/ListData.vue';
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    // LearningSurvey,
    // UserExperiences,
    // TheNavigation
    // ListData,
    // BaseContainer,
    TheHeader
  },
  data() {
    return {
      teams: [
        { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
        { id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
      ],
      users: [
        { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        { id: 'u2', fullName: 'Praveen Kumar', role: 'Engineer' },
        { id: 'u3', fullName: 'Julie Jones', role: 'Engineer' },
        { id: 'u4', fullName: 'Alex Blackfield', role: 'Consultant' },
        { id: 'u5', fullName: 'Marie Smith', role: 'Consultant' },
      ],
      dialogIsVisible: false,
      animateDialog: false,
      showParagraph: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('afterEnter');
    },
    beforeLeave(el) {
      console.log('beforeLeave');
    },
    leave(el, done) {
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('afterLeave');
    },
    enterCancelled(el) {
      clearInterval(this.enterInterval);
    },
    leaveCancelled(el) {
      clearInterval(this.leaveInterval);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  animation: block-animation 1s ease-out forwards;
}

/* .para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.para-enter-active {
  transition: all 0.3s ease-in;
}

.para-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.para-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

.para-leave-active {
  transition: all 0.3s ease-out;
}

.para-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */

.route-enter-from,
.route-leave-to {
  opacity: 0;
}
.route-enter-active,
.route-leave-active {
  transition: opacity 1s ease;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
}

@keyframes block-animation {
  0% {
    transform: translateX(0) scale(1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
