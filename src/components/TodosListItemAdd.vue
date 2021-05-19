<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-input-group id="add-todo-input-group">
        <b-input name="text" id="todo-text-input" placeholder="Text..."/>
        <b-button type="submit" id="todo-text-submit" value="Add" >Add</b-button>
      </b-input-group>
    </b-form>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "TodosListItemAdd",
  methods: {
    ...mapActions({addTodo: "todos/addTodo"}),
    onSubmit(e) {
      let text = e.target[0].value;
      if(text !== "") {
        this.addTodo(text);
      }
    }
  },
}
</script>

<style scoped>
  form {
    margin-bottom: 30px;
  }

  form:first-child {
    padding-left: 40px;
  }

  #todo-text-submit {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    background: #42b983;
    border: #42b983;
  }

  #todo-text-input {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border: #42b983 1px solid;
  }
</style>