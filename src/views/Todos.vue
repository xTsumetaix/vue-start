<template>
    <div class="todos">
        <div>
            <TodosHeader />
        </div>
        <main class="row">
            <TodosList class="col-9" />
            <div class="col-3">
                <TodosListDone :is-done="false" />
                <TodosListDone />
            </div>
        </main>
        <div>
            <TodosFooter />
        </div>
    </div>
</template>

<script>
import TodosHeader from "../components/TodosHeader";
import TodosFooter from "../components/TodosFooter";
import TodosList from "../components/TodosList";
import TodosListNotDone from "../components/TodosListNotDone";
import TodosListDone from "../components/TodosListDone";

export default {
    name: "Todos",
    components: {TodosListDone, TodosList, TodosFooter, TodosHeader}
}
</script>

<style scoped>
</style>
