import axios from "axios"
export default class EmployeeLanguageService{
    getEmployeeLanguages(){
        return axios.get("http://localhost:8080/api/employeeLanguage/getAll")
    }
    getAllEmployeeCvId(values)
    {
        return axios.get("http://localhost:8080/api/employeeLanguage/getAllByEmployeeCv_id?id="+values);
    }
   
    add(values){
        return axios.post("http://localhost:8080/api/employeeLanguage/add",values);
    }
    update(values){
        return axios.post("http://localhost:8080/api/employeeLanguage/update",values);
    }
}