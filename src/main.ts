// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App.vue'
import router from './router'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'
import langEn from './i18n/en.json'
import langRu from './i18n/ru.json'
import 'vuetify/dist/vuetify.min.css'
import store from './store'

Vue.use(Vuetify)
Vue.use(VueI18n)

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'ru',
  messages: {
    en: langEn,
    ru: langRu,
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  components: { App },
  template: '<App/>'
})
