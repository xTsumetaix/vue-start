<template>
  <div>
    <h3 v-if="isDone">Erledigt {{displayedTodos.length}}</h3>
    <h3 v-else>Noch Offen {{displayedTodos.length}}</h3>
    <ul>
      <li v-for="item in displayedTodos" :key="item.id">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodosListDone",
  props: {
    isDone: {
      default: true,
      type: Boolean,
    },
  },
  computed: {
    displayedTodos: function() {
      if(this.isDone) {
        return this.$store.getters["todos/todosDone"];
      } else {
        return this.$store.getters["todos/todosNotDone"]
      }
    }
  }
}
</script>

<style scoped>
  li {
    font-size: 0.7rem;
    list-style: none;
  }
</style>