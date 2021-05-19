/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const auth = {
	namespaced: true,
	state: {
		check: false,
		user: {
			name: null,
			email: null,
			token: null,
		},
		error: null,
	},
	getters: {
/*  klassisches JS
		check: function (state) {
			return !!state.user.token
		}
*/
		// ES6
		check: (state) => !!state.user.token,
	},
	mutations: {
		mLogin: function (state, loginResponse) {
			state.user = loginResponse
			localStorage.setItem('userName', state.user.name)
			localStorage.setItem('userToken', state.user.token)
			return state.user
		},
		mError: function (state, error ) {
			state.error = error
			return state.error
		}
	},
	actions: {
		login(context, user) {
			console.info(context)
			axios.post("/api/login", user)
				.then(resp => {
					context.commit('mLogin', resp.data)
				})
				.catch(err => {
					context.commit('mError', err.response.data.errors.email)
				})
			;
		},
		logout() {

		}
	},
}
export default auth;
