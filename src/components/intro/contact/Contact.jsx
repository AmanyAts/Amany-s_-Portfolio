import React from 'react'
import "./contact.css"
import mail from '../../../img/mail.png'
import phone from '../../../img/phonee.png'
import twiter from '../../../img/twitter.png'
import add from '../../../img/addess.png'
import git from '../../../img/github.png'
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from '../../../context';
import {AiOutlineMail} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'


//phone.jpeg


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    // const theme = useContext(ThemeContext);
    // const darkMode = theme.state.darkMode;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_7dnk4zn",
          "template_vqtoeov",
          formRef.current,
          "UtyCtLNTrFBFD03-B"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
          },
          (error) => {
            console.log(error.text);
          }
        );
        e.target.reset()
    };
    return (
        <section id='contact'>
            <h5>Let's talk about your projects</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>amanyalattass@gmail.com</h5>
                        <a href="mailto:amanyalattass@gmail.com">message me</a>
                    </article>

                    <article className="contact__option">
                        <FiTwitter className="contact__option-icon"/>
                        <h4>Twitter</h4>
                        <h5>@mooony_aa</h5>
                        <a href="https://twitter.com/mooony_aa">message me</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>whatsapp</h4>
                        <h5>+966 562 61 6676</h5>
                        <a href="https://api.whatsapp.com/send?phone=+966562616676">message me</a>
                    </article>
                </div>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your full name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea type="text" name="message" row='7' placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send</button>
                
                </form>
               
            </div>
        </section>
        // <section className="c" id="contact">
        //     <div className="c-bg"></div>
        //     <div className="c-wrapper">
        //         <div className="c-left">
        //             <h1 className="c-title">
        //                 Let's talk about your projects
        //             </h1>
        //             <div className="c-info">
        //                 {/* phone */}
        //                 <div className="c-info-item">
        //                     <img src={phone} alt="" className="c-icon" />
        //                     <a href="tel:00966562616676">+966 562616676</a>

        //                 </div>
        //                 {/* mail */}
        //                 <div className="c-info-item">
        //                     <img src={mail} alt="" className="c-icon" />
        //                     <a href="mailto:amanyalattass@gmail.com">amanyalattass@gmail.com</a>

        //                 </div>

        //                 {/* address */}
        //                 <div className="c-info-item">
        //                     <img src={add} alt="" className="c-icon" />
        //                     Saudi Arabia, Jeddah
        //                 </div>

        //                 {/* twitter */}
        //                 <div className="c-info-item">
        //                     <img src={twiter} alt="" className="c-icon" />

        //                     <a href="https://twitter.com/mooony_aa">@mooony_aa</a>

        //                 </div>

        //                 {/* github */}
        //                 <div className="c-info-item">
        //                     <img src={git} alt="" className="c-icon" />
        //                     <a href="https://github.com/AmanyAts">AmanyAts</a>

        //                 </div>


        //             </div>
        //         </div>
        //         <div className="c-right">
        //             <p className="c-desc">
        //                 <b>What’s your story?</b> Get in touch. Always available for
        //     freelancing if the right project comes along. me.
        //   </p>
        //             <form ref={formRef} onSubmit={handleSubmit}>
        //                 <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
        //                 <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
        //                 <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" />
        //                 <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message" />
        //                 <button>Submit</button>
        //                 {done && "Thank you..."}
        //             </form>
        //         </div>
        //     </div>

        // </section>
    )
}

export default Contact
