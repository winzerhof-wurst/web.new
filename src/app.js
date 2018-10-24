import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import VueMatomo from 'vue-matomo'

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

    Vue.use(VueMatomo, {
        host: 'https://piwik.wuc.me',
        siteId: 2,
        router,

        // Changes the default .js and .php endpoint's filename
        // Default: 'piwik'
        trackerFileName: 'piwik'
    });

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
