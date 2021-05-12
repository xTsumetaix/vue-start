<template>
    <div>
        <!-- @todo: add TodoListAddItem -->
        <TodosListItemAdd :handle-add="add" />
        <ul v-if="todos.length > 0">
            <TodosListItem
                v-for="item in todos"
                :key="item.id"
                :item="item"
                :handleRemove="remove"
                :handleInfo="info"
            />
        </ul>
        <h3 v-else>Keine Daten vorhanden</h3>
        <!-- @todo: add TodoListItemInfo -->
        <TodosListItemInfo v-if="todoData" :todo-data="todoData" />
    </div>
</template>

<script>
import TodosListItem from "./TodosListItem";
import TodosListItemAdd from "./TodosListItemAdd";
import TodosListItemInfo from "./TodosListItemInfo";

export default {
    name: "TodosList",
    components: {TodosListItemInfo, TodosListItemAdd, TodosListItem},
    data() {
        return {
            todos: [],
            todoData: null,
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
                    if( !response.data.error ) {
                        this.todos = response.data.data;
                    }
                })
                .catch(err => console.error(err))
        },
        remove(todo) {
            if(!confirm("Todo: \"" + todo.text + "\" wirklich löschen?")) {
                return
            }
            // ES6 syntax
            if(todo === this.todoData) {
                this.todoData = null
            }
            this.todos = this.todos.filter(item => item !== todo)
        },
        add(txt) {
            let todo = {
                id: Math.random(),
                done: false,
                text: txt,
            }
            this.todos.push(todo)
        },
        info(todo) {
            this.todoData = todo
        },
    }
}
</script>
