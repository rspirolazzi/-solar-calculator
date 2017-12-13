module.exports = (server)=> {
    const service = require('./service')

    server.get('/radiation/:lat/:lon', (req, res, next) => {
        service.find(req.params,
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
