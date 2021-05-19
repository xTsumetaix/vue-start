<template>
  <div class="container align-content-center">
    <div v-if="error">
      <span class="alert-danger">{{ error }}</span>
    </div>
    <b-form class="align-self-center m-5" @submit.prevent="login">
      <b-form-group>
        <label for="email">Email: </label>
        <b-input id="email" required type="email" v-model="user.email" />
      </b-form-group>
      <b-form-group>
        <label for="password">Passwort: </label>
        <b-input id="password" required type="password" v-model="user.password" />
      </b-form-group>
      <input type="submit" class="btn btn-primary" role="button" value="Login" />
    </b-form>
  </div>
</template>

<script>
/* eslint-disable */
// für globalen aufruf
// import store from "../store"

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: null,
        password: null
      }
    }
  },
  computed: {
    error: function() {
      return this.$store.state.auth.error
    }
  },
  methods: {
    login() {
      // global aufrufen
      // store.dispatch('auth/login', this.user);

      this.$store.dispatch('auth/login', this.user);
    }
  }
}
</script>

<style scoped>

</style>