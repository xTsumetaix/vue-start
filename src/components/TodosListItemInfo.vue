<template>
    <div v-if="todo">
        <table class="table table-striped">
            <tbody>
            <tr>
                <th>
                    ID
                </th>
                <td>
                    {{ todo.id }}
                </td>
            </tr>
            <tr>
                <th>
                    Text
                </th>
                <td>
                    {{ todo.text }}
                </td>
            </tr>
            <tr>
                <th>
                    Erledigt
                </th>
                <td>
                    {{ todo.done ? 'Ja' : 'Nein' }}
                </td>
            </tr>
            <tr>
                <th>
                    Erstellt
                </th>
                <td>
                    {{ todo.created_at }} Uhr
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "TodosListItemInfo",
    computed: {
        todo: function () {
            return this.$store.state.todos.todo
        }
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

tr th:first-child {
    width: 200px;
    font-weight: bold;
    text-align: left;
}

td {
    _border: 1px solid #42b983;
    padding: 10px;
    padding-left: 25px;
    text-align: left;
}
</style>
