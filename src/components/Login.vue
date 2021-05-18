<template>
    <div class="container align-content-center">
        <b-form class="align-self-center m-5" @submit.prevent>
            <b-form-group>
                <label for="email">Email: </label>
                <b-input id="email" required type="email"/>
            </b-form-group>
            <b-form-group>
                <label for="password">Passwort: </label>
                <b-input id="password" required type="password"/>
            </b-form-group>
            <b-btn role="button">Login</b-btn>
        </b-form>
    </div>
</template>

<script>
export default {
    name: "Login"
}
</script>

<style scoped>
</style>
