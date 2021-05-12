<template>
    <li>
        <b-form>
            <input type="checkbox" v-model="item.done" />

            <span
                :class="{'done': item.done}"
                @click="handleInfo(item)"
            >
                {{ item.text }}
            </span>

            <b-button
                @click="handleRemove(item)"
                class="btn-sm btn-danger float-right del"
            >
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
            required: true,
        },
        handleRemove: {
            type: Function,
        },
        handleInfo: {
            type: Function,
        }
    },
}
</script>

<style scoped>
.done {
    text-decoration: line-through;
}
form {
    display: flex;
    width: 100%;
}
input[type="checkbox"] {
    flex: 0.5;
    margin-left: 1.0rem;
}
input[type="text"],
li span {
    flex: 10;
    height: 1.8rem;
    border: none;
    margin-left: 1.0rem;
}
button {
    flex: 1;
}
li {
    list-style: none;
    height: auto;
    min-height: 2.0rem;
    line-height: 2.0rem;
    margin: 5px 10px 0 10px;
    border: 1px solid #42b983;
    border-radius: 5px;
    text-align: left;
}
svg[data-icon] {
    display: inline;
    margin-right: 5px;
}
</style>
