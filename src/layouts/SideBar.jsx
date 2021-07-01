import React from "react";
import { Icon, Menu,Label,Input,Button, Checkbox,Container,Image} from 'semantic-ui-react'
import { Link } from "react-router-dom";


export default function SideBar() {

  return (
    <div   >
        <Container style={{
      position:'fixed',
      height: '100%',
      overflow: 'auto',
      marginLeft:'20px',
      marginTop:'15px',
    
      }}>
 
    
     {/* <Image src='../images/İŞBUL.COM.png' style={{marginLeft:'50px',width:'80px',height:'40'}}></Image>   */}
     
      <Menu size='vertical' inverted   color='white' style={{height:'80%',color:'white',backgorundImage:'../images/İŞBUL.COM.png'}} > 

      {/* <h4 style={{color:'white',marginLeft:'15px',marginTop:'15%',fontSize:'150%'}}>KONUM</h4>
      <Menu.Item>
  <Input icon='search' placeholder='Şehir seç...' />
          </Menu.Item>
       <h4 style={{color:'white',marginLeft:'15px',marginTop:'15px',fontSize:'150%'}}>POZİSYON ARA!</h4>
       <Menu.Item>
  <Input icon='search' placeholder='pozisyon' />
            </Menu.Item> */}
         <Menu.Item   name='inbox' as={Link} to={"/jobNoticeList"} style={{fontSize:'150%'}}> 
         <Label color='red' Icon name="pointing right" >YENİ 10</Label>
 
  
  İş İlanları
</Menu.Item>

<Menu.Item
  name='spam'
  as={Link} to={"/jobNoticeAdd"}
  style={{fontSize:'150%'}}
>
  <Label>51</Label>
  <Icon name="factory"  />
İş İlanı Ekle
</Menu.Item>

<Menu.Item
  name='updates'  name='inbox' as={Link} to={"/employeeCv"} style={{fontSize:'150%'}}
>
  <Label>1</Label>
  <Icon name="user" />
 İş Arayan Cvleri
</Menu.Item>
<Menu.Item   name='inbox' as={Link} to={"/jobDetail"} style={{fontSize:'150%'}}> 
         <Label color='red' Icon name="pointing right" >YENİ 10</Label>
         <Icon name="factory"  />
  İş Detayları
  
</Menu.Item>
<Menu.Item   name='inbox' as={Link} to={"/employee"} style={{fontSize:'150%'}}> 
         <Label color='green' Icon name="pointing right" >new</Label>
         <Icon name="factory"  />
 İş Veren Şirketler
  
</Menu.Item>
<Menu.Item   name='inbox' as={Link} to={"/employeeSchoolAdd"} style={{fontSize:'150%'}}> 
         <Label color='green' Icon name="pointing right" >new</Label>
         <Icon name="factory"  />
cv okul ekle
  
</Menu.Item>
<Menu.Item   name='inbox' as={Link} to={"/employeeSchoolUpdate"} style={{fontSize:'150%'}}> 
         <Label color='green' Icon name="pointing right" >new</Label>
         <Icon name="factory"  />
cv okul güncelle
  
</Menu.Item>
<Menu.Item   name='inbox' as={Link} to={"/employeeCvCard"} style={{fontSize:'150%'}}> 
         <Label color='green' Icon name="pointing right" >new</Label>
         <Icon name="factory"  />
cv 
  
</Menu.Item>
</Menu>
</Container>

</div>
    
  );
}