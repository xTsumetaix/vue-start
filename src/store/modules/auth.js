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
            token: null
        },
        error: null
    },
    getters: {
        /*  Klassisches JS
            check: function (state) {
                // !! -> gibt bool zurück
                return !!state.user.token;
            }
        */
        // ES6
        check: (state) => !!state.user.token,
},
    mutations: {
        mLogin: function (state, loginResponse) {
            state.user = loginResponse;
            localStorage.setItem('userName', state.user.name);
            localStorage.setItem('userToken', state.user.token);
            return state.user;
        },
        mLogout: function(state) {
            state.user.name = null;
            state.user.email = null;
            state.user.token = null;
            localStorage.clear();
            state.check = false;
            return state.user;
        },
        mError: function (state, error) {
            state.error = error;
            return state.error;
        }
    },
    actions: {
        login(context, user) {
            axios.post("/api/login", user)
                .then(response => {
                    context.commit('mLogin', response.data);
                })
                .catch(err => {
                    context.commit('mError', err.response.data.errors.email[0])
                })
        },
        logout({ commit }) {
            commit('mLogout');
        }
    },
};

export default auth;
