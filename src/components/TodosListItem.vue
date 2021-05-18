<template>
    <li>
      <b-form>
        <input @change="updateTodo(item)"
               type="checkbox"
               v-model="item.done">
        <span>
          <input @change="updateTodo(item)"
                 :class="{'done': item.done}"
                 @click="displayInfo(item.id)"
                 v-model="item.text" />
        </span>
        <b-button class="btn-sm btn-danger float-right del" @click="$emit('removeTodo', item)">
<!--        <b-button class="btn-sm btn-danger float-right del" @click="handleRemove(item)">-->
          <font-awesome-icon icon="trash-alt"/>
        </b-button>
      </b-form>
    </li>
</template>

<script>
export default {
  name: "TodosListItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    // handleRemove: {
    //   type: Function,
    //
    // },
    displayInfo: {
      type: Function,
    },
    updateTodo: {
      type: Function
    }
  }
}
</script>

<style scoped>

  form {
    display: flex;
    width: 100%;
    align-items: center;
  }
  input[type="checkbox"] {
    flex: 0.5;
    margin-left: 1.0rem;

  }
  input[type="text"],
  .done {
    text-decoration: line-through;
  }
  li span {
    flex: 10;
    height: 1.8rem;
    border: none;
    margin-left: 1.0rem;
  }

  li span input {
    height: 1.6rem;
    border: none;
    width: 100%;
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