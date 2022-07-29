<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link :to="to" v-else :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      reqired: false,
      default: false
    },
    to: {
      type: String,
      reqired: false,
      default: ''
    },
    mode: {
      type: String,
      reqired: false,
      default: null
    }
  }
}
</script>

<style scoped>
/* button {
  font: inherit;
  border: 1px solid #360032;
  background-color: #360032;
  color: white;
  padding: 0.5rem 2rem;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #5c0556;
  border-color: #5c0556;
} */

button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>