const restify = require('restify'), config = require('config.json')(__dirname + '/config.json'),
    corsMiddleware = require('restify-cors-middleware'), serveStatic = require('serve-static-restify')
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

    //server.pre(serveStatic('public/ftp', {'index': ['default.html', 'default.htm']}))


    nasa(server)
    geocoder(server)

    server.listen(config.port, callback(server))
    return server
}