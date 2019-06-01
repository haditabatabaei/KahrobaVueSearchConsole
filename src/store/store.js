import data from '../../static/data/exportedJSON-new-deployableProfiler.json'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: data,
    },
    mutations: {},
    getters: {
        data: state => {
            return data
        },
    }
});