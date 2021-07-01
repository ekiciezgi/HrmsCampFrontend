import axios from "axios"
export default class EmployeeCvService{
    getEmployeeCvs(){
        return axios.get("http://localhost:8080/api/employeeCv/getAll")
    }
    update(values){
        return axios.post("http://localhost:8080/api/employeeCv/updatecv",values);
    }
   getById(values){
       return axios.get("http://localhost:8080/api/employeeCv/getById?id="+values)
   }
    findByEmployeeId(values){
        return axios.get("http://localhost:8080/api/employeeCv/findByEmployeeCvId?id="+values)
        
    }
    
}