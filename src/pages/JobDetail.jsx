import React, { useState,useEffect } from "react";
import { Card} from "semantic-ui-react";
import CityService from "../services/cityService";
import JobNoticeService from "../services/jobNoticeService"
import { useParams } from 'react-router'

export default function JobDetail() {

  let {id} = useParams();
    const [jobNotices, setJobNotices] = useState({})
    // const [city, setCity] = useState({})
    
    useEffect(() => {
    let jobNotices=new JobNoticeService();
    jobNotices.getById(id).then((result)=>setJobNotices(result.data.data))
     
    })
    return (
        <div>
    
        <Card
        color="red"
        image='../images/İŞBUL.COM.png' style={{width:'50%',height:'20%',marginLeft:'350px',marginTop:'40px'}}
          fluid
          header={jobNotices?.jobPosition?.positionName}
          meta={jobNotices?.companyName}
         //meta={jobNotice.city.cityName}
          description={jobNotices?.description}
        />
    
        </div>
    )
}
