import React from 'react'
import './Footer.css'
import licon from '../../assets/images/pngwing.com (1).png'

const Footer = () => {
  return (
  <div className="footer">© 2024 Hardik Chaurasia, Developer 💻👨🏻‍💻
  <a href='https://www.linkedin.com/in/hardik-chaurasia-6a12692bb/' target='_blank' rel='noreferrer' className='contact-link'>
  <img src={licon} alt='linked' className='linikcon'/>
  </a>
  </div>
    
  );
};

export default Footer