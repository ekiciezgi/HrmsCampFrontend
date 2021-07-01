
import React, { useEffect, useState } from "react";
import CityService from '../services/cityService';
import { Icon, Menu,Label,Input,Button,Dropdown, Checkbox,Container,Image} from 'semantic-ui-react'
import { Link } from "react-router-dom";
export default function CityFilter({onSelect}) {

    const [cities, setCities] = useState([]);
    useEffect(() => {
       let cityService=new CityService();
       cityService.getCity().then((result)=>setCities(result.data.data));
       
    }, [])
    const option=cities.map((city,index)=>({
        key:index,
        text:city.cityName,
        value:city.cityId

    }));
    return (
        <div >
           
            <Menu size='vertical' inverted   color='white'  > 
      
            <h4 style={{color:'white',marginLeft:'15px',marginTop:'8%',fontSize:'150%'}}>KONUM</h4>
            <Menu.Item>
            <Dropdown 
          icon='search'
            placeholder="Şehir seçiniz"
            selection
            search
            clearable
            options={option}
            onChange={handleChange}
            />
                </Menu.Item>
                </Menu>
                </div>
    )
    
  function handleChange(event,data){
    onSelect(data.value)
    
      }
}
