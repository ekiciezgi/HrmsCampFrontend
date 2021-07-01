import axios from "axios";

export default class SystemEmployees{
    getSystemEmployees(){
        return axios.get("http://localhost:8080/api/systemEmployees/getAll")
    }
    getByUserId(id){
        return axios.get("http://localhost:8080/api/systemEmployees/getByUser_Id?id=",id)
    }
    
}