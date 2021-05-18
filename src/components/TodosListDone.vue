<template>
    <div>
        <h3 v-if="isDone">Erledigt {{items.length}}</h3>
        <h3 v-else>Noch Offen {{items.length}}</h3>
        <ul v-if="items.length > 0">
            <li v-for="item in items" :key="item.id">{{ item.text }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "TodosListDone",
    props: {
        isDone: {
            type: Boolean,
            default: true,
        },
        todos: {
            type: Array,
            required: true,
        }
    },
    computed: {
        items: function () {
            return this.todos.filter(t => this.isDone ? t.done : !t.done)
        },
    }
}
</script>

<style scoped>
h3 {
    text-align: left;
    margin-left: 20px;
}
li {
    height: auto;
    font-size: 0.7rem;
    margin-left: 0;
    text-align: left;
}
</style>
