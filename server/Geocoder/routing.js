module.exports = (server)=> {
    const service = require('./service')

    server.get('/geocoder/:term', (req, res, next) => {
        service.find(req.params.term,
            (result) => {
                //console.log(result);
                res.send(result)
                next()
            },
            (err) => {
                //console.log(err);
                res.send({error:err})
                //next(new errs.InternalServerError('boom!'));
                next()
            })
    })
}