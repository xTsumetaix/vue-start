<template>
    <form @submit.prevent>
        <input
            type="text"
            v-model="text"
            placeholder="Add Todo"
        >
        <b-button
            class="btn-sm btn-info ml-2"
            @click="handleAdd(text)"
        >
            <font-awesome-icon icon="plus-square"/>
            Add Todo
        </b-button>
        <div v-if="error" class="alert-danger p-2 m-2 justify-content-center">
            <span></span>
        </div>
    </form>
</template>

<script>
export default {
    name: "TodosListItemAdd",
    props: {
        handleAdd: {
            type: Function,
        },
        error: {
            type: String,
            default: null,
        }
    },
    data() {
        return {
            text: "",
        }
    }
}
</script>

<style scoped>

</style>
