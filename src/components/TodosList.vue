<template>
    <div>
        <TodosListItemAdd :add-todo="addTodos"/>
        <ul v-if="todos.length > 0">
            <TodosListItem
                v-for="item in todos"
                :key="item.id"
                :displayInfo="displayInfo"
                @removeTodo="remove"
                :item="item"
                :updateTodo="updateTodo"/>
        </ul>
        <h3 v-else>Keine Daten vorhanden!</h3>
        <TodosListItemInfo :todo="item"/>
    </div>
</template>

<script>
/* eslint-disable */
import TodosListItem from "./TodosListItem";
import TodosListItemAdd from "./TodosListItemAdd";
import TodosListItemInfo from "./TodosListItemInfo";

export default {
    name: "TodosList",
    components: {TodosListItemInfo, TodosListItemAdd, TodosListItem},
    data() {
        return {
            todos: [],
            item: {}
        }
    },
    created() {
        this.getTodos();
    },
    methods: {
        getTodos() {
            // eslint-disable-next-line no-undef
            axios.get("/api/todos")
                .then(response => {
                    if (!response.data.error) {
                        this.todos = response.data.data;
                    }
                })
                .catch(err => console.error(err.message))
        },
        remove(obj) {
            if (!confirm("Todo: \"" + obj.text + "\" wirklich löschen")) {
                return false;
            }
            // eslint-disable-next-line no-undef
            axios.delete("/api/todos/" + obj.id)
                .then(response => {
                    if (!response.data.error) {
                        this.todos = this.todos.filter(todo => todo !== obj);
                    }
                })
                .catch(err => console.error(err.message))
        },
        displayInfo(id) {
            this.item = this.todos.filter(todo => todo.id === id)[0];
        },
        addTodos(text) {
            if (text !== "") {
                // eslint-disable-next-line no-undef
                axios.post("/api/todos", {text: text, done: false})
                    .then(response => {
                        if (!response.data.error) {
                            this.todos.push(response.data.data);
                        }
                        document.getElementById("todo-text-input").disabled = false;
                        document.getElementById("todo-text-input").value = "";
                    })
                    .catch(err => console.error(err.message))
            }
        },
        updateTodo(updTodo) {
            // eslint-disable-next-line no-undef
            axios.put("/api/todos/" + updTodo.id, updTodo)
                .then(response => {
                    if (!response.data.error) {
                        const index = this.todos.findIndex(todo => todo.id === updTodo.id);
                        if (index !== -1) {
                            this.todos.splice(index, 1, response.data.data);
                        }
                    }
                })
                .catch(err => console.error(err.message))
        }
    }
}
</script>

<style scoped>

</style>
