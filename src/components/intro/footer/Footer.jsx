import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi'
import './footer.css';


const footer = () => {
    return (
      <footer>
          <a href="#" className="footer_logo">AmanyAts</a>
          <ul className="permalinks">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>

          </ul>
          <div className="footer__socials">
              <a href="https://twitter.com/mooony_aa"><FiTwitter/></a>
              <a href="https://www.linkedin.com/in/amany-alattas/"><FaLinkedin/></a>
              <a href="https://github.com/AmanyAts"><FaGithub/></a>
          </div>
          <div className="footer__copyright">
              <small>&copy; Amany Alattas. All rights reserved</small>
          </div>
          <br/>
          <br/>
      </footer>
    )
}

export default footer
