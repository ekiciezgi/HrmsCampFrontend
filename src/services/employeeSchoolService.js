import axios from "axios"
export default class EmployeeSchoolService{

    getEmployeeSchools(){
        return axios.get("http://localhost:8080/api/employeSchool/getAll")
    }
    getAllByEmployeeCvId(id)
    {
        return axios.get("http://localhost:8080/api/employeSchool/get?id="+id);
    }
    add(values){
        return axios.post("http://localhost:8080/api/employeSchool/add",values);
    }
    update(values){
        return axios.post("http://localhost:8080/api/employeSchool/update",values);
    }
}