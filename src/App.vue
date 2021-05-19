<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/todos">Todos</router-link>
            |
            <router-link to="/test">Test</router-link>
            |
            <router-link to="/about">About</router-link>
            |
            <a @click.prevent="logout" v-if="authCheck" class="logout">
              <font-awesome-icon icon="user" />
              {{ user.name }} Logout
            </a>
            <router-link v-else to="/login">Login</router-link>
        </div>
        <div class="container align-content-center">
            <router-view/>
        </div>
    </div>
</template>

<script>
import store from "../src/store"
  export default {
    name: "App",
    computed: {
      authCheck: function() {
        return this.$store.getters["auth/check"]
      },
      user: () => {
        return store.state.auth.user
      }
    },
    methods: {
      logout() {
        store.dispatch('auth/logout');
      },
    }
  }
</script>

<style>
#app {
    color: #2c3e50;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

#nav {
    padding: 30px;
}

#nav a {
    color: #2c3e50;
    font-weight: bold;
    cursor: pointer;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

#nav a.logout {
  color: #cc0000;
}


</style>
