import React from 'react'
import "./MobileNav.css"
import meImage from '../../../assets/images/selected.png';

const MobileNav = ({isOpen,toggleMenu}) => {
  return (
    <>
    <div
    className={`mobile-menu ${isOpen ? "active":""}`}
    onClick={toggleMenu}
    >

    
    <div
    className='mobile-menu-container'>
        <img className='logo' src={meImage} alt=''/>
        <ul>
        <li>
                    <a className='menu-item' href='#home'>Home</a>
                </li>
                <li>
                    <a className='menu-item' href='#skills'>Skils</a>
                </li>
                <li>
                    <a className='menu-item' href='#projects'>Projects</a>
                </li>
                <li>
                    <a className='menu-item' href='#contact'>Contact Me</a>
                </li>
                <a className='contact-btn' href="https://drive.google.com/file/d/1pdaPkfogVg1rNaJyWNc9yE41BPx8ibh7/view" target="_blank" rel="noopener noreferrer">
                        Get Resume
                    </a>
        </ul>
        </div>
    </div>
    </>
  )
}

export default MobileNav