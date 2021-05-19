/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const todos = {
    namespaced: true,
    state: {
        todos: [],
        todo: null,
        error: null,
        loading: true
    },
    getters: {
        todosDone: (state) =>  state.todos.filter(todo => (todo.done === 1)),
        todosNotDone: (state) =>  state.todos.filter(todo => (todo.done !== 1)),
    },
    mutations: {
        mLoading: function(state, is_loading) {
            state.loading = is_loading;
        },
        mGetTodos: function(state, response) {
            state.todos = response;
        },
        mGetTodo: function(state, todo) {
            state.todo = todo;
        },
        mAddTodo: function(state, response) {
            state.todos.push(response);
        },
        mUpdateTodo: function(state, response) {
            const index = state.todos.findIndex(todo => todo.id === response.id);
            if(index !== -1) {
                state.todos.splice(index, 1, response);
            }
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
            commit("mLoading", true);
            // eslint-disable-next-line no-undef
            axios.get("/api/todos")
                .then(response => {
                    if(!response.data.error) {
                        commit('mGetTodos', response.data.data);
                        commit("mLoading", false);
                    }
                })
                .catch(err => {
                    commit('mError', err.response.data.message);
                    commit("mLoading", false);
                })
        },
        displayInfo({commit}, todo) {
            commit('mGetTodo', todo)
        },
        addTodo({commit}, text) {
            if(text !== "") {
                commit("mLoading", true);
                // eslint-disable-next-line no-undef
                axios.post("/api/todos", {text: text, done: false})
                    .then(response => {
                        if(!response.data.error) {
                            commit('mAddTodo', response.data.data);
                            commit("mLoading", false);
                        }
                    })
                    .catch(err => {
                        commit('mError', err.response.data.message);
                        commit("mLoading", false);
                    })
            }
        },
        updateTodo({commit}, updTodo) {
            commit("mLoading", true);
            // eslint-disable-next-line no-undef
            axios.put("/api/todos/"+updTodo.id, updTodo)
                .then(response => {
                    if(!response.data.error) {
                        commit("mUpdateTodo", response.data.data)
                        commit("mLoading", false);
                    }
                })
                .catch(err => {
                    console.log(err);
                    commit('mError', err.response.data.message);
                    commit("mLoading", false);
                })
        },
        removeTodo({commit}, obj) {
            if(!confirm("Todo: \"" + obj.text + "\" wirklich löschen")) {
                return false;
            }
            commit("mLoading", true);
            // eslint-disable-next-line no-undef
            axios.delete("/api/todos/"+obj.id)
                .then(response => {
                    if(!response.data.error) {
                        commit("mRemoveTodo", obj);
                        commit("mLoading", false);
                    }
                })
                .catch(err => {
                    commit('mError', err.response.data.message);
                    commit("mLoading", false);
                })
        },
    },
};
export default todos;
