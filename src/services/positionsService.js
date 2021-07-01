import axios from "axios"
export default class PositionsService{
    getPositions(){
        return axios.get("http://localhost:8080/api/positions/getall")
    }
}