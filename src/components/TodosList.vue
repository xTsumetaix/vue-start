<template>
  <div>
    <TodosListItemAdd />
    <div class="row">
      <div v-if="loading" class="col">
        <h2>Bitte Warten</h2>
      </div>
      <div v-else class="col">
        <ul v-if="todos.length > 0">
          <TodosListItem
              v-for="item in todos"
              :key="item.id"
              :item="item"
              :updateTodo="updateTodo"/>
        </ul>
        <h3 v-else>Keine Daten vorhanden!</h3>
      </div>
      <div class="col">
        <TodosListDone :todos="todos" />
        <TodosListDone :todos="todos" :is-done="false" />
      </div>
    </div>
    <TodosListItemInfo />
  </div>
</template>

<script>
/* eslint-disable */
import TodosListItem from "./TodosListItem";
import TodosListItemAdd from "./TodosListItemAdd";
import TodosListItemInfo from "./TodosListItemInfo";
import TodosListDone from "./TodosListDone";
import { mapActions } from "vuex";

export default {
  name: "TodosList",
  components: {TodosListDone, TodosListItemInfo, TodosListItemAdd, TodosListItem},
  data() {
    return {
      item: {}
    }
  },
  created() {
    this.getTodos();
  },
  computed: {
    todos: function() {
      return this.$store.state.todos.todos;
    },
    loading: function() {
      return this.$store.state.todos.loading;
    }
  },
  methods: {
    ...mapActions({getTodos: "todos/getTodos"}),
    updateTodo(updTodo) {
      console.log(updTodo);
      // eslint-disable-next-line no-undef
      axios.put("/api/todos/"+updTodo.id, updTodo)
          .then(response => {
            if(!response.data.error) {
              const index = this.todos.findIndex(todo => todo.id === updTodo.id);
              if(index !== -1) {
                this.todos.splice(index, 1, response.data.data);
              }
            }
          })
          .catch(err => alert(err.response.data.message))
    }
  }
}
</script>

<style scoped>

</style>
