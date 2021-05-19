/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const todos = {
    namespaced: true,
    state: {
        todos: [],
        todo: null,
        error: null
    },
    getters: {},
    mutations: {
        mGetTodos: function(state, response) {
            state.todos = response;
        },
        mGetTodo: function(state, todo) {
            state.todo = todo;
        },
        mAddTodo: function(state, response) {
            state.todos.push(response);
        },
        mUpdateTodo: function(state, obj) {

        },
        mRemoveTodo: function(state, obj) {
            state.todos = state.todos.filter(todo => todo !== obj)
        },
        mError: function(state, error) {
            state.error = error;
        }
    },
    actions: {
        getTodos({commit}) {
            // eslint-disable-next-line no-undef
            axios.get("/api/todos")
                .then(response => {
                    if(!response.data.error) {
                        commit('mGetTodos', response.data.data);
                    }
                })
                .catch(err => {
                    commit('mError', err.response.data.message);
                })
        },
        displayInfo({commit}, todo) {
            commit('mGetTodo', todo)
        },
        addTodo({commit}, text) {
            if(text !== "") {
                // eslint-disable-next-line no-undef
                axios.post("/api/todos", {text: text, done: false})
                    .then(response => {
                        if(!response.data.error) {
                            commit('mAddTodo', response.data.data);
                        }
                    })
                    .catch(err => {
                        commit('mError', err.response.data.message);
                    })
            }
        },
        updateTodo(updTodo) {
            console.log(updTodo);
            // eslint-disable-next-line no-undef
            axios.put("/api/todos/"+updTodo.id, updTodo)
                .then(response => {
                    if(!response.data.error) {
                        const index = this.todos.findIndex(todo => todo.id === updTodo.id);
                        if(index !== -1) {
                            this.todos.splice(index, 1, response.data.data);
                        }
                    }
                })
                .catch(err => alert(err.response.data.message))
        },
        removeTodo({commit}, obj) {
            if(!confirm("Todo: \"" + obj.text + "\" wirklich löschen")) {
                return false;
            }
            // eslint-disable-next-line no-undef
            axios.delete("/api/todos/"+obj.id)
                .then(response => {
                    if(!response.data.error) {
                        commit("mRemoveTodo", obj);
                    }
                })
                .catch(err => {
                    commit('mError', err.response.data.message);
                })
        },
    },
};
export default todos;
