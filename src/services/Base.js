import axios from 'axios'
const URL = 'http://localhost:3001'
class Base {
    constructor(){
        this.axiosInstance = axios.create({
            baseURL: URL,
            headers: {

            }
        })
        this.get=this.get.bind(this)
    }
    get(uri, params = {}) {
        try{
            return this.axiosInstance.get(uri, {params})
                .then(response => {
                    return response.data
                })
                .catch(error=>console.log(error))
        }catch (e){
            console.log('Error Base:get',e)
        }
    }
}

export default Base