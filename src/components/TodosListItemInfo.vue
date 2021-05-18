<template>
  <div v-if="todo.id">
    <table>
      <tbody>
        <tr>
          <td>
            ID
          </td>
          <td>
            {{ todo.id }}
          </td>
        </tr>
        <tr>
          <td>
            Text
          </td>
          <td>
            {{ todo.text }}
          </td>
        </tr>
        <tr>
          <td>
            Erledigt
          </td>
          <td>
            {{ todo.done ? 'Ja' : 'Nein' }}
          </td>
        </tr>
        <tr>
          <td>
            Erstellt
          </td>
          <td>
            {{ todo.created_at }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TodosListItemInfo",
  props: {
    todo: {
      type: Object,
      required: true
    },
  }
}
</script>

<style scoped>
  div {
    padding-left: 40px;
  }

  table {
    /*border: 1px solid #000;*/
    /*border: #42b983;*/
    width: 100%;
  }

  tr td:first-child {
    font-weight: bold;
  }

  td {
    border: 1px solid #42b983;
    padding: 10px;
    padding-left: 25px;
    text-align: left;
  }
</style>