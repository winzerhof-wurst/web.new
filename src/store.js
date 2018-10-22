import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore(coreUrl) {
    return new Vuex.Store({
        state: {
            wines: [],
            tidbits: [],
            cart: {
                wines: {},
                tidbits: {},
            }
        },
        actions: {
            fetchWines({ commit }) {
                const url = (coreUrl ? coreUrl:'') + '/api/wines'
                return Axios.get(url)
                    .then(resp => resp.data)
                    .then(wines => commit('setWines', { wines }))
            },
            fetchTidbits({ commit }) {
                const url = (coreUrl ? coreUrl:'') + '/api/tidbits'
                return Axios.get(url)
                    .then(resp => resp.data)
                    .then(tidbits => commit('setTidbits', { tidbits }))
            }
        },
        mutations: {
            setWines(state, { wines }) {
                state.wines = wines
                wines.forEach(wine => {
                    state.cart.wines[wine.id] = 0
                })
            },
            updateWineQuantity(state, { wineId, quantity }) {
                state.cart.wines[wineId] = quantity
            },
            addSixBottlesToCart(state, { wineId }) {
                state.cart.wines[wineId] += 6
            },
            addTwelveBottlesToCart(state, { wineId }) {
                state.cart.wines[wineId] += 12
            },
            setTidbits(state, { tidbits }) {
                state.tidbits = tidbits
                tidbits.forEach(tidbit => {
                    state.cart.tidbits[tidbit.id] = 0
                })
            },
            addTidbitToCart(state, { tidbitId }) {
                state.cart.tidbits[tidbitId]++;
            },
            updateTidbitQuantity(state, { tidbitId, quantity }) {
                state.cart.tidbits[tidbitId] = quantity
            },
        },
        getters: {
            cartWineQuantity: state => (wineId) => {
                return state.cart.wines[wineId]
            },
            cartTidbitQuantity: state => (tidbitId) => {
                return state.cart.tidbits[tidbitId]
            }
        }
    })
}
