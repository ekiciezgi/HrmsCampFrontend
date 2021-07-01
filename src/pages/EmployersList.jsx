import React, { useState,useEffect } from "react";
import { Icon,  Menu, Table} from "semantic-ui-react";
import EmployersService from "../services/employersService";

export default function EmployersList() {

    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employersService=new EmployersService()
        employersService.getEmployers().then(result=>setEmployers(result.data.data))
    }, [])
  

    return (
        <div>
              <Table celled>
        <Table.Header>   
          <Table.Row>
         
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Web Adres</Table.HeaderCell>
            <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
         
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employers => (
            <Table.Row key={employers.id}>
                <Table.Cell>{employers.companyName}</Table.Cell>
              <Table.Cell>{employers.webAddress}</Table.Cell>
              <Table.Cell>{employers.phone}</Table.Cell>
           
         
              </Table.Row>
          )))}
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
    )
}
