import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: {},
        localData: [],
        active: {},
        baseUrl: 'https://reqres.in/api/users'
    },

    getters: {
        getData: state => state.data,
        getActive: state => state.active,
    },

    mutations: {
        setData(state, source) {
            state.data = source
        },

        setActive(state, source) {
            state.active = source
        },
    },

    actions: {
        fetchAll({state, commit}, page) {
            axios.get(`${state.baseUrl}?page=${page}`)
                .then(res => {
                    commit('setData', res.data)
                })
        },
    }
})