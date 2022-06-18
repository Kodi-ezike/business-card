import {FaTwitterSquare} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <div className="links">
              <a href='https://www.twitter.com/kodiezzy/'><FaTwitterSquare  className="footer-icon"/></a>  
              <a href='https://facebook.com/kodi.ezike'><FaFacebookSquare className="footer-icon"/></a> 
              <a href='https://www.instagram.com/kodi_ezzy/'><FaInstagramSquare className="footer-icon"/></a> 
              <a href='https://www.linkedin.com/in/kodi-ezike/'><FaLinkedin className="footer-icon"/></a> 
              <a href='https://github.com/Kodi-ezike'><FaGithubSquare className="footer-icon"/></a> 
            </div>
            <p>&copy; 2022 Kodi Ezike. All rights reserved.</p>
        </footer>
    )
}

export default Footer;