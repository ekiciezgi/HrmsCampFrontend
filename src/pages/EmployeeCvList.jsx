import EmployeeCvService from "../services/employeeCvService"
import React, { useState,useEffect } from "react";
import {  Menu, Table, Card, Icon, Image,Button,Container,Grid} from "semantic-ui-react";
import CardItem from "../layouts/CardItem";
import '../layouts/Cards.css'
export default function EmployeeCvList()
{
   const [employeeCvs,setEmployeeCvs] = useState([])
   
   useEffect(() => {
      let employeeCvService=new EmployeeCvService()
      employeeCvService.getEmployeeCvs().then(result=>setEmployeeCvs(result.data.data))
   }, [])

   return (
  
    <div>
      
      <Container>
       {employeeCvs.map((employeeCv) => (
         <Container style={{marginLeft:'15px',height:'130%'}} >

{/* <div className='cards'>
    
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem
            src={employeeCv.imageUrl}
            text={employeeCv.abilities}
            label={employeeCv.firstName}
            path='/services'
          />
               </ul>
      </div>
    </div>
  </div> */}
     
    
     <Card raised class="row"  style={{float:'left',marginTop: '10px',marginRight: '15px',height:'130%',marginBottom:'15%',
      marginLeft:'4px'}}>

    <Image src={employeeCv.imageUrl} wrapped ui={false} />
    <Card.Content style={{height:'50%',color:'red'}}>
      <Card.Header >{employeeCv.firstName} {employeeCv.lastName}</Card.Header>
      <Card.Meta>{employeeCv.coverLetter}</Card.Meta>
      <Card.Meta>{employeeCv.abilities}</Card.Meta>
      <Card.Meta>
        <Icon name='github' src='{employeeCv.githubAddress}' style={{color:'black'}}/>
        <Icon name='linkedin' src='{employeeCv.githubAddress}' style={{color:'blue'}}/>
      </Card.Meta>
    </Card.Content>
      </Card> 
     
      
         </Container>
    
  
      ))}
     
    </Container>
      <Table celled>
        <Table.Header >   
          <Table.Row>
            <Table.HeaderCell>GİTHUB LİNK</Table.HeaderCell>
            <Table.HeaderCell>LİNKEDİN ADRESS</Table.HeaderCell>
            <Table.HeaderCell>YETKİNLİKLER</Table.HeaderCell>
            <Table.HeaderCell>İLGİ ALANLARI</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employeeCvs.map((employeeCv) => (
            <Table.Row key={employeeCv.id}>

              <Table.Cell>{employeeCv.githubAddress}</Table.Cell>
                <Table.Cell>{employeeCv.linkedinAddress}</Table.Cell>
              <Table.Cell>{employeeCv.coverLetter}</Table.Cell>
              <Table.Cell>{employeeCv.abilities}</Table.Cell>
      
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

    </div>
    
  );
 }