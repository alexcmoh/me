import './Page.css';
import { Link } from "react-router-dom"
import IMGHackathonTeamPicture from "../assets/images/Hackathon-Team-Picture.png";
import Resume from "../assets/Resume.pdf";

function Contact() {
	return (
		<div className="PageContent navbarDiv">
			<h1>Contact</h1>
			<div className="contactText navbarDiv">
                <p>Thank you for taking the time to learn about myself and my projects.</p>
                <p>If you would like to discuss further, I can be reached through email or on my LinkedIn.</p>
                <p>I look forward to hearing from you.</p>
                <p>Email: <a className="contactText" href="mailto:alexcmoh@gmail.com">alexcmoh@gmail.com</a></p>
                <p>LinkedIn: <a className="contactText" href="https://www.linkedin.com/in/alexcmoh" target="_blank">in/alexcmoh</a></p>
                <p>Download a copy of my resume: <Link className="contactText" to="/assets/Resume.pdf" target="_blank" rel="noreferrer" download={Resume}>Download</Link></p>
                
            </div>
            <br />
            <br />
            <br />
            <img className="imageFile size500" src={IMGHackathonTeamPicture} alt="Hackathon group award" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
		</div>
	);
}

export default Contact;