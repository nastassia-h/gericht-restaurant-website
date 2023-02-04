import './navbar.scss'
import React, { useState } from 'react'
import { gericht } from '../../assets'
import { FiAlignRight, FiX } from 'react-icons/fi'

const Menu = () => {
   return (
      <div className='menu__links'>
         <a className='menu__link' href="#home">Home</a>
         <a className='menu__link' href="#pages">Pages</a>
         <a className='menu__link' href="#contact">Contact Us</a>
         <a className='menu__link' href="#blog">Blog</a>
         <a className='menu__link' href="#landing">Landing</a>
      </div>
   );
};


const Navbar = () => {
   const [activeMenu, setActiveMenu] = useState(false);
   return (
      <div className='navbar'>
         <div className='navbar__logo'>
            <img src={gericht} alt="" />
         </div>
         <div className='navbar__header-links'>
            <Menu />
         </div>
         <div className='navbar__action'>
            <a className='menu__link' href="">Log in / registration</a>
            <a className='menu__link' href="">book table</a>
         </div>
         <div className='navbar-menu__icon'>
            {activeMenu
               ? <FiX onClick={() => setActiveMenu(false)} />
               : <FiAlignRight onClick={() => setActiveMenu(true)} />
            }
         </div>
         {activeMenu &&
            <>
               <div className='full-screen' onClick={(e) => { setActiveMenu(false) }}>
               </div>
               <div className='navbar-menu__list scale-up-center'>
                  <Menu />
                  <div className='navbar-menu__action'>
                     <a className='menu__link' href="">Log in / registration</a>
                     <a className='menu__link' href="">book table</a>
                  </div>
               </div>
            </>
         }
      </div>
   )
}

export default Navbar