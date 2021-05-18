<template>
    <div>
        <b-form @submit.prevent="onSubmit">
            <b-input-group id="add-todo-input-group">
                <b-input id="todo-text-input" name="text" placeholder="Text..."/>
                <b-button id="todo-text-submit" type="submit" value="Add">Add</b-button>
            </b-input-group>
        </b-form>
    </div>
</template>

<script>
export default {
    name: "TodosListItemAdd",
    methods: {
        onSubmit(e) {
            let text = e.target[0].value;
            if (text !== "") {
                document.getElementById("todo-text-input").disabled = true;
                this.addTodo(text);
            }
        }
    },
    props: {
        addTodo: {
            type: Function,
        }
    }
}
</script>

<style scoped>
form {
    margin-bottom: 30px;
}

form:first-child {
    padding-left: 40px;
}

#todo-text-submit {
    background: #42b983;
    border: #42b983;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
}

#todo-text-input {
    border: #42b983 1px solid;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
}
</style>
