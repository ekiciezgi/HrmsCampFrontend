import React from 'react'
import { useSelector } from 'react-redux'
import { Card,Container} from "semantic-ui-react";
import { Link } from 'react-router-dom';
export default function FavoriJob() {

    const {favoriItems} = useSelector(state => state.favori)
    return (
        <div>
       
            {favoriItems.map((favoriItem)=>(
<Container style={{marginTop:'15px',marginLeft:'15px'}} itemsPerRow={3}  className='ui link cards fluid'>

   <Card style={{textAlign:'center',height:'100%'}}
color="red"
image='../images/Black Flat & Minimalist Accounting Business Website.png' style={{width:'40%',height:'20%'}}
 meta={favoriItem.jobNotice.companyName}
description={favoriItem.jobNotice.description}
/> 
           
</Container>
            ))}
            
        </div>
    )
}
