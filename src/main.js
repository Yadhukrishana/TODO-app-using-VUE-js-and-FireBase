import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
// import {firestorePlugin}from 'vuefire';
// vue.use{firestorePlugin};

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
