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
                path: '/betrieb',
                name: 'about',
                component: () => import('./views/about/Index.vue'),
                meta: {
                    title: 'Winzerhof Wurst',
                }
            },
            {
                path: '/aktuelles',
                redirect: {
                    name: 'news',
                }
            },
            {
                path: '/betrieb/aktuelles',
                name: 'news',
                component: () => import('./views/about/News.vue'),
                meta: {
                    title: 'Aktuelles',
                }
            },
            {
                path: '/betrieb/termine',
                name: 'events',
                component: () => import('./views/about/Events.vue'),
                meta: {
                    title: 'Termine',
                }
            },
            {
                path: '/betrieb/zehn-gruende',
                name: 'ten-reasons',
                component: () => import('./views/about/TenReasons.vue'),
                meta: {
                    title: 'Zehn Gründe',
                }
            },
            {
                path: '/betrieb/familie-wurst',
                name: 'about-family',
                component: () => import('./views/about/Family.vue'),
                meta: {
                    title: 'Familie Wurst',
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
                component: () => import('./views/rooms/Index.vue'),
                meta: {
                    title: 'Gästezimmer',
                }
            },
            {
                name: 'rooms-weinfruehling',
                path: '/gaestezimmer/weinfruehling',
                component: () => import('./views/rooms/Weinfruehling.vue'),
                meta: {
                    title: 'Weinfrühling',
                }
            },
            {
                name: 'rooms-weinsommer',
                path: '/gaestezimmer/weinsommer',
                component: () => import('./views/rooms/Weinsommer.vue'),
                meta: {
                    title: 'Weinsommer',
                }
            },
            {
                name: 'rooms-weinherbst',
                path: '/gaestezimmer/weinherbst',
                component: () => import('./views/rooms/Weinherbst.vue'),
                meta: {
                    title: 'Weinherbst',
                }
            },
            {
                name: 'rooms-geniesserzimmer',
                path: '/gaestezimmer/geniesserzimmer',
                component: () => import('./views/rooms/Geniesserzimmer.vue'),
                meta: {
                    title: 'Genießerzimmer',
                }
            },
            {
                name: 'rooms-price-book',
                path: '/gaestezimmer/preise-anfrage',
                component: () => import('./views/rooms/PriceBooking.vue'),
                meta: {
                    title: 'Preise und Anfrage',
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
