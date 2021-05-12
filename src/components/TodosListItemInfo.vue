<template>
    <div v-if="todoData" class="container mt-4">
        <h3>Todo Info</h3>
        <table class="table table-striped w-100">
            <tr>
                <th class="col-2">ID: </th>
                <td class="col-auto">{{ todoData.id }}</td>
            </tr>
            <tr>
                <th class="col-2">Text: </th>
                <td class="col-auto">{{ todoData.text }}</td>
            </tr>
            <tr>
                <th class="col-2">erledigt: </th>
                <td class="col-auto">{{ todoData.done ? 'JA' : 'Nein' }}</td>
            </tr>
            <tr>
                <th class="col-2">erstellt am: </th>
                <td class="col-auto">{{ todoData.created_at }} Uhr</td>
            </tr>
        </table>
    </div>
    <p v-else>
        no selected Todo
    </p>
</template>

<script>
export default {
    name: "TodosListItemInfo",
    props: {
        todoData: {
            type: Object,
        }
    }

}
</script>

<style scoped>
 th, td {
     text-align: left;
 }
</style>
