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
	},
	getters: {},
	mutations: {
		mGetTodos: (state, todos) => state.todos = todos,
		mGetTodo: (state, todo) => state.todo = todo,
		mError: (state, error) => state.error = error
	},
	actions: {
		getTodos({commit}) {
			axios.get("/api/todos")
				.then(response => {
					if (!response.data.error) {
						commit('mGetTodos', response.data.data)
					}
				})
				.catch(err => console.error(err.message))
		},
		getTodo({commit}, todo) {
			commit('mGetTodo', todo)
		},
	},
}
export default todos;
