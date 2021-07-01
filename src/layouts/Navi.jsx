import './Navi.css';
import { Button } from './Button';
import React, {useState,useEffect} from "react";
import {Link } from 'react-router-dom';
import CartSummary from "./CartSummary";
import { Container, Icon, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import FavoriButton from './FavoriButton';
import { useSelector } from "react-redux";
export default function Navi() {
const {favoriItems} = useSelector(state => state.favori);

  const[click,setClick]=useState(false);
    const [button,setButton]=useState(true);

    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=> setClick(false);

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize',showButton);
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useHistory()

  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }


    return (
      <>
      <nav className="navbar">
      <div className="navbar-container">
       <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
           ISBUL.COM <i class='fab fa-typo3'/>
       </Link>
       <div className='menu-icon' onClick={handleClick}>
           <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
         </div>
       <ul className={click ? 'nav-menu active' : 'nav-menu'}>
       <li className='nav-item'>
           <Link to='/homePage'className='nav-links'
            onClick={closeMobileMenu}> ANASAYFA</Link>
           </li>
           <li className='nav-item'>
           <Link to='/jobNoticeList'className='nav-links'
            onClick={closeMobileMenu}>İŞ İLANLARI</Link>
           </li>
           <li className='nav-item'>
           <Link to='/jobNoticeAdd'className='nav-links'
            onClick={closeMobileMenu}>İLAN EKLE</Link>
           </li>
           <li  className='nav-item'>
           <Link to='/favoriJob' className='nav-links'
            onClick={closeMobileMenu} icon='heart'> {favoriItems.length>0&&<FavoriButton/>}</Link>
          
           </li>
           
           <li >
           <Link to='/sign-up'className='nav-links-mobile' 
           onClick={closeMobileMenu}
           > GİRİŞ YAP</Link>
           
          
           </li>
           
           </ul>
         {button && <Button buttonStyle='btn--outline' >GİRİŞ YAP</Button>}
  
      </div>
      </nav>
      </>


      //   <div>
      //       <Menu inverted fixed="top">
      //           <Container>
      //           <ul >
      //   <li >
      //     <a  href="#">
      //     <h1  >İşBul.Com</h1>
      //     </a>
      //   </li>
      //   </ul>
      //   <Menu.Item
      //     name='ANASAYFA'
              
      //   />
        
      //   <Menu.Item
      //     name='KARİYER REHBERİ'
        
      //   />

      //   <Menu.Menu position='right'>
       
      //    <CartSummary/>
          
      //    {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>
      //       :<SignedOut signIn={handleSignIn}/>}
       
      //   </Menu.Menu>
        
      //   </Container>
      // </Menu>
            
 
      //   </div>
    )
}
<div class="ui label"><i aria-hidden="true" class="mail icon"></i> 23</div>