const axios = require('axios')
const bodyParser = require('body-parser')
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
server.use(bodyParser.json())
server.use(express.static('dist'))

server.get('/api/wines', (req, res) => {
    const url = process.env.CORE_URL + '/api/wines'
    const wines = axios.get(url)
        .then(resp => resp.data)

    wines.then(wines => res.json(wines)).catch(e => {
        res.status(500)
        res.send(e)
    })
})

server.get('/api/tidbits', (req, res) => {
    const url = process.env.CORE_URL + '/api/tidbits'
    const wines = axios.get(url)
        .then(resp => resp.data)

    wines.then(tidbits => res.json(tidbits)).catch(e => {
        res.status(500)
        res.send(e)
    })
})

server.post('/api/orders', (req, res) => {
    const url = process.env.CORE_URL + '/api/orders'
    axios.post(url, req.body)
        .then(resp => resp.data)
        .then(() => res.json({}))
        .catch(e => {
            res.status(500)
            res.send(e.toString())
    })
})

server.post('/api/rooms/book', (req, res) => {
    const url = process.env.CORE_URL + '/api/rooms/book'
    axios.post(url, req.body)
        .then(resp => resp.data)
        .then(() => res.json({}))
        .catch(e => {
            res.status(500)
            res.send(e.toString())
    })
})

server.get('*', (req, res) => {
    const context = { url: req.url }

    renderer.renderToString(context, (err, html) => {
        if (err) {
            if (err.code === 404) {
                res.status(404).end('Page not found')
            } else {
                res.status(500).end('Error: ' + err)
            }
        } else {
            res.end(html)
        }
    })
})

server.listen(8080)
