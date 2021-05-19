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
            <a v-if="authCheck" @click.prevent="logout" class="logout">
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
export default {
    name: "App",
    computed: {
        authCheck: function() {
            return this.$store.getters["auth/check"]
        },
        user: function() {
            return this.$store.state.auth.user
        },
    },
    methods: {
        logout() {
            this.$store.dispatch("auth/logout")
        }
    }
}
</script>

<style>
#app {
    color: #2c3e50;
    font-family: Helvetica, Arial, sans-serif;
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

#nav a.logout {
    color: #c00;
    margin-left: 0.5rem;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
