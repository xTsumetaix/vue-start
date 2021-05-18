<template>
  <div class="container align-content-center">
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
  methods: {
    login() {
      console.log(this.user)
      axios.post("/api/login", this.user)
          .then(response => {
            let userName = response.data.name,
                userToken = response.data.token;
            localStorage.setItem('userName', userName);
            localStorage.setItem('userToken', userToken);
            if(!response.data.error) {
              console.log(response.data)
            }
          })
          .catch(err => {
            alert(err.response.data.errors.email);
          })
    }
  }
}
</script>

<style scoped>

</style>