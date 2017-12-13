import Base from './Base'
class Nasa extends Base{
    constructor(){
        super()
        this.find=this.find.bind(this)
    }
    find(latitude, longitude){
        return this.get(`radiation/${latitude}/${longitude}`)
    }
}
export default new Nasa()