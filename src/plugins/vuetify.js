import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#008980',
        secondary: '#303538',
        text: '#303538',
        accent: '#8c9eff',
        error: '#b71c1c'
      }
    }
  }
})
