<template>
    <div class="todos">
        <header>
            <TodosHeader />
        </header>
        <main class="row">
            <TodosList class="col-9" />
            <div class="col-3">
                <TodosListNotDone />
                <TodosListDone />
            </div>
        </main>
        <footer>
            <TodosFooter />
        </footer>
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
    components: {TodosListDone, TodosListNotDone, TodosList, TodosFooter, TodosHeader}
}
</script>

<style scoped>
</style>
