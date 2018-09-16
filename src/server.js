const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')

const template = require('fs').readFileSync('./templates/index.template.html', 'utf-8')
const serverBundle = require('../dist/vue-ssr-server-bundle.json')
const clientManifest = require('../dist/vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
    template,
    clientManifest
})

const server = express()

server.use(express.static('dist'))

server.get('*', (req, res) => {
    const context = { url: req.url }

    renderer.renderToString(context, (err, html) => {
        if (err) {
            if (err.code === 404) {
                res.status(404).end('Page not found')
            } else {
                res.status(500).end('Error: ' + JSON.stringify(err))
            }
        } else {
            res.end(html)
        }
    })
})

server.listen(8080)
