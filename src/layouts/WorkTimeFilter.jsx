import React, { useEffect, useState } from 'react'
import { Icon, Menu,Label,Input,Button,Dropdown, Checkbox,Container,Image} from 'semantic-ui-react'
import WorkTimeService from '../services/workTimeService';

export default function WorkTimeFilter({onSelect}) {
 const [workTime, setWorkTime] = useState([]);
 useEffect(() => {
    let workTimeService=new WorkTimeService();
    workTimeService.getWorkTimes().then((result)=>(setWorkTime(result.data.data)))
 }, [])
 const option = workTime.map((workTime,index)=>({
    key: index,
    text:workTime.name,
    value: workTime.id, 
  }))
  function handleChange(event,data){
    onSelect(data.value)
    
      }
    return (
      
    <div  >
      <Menu size='vertical' inverted   > 
      
      <h4 style={{color:'white',marginLeft:'10%',marginTop:'8%',fontSize:'150%'}}>ÇALIŞMA TİPİ</h4>
      <Menu.Item>
      
          <Dropdown 
          icon='search'
            placeholder="Çalışma tipi seçiniz"
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
}
