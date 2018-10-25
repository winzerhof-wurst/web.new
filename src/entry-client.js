import Vue from 'vue'
import VueMatomo from 'vue-matomo'

import { createApp } from './app'

const { app, router, store } = createApp()

Vue.mixin({
  beforeMount() {
    const { asyncData } = this.$options
    if (asyncData) {
      // assign the fetch operation to a promise
      // so that in components we can do `this.dataPromise.then(...)` to
      // perform other tasks after data is ready
      this.dataPromise = asyncData({
        store: this.$store,
        route: this.$route
      })
    }
  }
})

Vue.use(VueMatomo, {
  host: 'https://piwik.wuc.me',
  siteId: 2,
  router,

  // Changes the default .js and .php endpoint's filename
  // Default: 'piwik'
  trackerFileName: 'piwik'
});

if (window.__INITIAL_STATE__) {
  console.info('loading state', window.__INITIAL_STATE__.wines);
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  app.$mount('#wiwu-app')
})
