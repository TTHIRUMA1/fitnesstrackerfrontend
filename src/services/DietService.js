import axios from 'axios';

const DIET_DIET_BASE_URL = "http://localhost:9090/diet";

class DietService {

    getDiets(){
        return axios.get('http://localhost:9090/diet/getDiets');
    }

    createDiet(diet){
        return axios.post('http://localhost:9090/diet/adddiet',diet);
    }
    updateDiet(diet){
        return axios.put('http://localhost:9090/diet/updatediet',diet);
    }
    getDietById(id){
        return axios.get('http://localhost:9090/diet/getDietById/'+id);
    }

    deleteDiet(id){
        return axios.delete('http://localhost:9090/diet/deletediet/'+id);
    }
}
 
export default new DietService()