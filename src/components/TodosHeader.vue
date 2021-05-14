<template>
    <div>
        <h3>Anzahl Todos {{ todos.length }}</h3>
    </div>
</template>

<script>
export default {
    name: "TodosHeader",
    props: ['todos'],
}
</script>

<style scoped>
div {
    border: 1px solid green;
}
</style>
