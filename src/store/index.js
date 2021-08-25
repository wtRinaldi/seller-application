import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formData: {}
  },
  mutations: {
    setFormData (state, data) {
      for (const property in data) {
        state.formData[property] = data[property]
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
