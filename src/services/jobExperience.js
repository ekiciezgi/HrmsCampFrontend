import axios from "axios"
export default class JobExperienceService{
    
    getAllEmployeeCvId(id)
    {
        return axios.get("http://localhost:8080/api/jobExperience/getAllByEmployeeCv_id?id="+id);
    }
    add(values){
        return axios.post("http://localhost:8080/api/jobExperience/add",values);
    }
    update(values){
        return axios.post("http://localhost:8080/api/jobExperience/updateCv",values);
    }
   getall(){
    return axios.post("http://localhost:8080/api/jobExperience/getAll");
   }
}