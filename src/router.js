import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'home',
                component: () => import('./views/Home.vue')
            },
            {
                path: '/aktuelles',
                name: 'news',
                component: () => import('./views/News.vue'),
                meta: {
                    title: 'Aktuelles',
                }
            },
            {
                path: '/betrieb',
                name: 'about',
                component: () => import('./views/About.vue'),
                meta: {
                    title: 'Betrieb',
                }
            },
            {
                path: '/datenschutz',
                name: 'privacy',
                component: () => import('./views/Privacy.vue'),
                meta: {
                    title: 'Datenschutz',
                }
            },
            {
                path: '/impressum',
                name: 'imprint',
                component: () => import('./views/Imprint.vue'),
                meta: {
                    title: 'Impressum',
                }
            },
            {
                path: '/kontakt',
                name: 'contact',
                component: () => import('./views/Contact.vue'),
                meta: {
                    title: 'Kontakt',
                }
            },
            {
                name: 'rooms',
                path: '/gaestezimmer',
                component: () => import('./views/Rooms.vue'),
                meta: {
                    title: 'Gästezimmer',
                }
            },
            {
                path: '/schmankerl',
                name: 'tidbits',
                component: () => import('./views/Tidbits.vue'),
                meta: {
                    title: 'Schmankerl',
                }
            },
            {
                path: '/weinkarte',
                name: 'wines',
                component: () => import('./views/Wines.vue'),
                meta: {
                    title: 'Weinkarte',
                }
            },
        ]
    })
}
