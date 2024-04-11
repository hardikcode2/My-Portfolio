import React from 'react'
import './Hero.css'
import my from '../../assets/images/me.jpg'
import rlogo from '../../assets/images/realogo.png'
import jlogo from '../../assets/images/javal.png'
import plogo from '../../assets/images/pythonL.png'
import clogo from '../../assets/images/css.png'


const Hero = () => {
  return (
    <section className='hero-container' id='home'>
        <div className='hero-content'>
            <h2>Frontend & Software Developer</h2>
            <p>Passionate Frontend Web Developer | Skilled in Data Structures & Algorithms</p>
        </div>

        <div className='hero-img'>
            <div>
                <div className='tech-icon'>

                
                <img src={rlogo} alt=''/>
                </div>
                <img src={my} alt=''/>
            </div>
            <div>
                <div className='tech-icon'>
                    <img src={jlogo} alt=''/>
                </div>
                <div className='tech-icon'>
                    <img src={plogo} alt=''/>
                </div>
                <div className='tech-icon'>
                    <img src={clogo} alt=''/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero