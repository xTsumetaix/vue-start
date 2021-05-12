<template>
    <div class="">
        <h1>{{ title }}</h1>
        <p v-if="testVar === 1">Wert ist eins</p>
        <p v-else>Wert ist nicht 1</p>
        <ul>
            <li v-for="item in names" :key="item">{{ item }}</li>
        </ul>
        <b-form>
            <b-input-group class="col-6">
                <label for="text">Text</label>
                <b-input id="text" />
            </b-input-group>
        </b-form>
    </div>
</template>

<script>
export default {
    name: "Test",
    props: ['title'],
    data() {
        return {
            testVar: 1,
            names: ["Hans","Peter","Lisa"],
        }
    }
}
</script>

<style scoped>

</style>
