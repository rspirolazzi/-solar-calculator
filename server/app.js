const restify = require('restify'), config = require('config.json')(__dirname + '/config.json'),
    corsMiddleware = require('restify-cors-middleware'), serveStatic = require('serve-static-restify'), fs=require('fs')
module.exports = (callback)=> {
    const nasa = require('./Nasa/routing'), geocoder = require('./Geocoder/routing')

    const cors = corsMiddleware({
        preflightMaxAge: 5, //Optional
        origins: ['*'],
        allowHeaders: ['API-Token'],
        exposeHeaders: ['API-Token-Expiry']
    })

    var server = restify.createServer({
        name: 'Calculadora Solar',
        version: '1.0.0'
    })
    server.pre(cors.preflight)
    server.use(cors.actual)
    nasa(server)
    geocoder(server)

    //server.get(/\/(.*)?.*/,restify.plugins.serveStatic({directory: './build',}))

    server.get(/\/static\/?.*/,
        restify.plugins.serveStatic({
            directory: './build/',
        })
    )
    server.get(/\/img\/?.*/,
        restify.plugins.serveStatic({
            directory: './build/',
        })
    )
    server.get(/\/js\/?.*/,
        restify.plugins.serveStatic({
            directory: './build/',
        })
    )
    server.get(/\/css\/?.*/,
        restify.plugins.serveStatic({
            directory: './build/',
        })
    )

    server.get('/',
        restify.plugins.serveStatic({
            directory: './build/',
            default: 'index.html'
        })
    )

    server.listen(config.port, callback(server))
    return server
}