import React, { useEffect, useState } from 'react'

import { Button, Card, Image, Rating, Grid, Icon } from "semantic-ui-react";
import { toast } from "react-toastify";
import EmployeeSchoolAdd from '../pages/Cv/EmployeeSchoolAdd'
import EmployeeCvService from '../services/employeeCvService';
import EmployeeSchoolUpdate from './Cv/EmployeeSchoolUpdate';
import EmployeeLanguageAdd from './Cv/EmployeeLanguageAdd';
import EmployeeLanguageUpdate from './Cv/EmployeeLanguageUpdate';
import EmployeeSchoolService from '../services/employeeSchoolService';
import JobExperianceUpdate from './Cv/JobExperianceUpdate';
import JobExperianceAdd from './Cv/JobExperianceAdd';
import JobExperienceService from '../services/jobExperience'
import EmployeeLanguageService from "../services/employeeLanguageService"
export default function EmployeeCvCard() {

    const [cv, setCvs] = useState(null)
    const [employeeSchool, setEmployeeSchool] = useState(null)
    const [language, setLanguage] = useState(null)
    const [jobE, setJobE] = useState(null)
    useEffect(() => {
        let employeeCvService = new EmployeeCvService();
        employeeCvService.getById(2).then((result) => setCvs(result.data.data));
        
         let schoolService=new EmployeeSchoolService();
        schoolService.getAllByEmployeeCvId(2).then((result)=>setEmployeeSchool(result.data.data))

         let employeeLanguageService=new EmployeeLanguageService();
         employeeLanguageService.getAllEmployeeCvId(2).then((result)=>setLanguage(result.data.data))

         let jobExperianceService=new JobExperienceService();
        jobExperianceService.getAllByEmployeeCvId(2).then((result)=>setJobE(result.data.data))
    }, []);
 
    console.log(employeeSchool)
   return(<div>

        <Card.Group>
              
                    <Card fluid color="teal" >
                        <Card.Content>
                        <Grid>
                        <Grid.Column width={5}>
                            <Image floated="left" size="medium" src={cv?.imageUrl} />
                            </Grid.Column>
                            <Card.Header>{cv?.firstName} {cv?.lastName}</Card.Header>
                            <Grid.Column width={11}>
                                    <Card.Header><h2>{cv?.firstName} {cv?.lastName}</h2></Card.Header>
                   
                                    <Card.Description style={{ marginTop: ".5em" }}><a href={cv?.githubLink} target="_blank" style={{ color: "black" }}><Icon name="github" size="big" /><b>Github</b></a></Card.Description>
                                    <Card.Description style={{ marginTop: ".5em" }}><a href={cv?.linkedinLink} target="_blank" style={{ color: "black" }}><Icon name="linkedin" color="blue" size="big" /><b>Linkedin</b></a></Card.Description>
                                </Grid.Column>
                                </Grid>
                            <Card.Description>
                                {cv?.coverLetter}
                                <Card fluid style={{ marginTop: "1em" }} color="red">
                                    <Card.Content header='Kişisel Bilgiler' />
                                    <Card.Content><b>Adı: </b>{cv?.employee.firstName}</Card.Content>
                                    <Card.Content><b>Soyadı: </b>{cv?.employee.lastName}</Card.Content>
                                    <Card.Content><b>Doğum Yılı: </b>{cv?.employee.birthday}</Card.Content>
                                    <Card.Content><b>Email: </b>{cv?.employee.email}</Card.Content>
                                </Card> 
                                {employeeSchool?.map((school)=>(
                              <Card fluid style={{ marginTop: "1em" }} color="red">
                              <Card.Content header='Okul Bilgisi' />
                              <Card.Content><b>Okul Adı: </b>{school?.schoolName}</Card.Content> 
                              <Card.Content><b>Okul departmanı: </b>{school?.schoolDepartment}</Card.Content>
                              <Card.Content><b>Okul Bitiş yılı: </b>{school?.finishDate}</Card.Content>
                              <Card.Content><b>Okul Başlangıç yılı: </b>{school?.startDate}</Card.Content> 
                            
                               <EmployeeSchoolAdd  employeeCv={cv}></EmployeeSchoolAdd>
                               <EmployeeSchoolUpdate  employeeCv={cv}></EmployeeSchoolUpdate>
      
                          </Card>
                          ))}
                               {language?.map((lan)=>(
                                     <Card fluid style={{ marginTop: "1em" }} color="red">
                                     <Card.Content header='Dil  Bilgisi' />
                                     <Card.Content><b>Dil Adı: </b>{lan?.language}</Card.Content> 
                                     <Card.Content><b>Dil Seviyesi: </b>{lan?.level}</Card.Content>
                                    
                                      <EmployeeLanguageAdd  employeeCv={cv}></EmployeeLanguageAdd>
                                      <EmployeeLanguageUpdate  employeeCv={cv}></EmployeeLanguageUpdate>
             
                                 </Card>
                               ))}
                               {jobE?.map((job)=>(
                                     <Card fluid style={{ marginTop: "1em" }} color="red">
                                     <Card.Content header='Deneyim' />
                                     <Card.Content><b>İş Adı: </b>{job?.jobplaceName}</Card.Content> 
                                     <Card.Content><b>İş Detayı: </b>{job?.jobDetail}</Card.Content>
                                     <Card.Content><b>İş Pozisyonu: </b>{job?.position}</Card.Content>
                                     <Card.Content><b>Başlama Zamanı: </b>{job?.startDate}</Card.Content>
                                     <Card.Content><b>Bitirme Zamanı: </b>{job?.finishDate}</Card.Content>
                                     
                                    
                                   
                                      <JobExperianceAdd  employeeCv={cv}></JobExperianceAdd>
                                      <JobExperianceUpdate  employeeCv={cv}></JobExperianceUpdate>
                                      </Card>
                               ))}
                               
                                  
                            </Card.Description>
                        </Card.Content>  
                        <Card.Content extra>
                            <div className="ui two buttons"> </div>
                                <Button color="teal">
                                    Güncelle
                                </Button>
                            
                        </Card.Content>
                    </Card> 
               
            </Card.Group>
      </div>
    )
}
