import './Page.css';
import IMGKHUXCostCalculator from "../assets/images/KHUX-Cost-Calculator.png";
import IMGKHUXSearchOverview from "../assets/images/KHUX-Search-Overview.png";
import IMGFFXIVGuidesHegemone from "../assets/images/FFXIV-Guides-Hegemone.png";
import IMGFFXIVGuidesSildihn from "../assets/images/FFXIV-Guides-Sildihn.png";

function Projects() {
	return (
		<div className="PageContent">
            <h1>KHUX Info Page</h1>
			<div className="divBlock">
				<div className="halfBlock">
					<p>The KHUX Info Page is my first major personal project. In 2016, I delved into the mobile game Kingdom Hearts Union χ and quickly became a community resource for game data and information. However, as my challenges grew in complexity, I realized future endeavors would not be effectively solved by 280-character social media posts.</p>
                    <p>This led to the creation of the KHUX Info Page, a website with multiple pages to support my data-sharing needs for the community. Since its initial launch with an upgrade cost calculator that spanned thousands of rows, the site has expanded to include tools for searching, sorting, and filtering over the 2,000 characters the game features. This unit search tool harnessed JavaScript and HTML in order to allow the user to perform operations over the dataset and view resulting characters in compact info cards.</p>
                    <p>The overwhelmingly positive response took the shape of over 34,000 users and 77,000 visits, with users logging in from all over the world. This result was a gratifying payoff and inspired me to continue developing and maintaining the web app for community.</p>
				</div>
				<div className="halfBlock">
					<img className="imageFile" src={IMGKHUXCostCalculator} alt="KHUX Info Page Cost Calculator" />
					<img className="imageFile" src={IMGKHUXSearchOverview} alt="KHUX Info Page Search" />
				</div>
			</div>
			<br />
			<br />
			<br />
            <h1 className="headerRight">FFXIV Guides</h1>
			<div className="divBlock">
				<div className="halfBlock">
					<img className="imageFile size500" src={IMGFFXIVGuidesHegemone} alt="FFXIV Guides example screenshot" />
					<img className="imageFile size500" src={IMGFFXIVGuidesSildihn} alt="FFXIV Guides example screenshot" />
				</div>
				<div className="halfBlock">
					<p>My next major website is for the massively multiplayer online game Final Fantasy 14. I organized several multi-person coordinated events where groups of 8 dedicated players participated in raids. In these raids, players must perform complex sequences of inputs, including executing an optimized rotation of actions and performing movements necessary to avoid boss attacks and losing the battle. In order to best communicate the boss's telegraphed attacks, the responsibilities of each player, and the strategies needed to weave all of these concepts together, I created another website.</p>
                    <p>I created guides for each of the major fights in the game. Each guide was populated with images, videos, and text created by me. Over 50 players in my circle of raiders benefitted from my project. With this guide as their aid, many groups of players were able to successfully team up, clear challenges, and obtain achievements in the game that less than 10% of the playerbase own.</p>
				</div>
			</div>
		</div>
	);
}

export default Projects;