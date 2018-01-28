import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //TODO
        isTrue: true
    },

    getters: {
        //TODO: implement getter 
        isTrue: function(state) {
            return state.isTrue;
        }
    },

    mutations: {
        // TODO: implement mutation
        toggle1: function(state) {
            state.isTrue = !state.isTrue;
        }
    },

    actions:{
        //TODO
        toggle1: function (context) {
            context.commit('toggle1');
        }
    }
})