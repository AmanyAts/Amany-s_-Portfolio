import React from 'react'
import './intro.css'
import lap from '../../img/lap.jpg'
import HeaderSocial from './HeaderSocials'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';

const Intro = () => {
    return (
        <header className='i'>
            <div className="container header__container ">
                <div className="me ">
                <h5>Hello, it's me</h5>
                <h1>Amany Alattas</h1>
                <div className="text-light">Fullstack Developer</div>
                </div>
                
                <div className="cta">
                <a href="" className='btn'>Get to know me</a>
                <a href="#contact" className='btn btn-primary'>Let's talk</a>
                </div>
                
                

                <a href="#contact" className="scroll_down">Scroll Down</a>
                <div className="header__socials">
            <a href="https://www.linkedin.com/in/amany-alattas/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            <a href="https://github.com/AmanyAts" target="_blank" rel="noreferrer"><FaGithub/></a>
            
        </div>
                </div> 
        
        </header>

        // <div className='i'>
        //     {/* <img src={lap} alt="" className="i-img"/> */}
        //     <div className="i-left">
        //         <div className="i-left-wrapper">
        //             <h2 className="i-intro">Hello, it's me</h2>
        //             <h1 className="i-name">Amany Alattas</h1>
        //             <div className="i-title">
        //                 <div className="i-title-wrapper">
        //                     <div className="i-title-item">Full stack Developer</div>
        //                     {/* <div className="i-title-item">UI/UX Designer</div>
        //                 <div className="i-title-item">API developer</div> */}


        //                 </div>
        //             </div>
                   

        //         </div>

        //     </div>
           
        //     <div className="i-right">
        //     <div className="i-desc">kkmklm</div>
        //         {/* <img src={lap} alt="" className="i-img"/> */}
        //     </div>
        // </div>
    )
}

export default Intro
