import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import ru from 'vuetify/lib/locale/ru'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { ru },
    current: 'ru'
  }
})
