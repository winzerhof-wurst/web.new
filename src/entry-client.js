import Vue from 'vue'

import { createApp } from './app'

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

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {
  console.info('loading state', window.__INITIAL_STATE__.wines);
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  app.$mount('#wiwu-app')
})
