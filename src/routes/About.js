import './Page.css';
import IMGPurdueLogo from "../assets/images/Purdue-University-Logo.png";
import IMGDeloitteLogo from "../assets/images/Deloitte-Logo.png";
import IMGDiscordLogo from "../assets/images/Discord-Logo.png";
import IMGKHUXSearchBanner from "../assets/images/KHUX-Search-Banner.png";
import IMGProgrammingMashup from "../assets/images/Programming-Mashup.png";
import IMGHackathonTeamPicture from "../assets/images/Hackathon-Team-Picture.png";

function About() {
	return (
		<div className="PageContent">
			<h1>Welcome to Alex's portfolio.</h1>
			<div className="divBlock">
				<div className="halfBlock">
					<p>Hello! My name is Alex Moh. I'm a Computer Science graduate from Purdue University. For the past 2 years, I have been gaining valuable hands-on experience working as a Software Engineer at Deloitte Consulting. I have also pursued further education in the form of certifications focused on cybersecurity and artificial intelligence.</p>
				</div>
				<div className="halfBlock">
					<img className="imageFile" src={IMGPurdueLogo} alt="Purdue University logo" />
					<img className="imageFile" src={IMGDeloitteLogo} alt="Deloitte Consulting logo" />
				</div>
			</div>
			<br />
			<br />
			<br />
			<div className="divBlock">
				<div className="halfBlock">
					<img className="imageFile size200" src={IMGDiscordLogo} alt="Discord logo" />
					<img className="imageFile size400" src={IMGKHUXSearchBanner} alt="KHUX Info Page Sample" />
				</div>
				<div className="halfBlock">
					<p>I have experience creating web apps and Python bots to serve communities. My most popular web app achieved over 70,000 views, and my best Python bot is deployed to Discord and used in servers containing tens of thousands of users. Being customer-driven is one of my core qualities.</p>
				</div>
			</div>
			<br />
			<br />
			<br />
			<div className="divBlock">
				<div className="halfBlock">
					<p>I leverage powerful languages such as Angular, React, HTML, and Python to create useful projects. I enjoy equal parts diving ahead on my own and collaborating in groups to achieve my goals.</p>
				</div>
				<div className="halfBlock">
					<img className="imageFile size400" src={IMGProgrammingMashup} alt="Programming languages logos" />
					<img className="imageFile size400" src={IMGHackathonTeamPicture} alt="Hackathon group award" />
				</div>
			</div>
			<br />
			<br />
			<br />
			<div className="navbarDiv">
				<p>Interested in working together? Click through the tabs on the top of the page to learn more about my initiatives!</p>
			</div>
			<br />
			<br />
			<br />
		</div>
	);
}

export default About;