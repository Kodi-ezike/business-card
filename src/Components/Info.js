import headshot from "./images/head.jpg"
import {GrMail} from "react-icons/gr"
function Info(){
    return(
        
        <div className="container">
            <img src={headshot} alt="headshot"  className="person-img"/>
            <div className="info">
                <p className="name">Kodinnanma Ezike</p>
                <p className="job">Frontend Developer</p>
                <a href="https://kodi-ezike.github.io/portfolio/" className="website">kodi.website</a>
                <a href="mailto:kodiezzy@gmail.com" className="email-link"><button className="email-btn"><GrMail className="email-icon"/>Email</button></a>
            </div>
        </div>
    )
}
export default Info