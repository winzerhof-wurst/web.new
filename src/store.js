import _ from 'lodash'
import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore(coreUrl) {
    return new Vuex.Store({
        state: {
            products: [],
            cart: {
                products: {},
            }
        },
        actions: {
            fetchProducts({ commit }) {
                const url = (coreUrl ? coreUrl : '') + '/api/products'
                return Axios.get(url)
                    .then(resp => resp.data)
                    .then(products => commit('setProducts', { products }))
            },
            submitOrder({ state, commit }, data) {
                data.products = []
                state.products.forEach(p => {
                    if (state.cart.products[p.id]) {
                        data.products.push({
                            id: p.id,
                            quantity: state.cart.products[p.id],
                        })
                    }
                })

                const url = '/api/orders'
                return Axios.post(url, data)
                    .then(() => commit('resetCart'))
            },
            sendBookingRequest({ }, data) {
                const url = (coreUrl ? coreUrl : '') + '/api/rooms/book'
                return Axios.post(url, data)
                    .then(resp => resp.data)
            }
        },
        mutations: {
            setProducts(state, { products }) {
                state.products = _.sortBy(products, ['order', 'name', 'year'])
                products.forEach(p => {
                    Vue.set(state.cart.products, p.id, 0)
                })
            },
            addProductToCart(state, { id }) {
                state.cart.products[id]++;
            },
            updateProductQuantity(state, { id, quantity }) {
                state.cart.products[id] = quantity
            },
            incrementProductQuantity(state, { id, by }) {
                state.cart.products[id] += by
            },
            resetCart(state) {
                state.products.forEach(p => state.cart.products[p.id] = 0)
            },
        },
        getters: {
            cartQuantity: state => (id) => {
                return state.cart.products[id]
            },
        }
    })
}
