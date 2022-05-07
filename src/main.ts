import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import VueGtag from 'vue-gtag'
import { VueCookieNext } from 'vue-cookie-next'

const app = createApp(App)

app.use(VueCookieNext)
app.use(VueGtag, {
  enabled: false,
  config: { id: 'G-PHQ3PVWXDL' },
})

VueCookieNext.config({ expire: '365d' })
app.provide('gtag', app.config.globalProperties.$gtag);

app.mount('#app')
