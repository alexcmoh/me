import './Page.css';
import IMGPurdueLogo from "../assets/images/Purdue-University-Logo.png";
import IMGDeloitteLogo from "../assets/images/Deloitte-Logo.png";

function About() {
	return (
		<div className="PageContent">
			<h1>Welcome to Alex's portfolio.</h1>
			<div className="divBlock">
				<div className="halfBlock">
					<p>Hello! My name is Alex Moh. I'm a Computer Science graduate from Purdue University. For the past 2 years, I have been working as a Software Engineer at Deloitte Consulting.</p>
					<p>Hello! My name is Alex Moh. I'm a Computer Science graduate from Purdue University. For the past 2 years, I have been working as a Software Engineer at Deloitte Consulting.</p>
				</div>
				<div className="halfBlock">
					<img className="imageFile" src={IMGPurdueLogo} alt="Image" />
					<img className="imageFile" src={IMGDeloitteLogo} alt="Image" />
				</div>
			</div>
			<h1>Welcome to Alex's portfolio.</h1>
			<div className="divBlock">
				<div className="halfBlock">
					<img className="imageFile" src={IMGPurdueLogo} alt="Image" />
				</div>
				<div className="halfBlock">
					<p>Sample Text</p>
				</div>
			</div>
		</div>
	);
}

export default About;