const NodeGeocoder = require('node-geocoder')
class Geocoder {
    constructor() {
        const options = {
            provider: 'google',

            // Optional depending on the providers
            httpAdapter: 'https', // Default
            apiKey: 'AIzaSyAr-1x96O2qHiXBBEr2dQ8BgVv5rQombvI', // for Mapquest, OpenCage, Google Premier
            formatter: null         // 'gpx', 'string', ...
        }
        this.geocoder = NodeGeocoder(options)
        this.find = this.find.bind(this)
    }

    find(search, resolve, reject) {
        this.geocoder.geocode(search)
            .then(function (res) {
               resolve(res)
            })
            .catch(function (err) {
                reject(err)
            })
    }
}
module.exports = new Geocoder()