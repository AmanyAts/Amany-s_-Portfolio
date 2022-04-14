import React from 'react'
import './about.css'
import ab from '../../../img/About.jpeg'
import { VscCode } from "react-icons/vsc";

const About = () => {
    return (
        <section className="a" id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ab} alt="About Image"/>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <VscCode className="about__icon"/>
                            <h5>Languages</h5>
                            <small>html , Java, C#,JavaScript,SQL</small>
                        </article>
                        <article className="about__card">
                            <VscCode className="about__icon"/>
                            <h5>Framework</h5>
                            <small>Ruby on rails, ReactJS, expressJS</small>
                        </article>
                    </div>
                    <p>
                    I'm an IT graduate with passion in programming and technical skills.
                    I chose that field of study because I’ve always been interested in IT and programming,I have some experience in both Website design and development equally.
                and  looking to create innovative solutions in real world challenges.I really enjoy developing and programming  
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's talk</a>

                </div>
            </div>
            {/* <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={ab} alt="" className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">I'm an IT graduate with passion in programming and technical skills.
 </p>
                <p className="a-desc">I chose that field of study because I’ve always been interested in IT and programming,I have some experience in both Website design and development equally.
                and  looking to create innovative solutions in real world challenges.I really enjoy developing and programming
                </p>
              <div className="skill">  <p>My skills are not limited to:<br/><div >Languages:</div> html , Java, C#,JavaScript,SQL.</p> <p><div>Framework:</div> Ruby on rails, ReactJS, expressJS.</p></div>
            </div> */}
        </section>
    )
}

export default About
