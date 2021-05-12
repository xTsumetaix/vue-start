<template>
    <div>
        <ul v-if="todos.length > 0">
            <li v-for="item in todos" :key="item">
                {{ item }}
            </li>
        </ul>
        <h3 v-else>Keine Daten vorhanden</h3>
    </div>
</template>

<script>
export default {
    name: "TodosList",
    data() {
        return {
            todos: [],
        }
    },
    created() {
        this.getTodos()
    },
    methods: {
        getTodos(){
            this.todos.push('neues Todo');
        }
    }
}
</script>

<style scoped>

</style>
