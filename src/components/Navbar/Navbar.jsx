import React from 'react'
import './Navbar.css'
import meImage from '../../assets/images/selected.png';
import MobileNav from './MobileNav/MobileNav';
import { useState } from 'react';



const Navbar = () => {

    const [openMenu, setopenMenu] = useState(false);
    const toggleMenu = ()=>{
        setopenMenu(!openMenu);
    }

  return (
    <>

    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img className='logo' src={meImage} alt="me"/>
            

            <ul>
                <li>
                    <a className='menu-item' href='#home'>Home</a>
                </li>
                <li>
                    <a className='menu-item' href='#skills'>Skills</a>
                </li>
                <li>
                    <a className='menu-item' href='#projects'>Projects</a>
                </li>
                <li>
                    <a className='menu-item' href='#contact'>Contact Me</a>
                </li>
                <a className='contact-btn' href="https://drive.google.com/file/d/1BXoQIK_tj9n6jDM7OoHDPmHx3zsTx76K/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        Get Resume
                    </a>
            </ul>
            <button class='menu-btn' onClick={toggleMenu}>
                    <span
                    className={"material-symbols-outlined"}
                    style={{fontSize:"1.8rem"}}
                    >
                        {openMenu ? "close" : "menu"}
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

                    </span>
                    
                                            
                </button>
                
        </div>

    </nav>
    
    
    </>
  )
}


export default Navbar