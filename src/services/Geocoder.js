import Base from './Base'
class Geocoder extends Base{
    constructor(){
        super()
        this.find=this.find.bind(this)
    }
    find(term){
        return this.get('geocoder/'+term)
    }
}
export default new Geocoder()