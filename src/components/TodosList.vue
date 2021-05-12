<template>
    <div>
        <!-- add TodoListAddItem -->
        <ul v-if="todos.length > 0">
            <TodosListItem
                v-for="item in todos"
                :key="item.id"
                :item="item"
                :handleRemove="remove"
            />
        </ul>
        <h3 v-else>Keine Daten vorhanden</h3>
        <!-- add TodoListItemInfo -->
    </div>
</template>

<script>
import TodosListItem from "./TodosListItem";

export default {
    name: "TodosList",
    components: {TodosListItem},
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
/*
            // klassisch js
            this.todos = this.todos.filter(function (item) {
                if(item != todo) {
                    return item
                }
            })
*/
            // ES6 syntax
            this.todos = this.todos.filter(item => item !== todo)
        },
    }
}
</script>
