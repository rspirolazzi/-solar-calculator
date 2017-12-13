const app = require('./app')

app(function(server) {
    console.log('%s listening', server.name);
})