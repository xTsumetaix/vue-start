<template>
    <div v-if="todos.length > 0" class="todos-footer">
        <div v-for="item in todos" :key="item.id" class="d-inline-flex">
            <span>{{ item.text }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "TodosFooter",
    props: ['todos'],
}
</script>

<style scoped>
.todos-footer {
    border: 1px solid blue;
    align-content: flex-start;
}
.todos-footer div {
    margin: 0.2rem;
    padding: 0.1rem 0.2rem;
}
</style>
