
import axios from "axios"
export default class EmployeesService{
    getEmployees(){
        return axios.get("http://localhost:8080/api/employee/getall")
    }
}