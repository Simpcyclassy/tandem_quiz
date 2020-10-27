import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#6c6f45',
        accent: '#962f1e',
        background: '#d6f7e8'
      },
      dark: {
        primary: '#001229',
        background: '#ff694e'
      }
    }
  }
})
