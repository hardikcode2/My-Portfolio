import React from 'react'
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';
import gitu from '../../assets/images/github-mark-white.png'
import mailu from '../../assets/images/email-icon-126.png'

const ContactMe = () => {
  return (
    <section className="contact-container" id='contact'>
  <h5>Contact Me</h5>

  <div className="contact-content">
    <div style={{ flex: 1 }}>
        <ContactInfoCard
        iconUrl={mailu}
        text="moneybro02@gmail.com"
        />
        
        <a href='https://github.com/hardikcode2' target='_blank' rel='noopener noreferrer' id='gitub'>
        <ContactInfoCard
        iconUrl={gitu}
        text="GitHub Profile"
        />
        </a>
        
    </div>
    <div style={{ flex: 1 }}>
      <ContactForm/>
    </div>
  </div>
</section>
  );
};

export default ContactMe