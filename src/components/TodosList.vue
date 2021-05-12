<template>
    <div>
        <ul v-if="todos.length > 0">
            <li v-for="item in todos" :key="item.id">
                <input type="checkbox" v-model="item.done" />

                <span :class="{'done': item.done}">{{ item.text }}</span>

                <b-button
                    @click="remove(item)"
                    class="btn-sm btn-danger float-right del"
                >
                    <font-awesome-icon icon="trash-alt"/>
                </b-button>
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

<style scoped>
.done {
    text-decoration: line-through;
}
form {
    display: flex;
    width: 100%;
}
input[type="checkbox"] {
    flex: 0.5;
    margin-left: 1.0rem;
}
input[type="text"],
li span {
    flex: 10;
    height: 1.8rem;
    border: none;
    margin-left: 1.0rem;
}
button {
    flex: 1;
}
li {
    list-style: none;
    height: auto;
    min-height: 2.0rem;
    line-height: 2.0rem;
    margin: 5px 10px 0 10px;
    border: 1px solid #42b983;
    border-radius: 5px;
    text-align: left;
}
svg[data-icon] {
    display: inline;
    margin-right: 5px;
}
</style>
