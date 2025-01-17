import './Page.css';
import IMGPurdueLogo from "../assets/images/Purdue-University-Logo.png";
import IMGDeloitteLogo from "../assets/images/Deloitte-Logo.png";
import IMGSubtleLogo from "../assets/images/Subtle-Logo.png";
import IMGDiscordLogo from "../assets/images/Discord-Logo.png";
import IMGKHUXSearchBanner from "../assets/images/KHUX-Search-Banner.png";
import IMGProgrammingMashup from "../assets/images/Programming-Mashup.png";
import IMGHackathonTeamPicture from "../assets/images/Hackathon-Team-Picture.png";

function About() {
	return (
		<div className="PageContent">
			<h1>Welcome to Alex's portfolio</h1>
			<div className="divBlock">
				<div className="halfBlock">
					<p>Hello! My name is Alex Moh. I'm a Computer Science graduate from Purdue University. For the past year, I have been working as a Platform Engineer at Subtle Medical, with a focus in the AWS suite of tools. Before that, I worked as a Software Engineer at Deloitte Consulting. I have also pursued further education and obtained certifications on cybersecurity as well as artificial intelligence.</p>
				</div>
				<div className="halfBlock">
					<img className="imageFile" src={IMGPurdueLogo} alt="Purdue University logo" />
					<img className="imageFile" src={IMGDeloitteLogo} alt="Deloitte Consulting logo" />
					<img className="imageFile" src={IMGSubtleLogo} alt="Subtle Medical logo" />
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
					<p>I have expertise in creating web apps and Python bots to serve communities. My most popular web app achieved over 70,000 views, and my best Python bot is deployed to Discord and used in servers with tens of thousands of users. My development process is strongly influenced by user needs, and being customer-driven is one of my core qualities.</p>
				</div>
			</div>
			<br />
			<br />
			<br />
			<div className="divBlock">
				<div className="halfBlock">
					<p>I leverage powerful languages such as Angular, React, HTML, and Python to create projects that solve problems and increase efficiency. I equally enjoy diving ahead on my own and collaborating in groups to achieve goals.</p>
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