<template>
  <div>

    <base-dialog :show="!!error" title="An error occuered.." @close="error = null">
    {{error }}
    </base-dialog>

    <base-dialog :show="isLoading" title="authenticationg..." fixed>
    </base-dialog>

    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!isFormValid">Please enter valid details</p>
        <div class="actions">
          <base-button type="submit">{{ submitBtnText }}</base-button>
          <base-button type="button" @click="switchMode" mode="flat">{{
            signupBtnCaption
          }}</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      isFormValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitBtnText() {
      return this.mode === 'login' ? 'Login' : 'Signup';
    },
    signupBtnCaption() {
      return this.mode === 'login' ? 'Signup Instead' : 'Login Instead';
    },
  },
  methods: {
    async submitForm() {
      console.log('submit');
      this.isFormValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password === '' ||
        this.password.length < 6
      ) {
        this.isFormValid = false;
        return;
      }

      this.isLoading = true;

      try {
        if (this.mode === 'login') {
        } else {
          await this.$store.dispatch('signup', {
            email: this.email,
            password: this.password,
          });
        }
      } catch (error) {
        console.log('error')
        this.error = error.message || 'Failed to auth';
      }

      this.isLoading = false;
    },
    switchMode() {
      this.mode = this.mode === 'login' ? 'signup' : 'login';
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  /* border: 1px solid #ccc; */
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
