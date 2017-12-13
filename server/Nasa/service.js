const config = require('config.json')(__dirname + '/../config.json'), request = require('request'), { URL, URLSearchParams } = require('url'), cheerio = require('cheerio');
class Nasa {
    constructor() {
        let url = new URL(config.nasa.url)
        let params = new URLSearchParams(config.nasa.params);
        url.search = params
        this.url = url
    }

    find({lat, lon}, resolve, reject) {
        //console.log('Comienzo',new Date());
        this.url.searchParams.set('lat', lat)
        this.url.searchParams.set('lon', lon)
        //console.log('url', this.url.toString())
        request(this.url.toString(), (error, response, html) => {
            if (!error && response.statusCode == 200) {
                let result = []
                const $ = cheerio.load(html)
                $('table').each((i, table)=>{
                    //console.log($(table).attr('summary'))
                    if($(table).attr('summary').indexOf('Monthly Averaged Radiation Incident On An Equator-Pointed Tilted Surface')!==-1){
                        //console.log($('tr', table).html())
                        const headerHtml =[]
                            $('tr', table).eq(0).find('td').each((i,col)=>{
                                headerHtml.push($(col).text())
                            })
                        const rowsHtml = []
                        $('tr', table).slice(1).each((i,tr)=>{
                            const _rowsHtml=[]
                            $(tr).eq(0).find('td').each((i,col)=>{
                                _rowsHtml.push($(col).text())
                            })
                            rowsHtml.push(_rowsHtml)
                        })
                        //console.log('col', headerHtml)
                        //result = result.concat(headerHtml, rowsHtml)
                        result.push(headerHtml)
                        result = result.concat(rowsHtml)
                    }
                })
                //console.log('Fin',new Date());
                resolve(result)
            } else {
                //console.log('Fin',new Date());
                reject(error)
            }
        })
    }
}
module.exports = new Nasa()