import axios from "axios"
export default class JobExperienceService{
    
    getAllByEmployeeCvId(id)
    {
        return axios.get("http://localhost:8080/api/jobExperience/getAllByEmployeeCv_id?id="+id);
    }
    add(values){
        return axios.post("http://localhost:8080/api/jobExperience/add",values);
    }
    update(values){
        return axios.post("http://localhost:8080/api/jobExperience/update",values);
    }
   getall(){
    return axios.get("http://localhost:8080/api/jobExperience/getAll");
   }
}