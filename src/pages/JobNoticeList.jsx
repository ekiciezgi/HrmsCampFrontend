import JobNoticeService from "../services/jobNoticeService"
import React, { useState,useEffect } from "react";
import { Icon,  Menu, Table,Card,Button, Header,  Rating,Label,Container ,Grid} from "semantic-ui-react";
import { Link } from "react-router-dom";
import CityFilter from "../layouts/CityFilter";
import WorkTimeFilter from "../layouts/WorkTimeFilter";
import { addToFavori} from "../store/actions/favoriActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export default function JobNoticeList() {


   const dispatch = useDispatch();
    const [jobNotices, setJobNotices] = useState([]);
    const [filteredJobAdverts, setFilteredJobAdverts] = useState(null); //filtrelenmiş state
    const [selectedWorkTime, setSelectedWorkTime] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
       let jobNoticesService=new JobNoticeService()
       jobNoticesService.getJobNotices().then(result=>setJobNotices(result.data.data))
    }, [])

    useEffect(() => {
      let filteredJobByJobAdverts;
      if (selectedCity && selectedWorkTime) {
        filteredJobByJobAdverts = jobNotices.filter(
          (jobNotice) =>
            jobNotice.city.cityId === selectedCity &&
            jobNotice.workTime.id === selectedWorkTime
        );
      } else if (selectedCity) {
        filteredJobByJobAdverts = jobNotices.filter(
          (jobNotice) => jobNotice.city.cityId === selectedCity
        );
      } else if (selectedWorkTime) {
        filteredJobByJobAdverts = jobNotices.filter(
          (jobNotice) => jobNotice.workTime.id === selectedWorkTime
        );
      } else {
        filteredJobByJobAdverts = null;
      }
      setFilteredJobAdverts(filteredJobByJobAdverts);
    }, [selectedCity, selectedWorkTime]);
   
    const handleAddToFavori=(jobNotice)=>{
      dispatch(addToFavori(jobNotice));
    toast.success(`${jobNotice.jobPosition.positionName} Favorilerine Eklendi!`)
      
    }
    return (
      
     
     <div mobile={0} tablet={8} computer={4}>
   
   <ToastContainer position="bottom-right"/>


   <Menu inverted  widths={2} style={{marginTop:'0%',height:'110px',marginLeft:'0%'}}>
        <Menu.Item>
        <WorkTimeFilter onSelect={handleSelectWorkTime} />
        </Menu.Item>
        <Menu.Item>
          
        <CityFilter onSelect={handleSelectCity} />
        </Menu.Item>
      
        </Menu>

        {/* <Header as="h2">
          Job Adverts
          <Header.Subheader>
            Aşağıda sistemimizde olan iş ilanlarını görmektesiniz
          </Header.Subheader>
        </Header>  */}
      <Table celled>
        <Table.Header>  
     
          <Table.Row mobile={16} tablet={8} computer={12}>
          <Table.HeaderCell  icon='search' >Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon İsmi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama </Table.HeaderCell>
            <Table.HeaderCell>En Yüksek Ücret </Table.HeaderCell>
            <Table.HeaderCell>En Düşük Ücret</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Şehir </Table.HeaderCell>
            {/* <Table.HeaderCell>Aktiflik Durumu </Table.HeaderCell> */}
           
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {filteredJobAdverts
              ? filteredJobAdverts.map((jobNotice) => (
                <Table.Row key={jobNotice.id}>
           
                <Table.Cell><Icon name='hand peace outline' />
                <Label as='a' color='black' ribbon><Button onClick={()=>handleAddToFavori(jobNotice)} color='black'>
                <Rating    icon='heart outline'color='white' defaultRating={0} maxRating={1}  /></Button>
                </Label>
                {jobNotice.companyName}</Table.Cell>

            <Table.Cell>{jobNotice.jobPosition.positionName}</Table.Cell> 
              <Table.Cell>{jobNotice.description}</Table.Cell>
              <Table.Cell>{jobNotice.maxPay}</Table.Cell>
              <Table.Cell>{jobNotice.minPay}</Table.Cell>
              <Table.Cell>{jobNotice.applicationDeadline}</Table.Cell>
              <Table.Cell>{jobNotice.city.cityName}</Table.Cell>
              {/* <Table.Cell>{jobNotice.activityStatus}</Table.Cell> */}
              <Button primary as={Link} to={`/jobDetail/${jobNotice.id}`} >DETAİL</Button>

            </Table.Row>
                ))
              :jobNotices.map((jobNotice) => (
            <Table.Row key={jobNotice.id}>
           
                <Table.Cell><Icon name='hand peace outline' />
                <Label as='a' color='black' ribbon><Button onClick={()=>handleAddToFavori(jobNotice)} color='black'>
                <Rating    icon='heart outline'color='white' defaultRating={0} maxRating={1}  /></Button>
                </Label>
                {jobNotice.companyName}</Table.Cell>

            <Table.Cell>{jobNotice.jobPosition.positionName}</Table.Cell> 
              <Table.Cell>{jobNotice.description}</Table.Cell>
              <Table.Cell>{jobNotice.maxPay}</Table.Cell>
              <Table.Cell>{jobNotice.minPay}</Table.Cell>
              <Table.Cell>{jobNotice.applicationDeadline}</Table.Cell>
              <Table.Cell>{jobNotice.city.cityName}</Table.Cell>
              {/* <Table.Cell>{jobNotice.activityStatus}</Table.Cell> */}
              <Button primary as={Link} to={`/jobDetail/${jobNotice.id}`} >DETAİL</Button>

            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    

     
      {jobNotices.map((jobNotice) => (

         <Container style={{marginTop:'15px',marginLeft:'15px'}} itemsPerRow={3}  className='ui link cards fluid'>
         
            <Card style={{textAlign:'center',height:'100%'}}
         color="red"
         image='../images/Black Flat & Minimalist Accounting Business Website.png' style={{width:'40%',height:'20%'}}
          meta={jobNotice.companyName}
         description={jobNotice.description}
         /> 
       
         </Container>

      ))}
  
        </div>
        
    )
    function handleSelectWorkTime(id) {
      setSelectedWorkTime(id);
    }
  
    function handleSelectCity(cityId) {
      setSelectedCity(cityId);
    }
   
}
