<template>
    <li>
        <b-form>
            <input
                v-model="item.done"
                type="checkbox"
                @change="updateTodo(item)"
            >
            <span>
                <input
                    :class="{'done': item.done}"
                    @click="displayInfo(item.id)"
                    @change="updateTodo(item)"
                    v-model="item.text"
                />
            </span>

            <b-button class="btn-sm btn-danger float-right del" @click="$emit('removeTodo',item)">
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
        handleRemove: {
            type: Function,

        },
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
    align-items: center;
    display: flex;
    width: 100%;
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
    border: none;
    flex: 10;
    height: 1.8rem;
    margin-left: 1.0rem;
}
li span input[type="text"] {
    height: 1.6rem;
    width: 95%;
    border: none;
}
button {
    flex: 1;
}

li {
    border: 1px solid #42b983;
    border-radius: 5px;
    height: auto;
    line-height: 2.0rem;
    list-style: none;
    margin: 5px 10px 0 10px;
    min-height: 2.0rem;
    text-align: left;
}

svg[data-icon] {
    display: inline;
    margin-right: 5px;
}
</style>
