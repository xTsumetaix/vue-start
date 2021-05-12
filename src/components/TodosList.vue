<template>
    <div>
        <ul v-if="todos.length > 0">
            <li v-for="item in todos" :key="item.id">
                <input type="checkbox" v-model="item.done" />
                <span>{{ item.text }}</span>
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
        getTodos() {
            // eslint-disable-next-line no-undef
            axios.get("/api/todos")
                .then(response => {
                    console.info(response.data.data)
                    if( !response.data.error ) {
                        this.todos = response.data.data;
                    }
                })
                .catch(err => console.error(err))
        }
    }
}
</script>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>
