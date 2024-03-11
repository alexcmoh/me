import './Page.css';
import IMGHackathonTeamPicture from "../assets/images/Hackathon-Team-Picture.png";
import Resume from "../assets/Resume.pdf";

function Contact() {
	return (
		<div className="PageContent navbarDiv">
			<h1>Contact</h1>
			<div className="contactText navbarDiv">
                <p>Thank you for taking the time to learn about me and my projects.</p>
                <p>If you would like to connect, I can be reached by email and LinkedIn.</p>
                <p>I look forward to hearing from you.</p>
                <p>Email: <a className="contactText" href="mailto:alexcmoh@gmail.com">alexcmoh@gmail.com</a></p>
                <p>LinkedIn: <a className="contactText" href="https://www.linkedin.com/in/alexcmoh" target="_blank" rel="noreferrer">in/alexcmoh</a></p>
                <p>Download a copy of my resume: <a className="contactText" href={Resume} download="Resume.pdf">Download</a></p>
                
            </div>
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