import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import './intro.css'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/amany-alattas/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            <a href="https://github.com/AmanyAts" target="_blank" rel="noreferrer"><FaGithub/></a>
            
        </div>
    )
}

export default HeaderSocials
