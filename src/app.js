import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'

import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

Vue.use(BootstrapVue)

export function createApp(onServer) {
    const coreUrl = process.env.CORE_URL

    const router = createRouter()
    const store = createStore(coreUrl)

    sync(store, router)

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })
    return {
        app,
        router,
        store
    }
}
