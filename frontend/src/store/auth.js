
import apiClient from "@/service/api";

export default {
    namespaced: true,

    state: {
        authenticated: false,
        user: null
    },

    getters: {
        authenticated (state) {
            return state.authenticated
        },

        user (state) {
            return state.user
        },
    },

    mutations: {
        SET_AUTHENTICATED (state, value) {
            state.authenticated = value
        },

        SET_USER (state, value) {
            state.user = value
        }
    },

    actions: {
        async signIn ({ dispatch }, credentials) {
            await apiClient.get('/sanctum/csrf-cookie', { withCredentials: true })
            await apiClient.post('/login', credentials)

            return dispatch('me')
        },
        async signOut ({ dispatch }) {
            await apiClient.post('/logout')

            return dispatch('me')
        },
        me ({ commit }) {
            return apiClient.get('/api/user').then((response) => {
                commit('SET_AUTHENTICATED', true)
                commit('SET_USER', response.data)
            }).catch(() => {
                commit('SET_AUTHENTICATED', false)
                commit('SET_USER', null)
            })
        }
    }
}