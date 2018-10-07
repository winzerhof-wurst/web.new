const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(baseConfig, {
    mode: 'development',

    entry: [
        path.join(__dirname, 'entry-client.js'),
        'bootstrap/dist/css/bootstrap.css',
        'bootstrap-vue/dist/bootstrap-vue.css'
    ],

    plugins: [
        // This plugins generates `vue-ssr-client-manifest.json` in the
        // output directory.
        new VueSSRClientPlugin()
    ],

    optimization: {
        splitChunks: {
            name: "manifest",
            minChunks: Infinity
        }
    }
})
