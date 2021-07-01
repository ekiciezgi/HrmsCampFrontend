import axios from "axios"
export default class JobNoticeService{
    getJobNotices(){
        return axios.get("http://localhost:8080/api/jobNotices/getall")
    }
    add(values){
        return axios.post("http://localhost:8080/api/jobNotices/add",values)
        
    }
    getById(id){
        return axios.get("http://localhost:8080/api/jobNotices/getById?id="+id)
    }
   

}