import React, { useState } from 'react'
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll';
const Header = () => {
  const [mobile, setMobile] = useState(window.innerWidth<=920 ? true:  false);
  const [menu, setmenu] = useState(false);
  const updateMobileView = ()=>{

    setmenu(false); 
    setMobile(window.innerWidth<=920 ? true:  false);
    console.log("updated", menu, mobile);
  }
  const handleWindowResize = (updateMobileViewL)=>{
    let timeoutId;
    clearTimeout(timeoutId);
    return function(){
      timeoutId = setTimeout(()=>{
        updateMobileViewL();
      }, 3000);
    }
  }
  window.addEventListener('resize', handleWindowResize(updateMobileView));
  return (
    <div className='header'>
     <img src = {Logo} alt = "logo" className='logo'/>
     {menu ===false && mobile === true ?<div onClick={()=>setmenu(!menu)}><img src = {Bars} alt = "logo" className='hamburger'/></div> :
      <ul className='header-menu'>
      <li><Link onClick={()=>setmenu(false)} to ='home' spy={true} scroll={true}>Home</Link></li>
      <li><Link  onClick={()=>setmenu(false)} to ='programs' spy={true} scroll={true}>Programs</Link></li>
      <li><Link  onClick={()=>setmenu(false)} to ='reasons' spy={true} scroll={true}>Why Us</Link></li>
      <li><Link  onClick={()=>setmenu(false)} to ='plans' spy={true} scroll={true}>Plans</Link></li>
      <li><Link  onClick={()=>setmenu(false)} to ='testimonials' spy={true} scroll={true}>Testimonials</Link></li>
     </ul>} 
    </div>
  )
}

export default Header
