<template>
  <div>
    <ul v-if="todos.length > 0">
      <li v-for="item in todos" :key="item.id">
        <input type="checkbox" v-model="item.done">
        <input v-if="item.done === 1" type="checkbox" checked />
        <input v-else type="checkbox" />
        {{ item.text }}
      </li>
    </ul>
    <h3 v-else>Keine Daten vorhanden!</h3>
  </div>
</template>

<script>
export default {
  name: "TodosList",
  data() {
    return {
      todos: [
          "Ich bin das erste Todo",
          "Ich bin das zweite Todo",
      ]
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
            if(!response.data.error) {
              this.todos = response.data.data;
            }
          })
          .catch(err => console.error(err.message))
    }
  }
}
</script>

<style scoped>

</style>