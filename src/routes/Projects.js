import './Page.css';
import IMGKHUXCostCalculator from "../assets/images/KHUX-Cost-Calculator.png";
import IMGKHUXSearchOverview from "../assets/images/KHUX-Search-Overview.png";
import IMGFFXIVGuidesHegemone from "../assets/images/FFXIV-Guides-Hegemone.png";
import IMGFFXIVGuidesSildihn from "../assets/images/FFXIV-Guides-Sildihn.png";
import IMGDataSoraOfficialNotice from "../assets/images/Data-Sora-Official-Notice.png";
import IMGDataSoraListing from "../assets/images/Data-Sora-Listing.png";
import IMGGilCheckerExample1 from "../assets/images/FFXIV-Gil-Checker-Example1.jpg";
import IMGGilCheckerExample2 from "../assets/images/FFXIV-Gil-Checker-Example2.jpg";
import IMGXIVPF from "../assets/images/FFXIV-Gil-Checker-XIVPF.png";
import IMGOldPortfolioHTML from "../assets/images/Old-Portfolio-HTML.png";
import IMGProgrammingMashup from "../assets/images/Programming-Mashup.png";

import ReactBanner from "../assets/banners/React-Banner.png";
import JavaScriptBanner from "../assets/banners/JavaScript-Banner.png";
import HTMLBanner from "../assets/banners/HTML-Banner.png";
import PythonBanner from "../assets/banners/Python-Banner.png";
import DiscordAPIBanner from "../assets/banners/DiscordAPI-Banner.png";
import BeautifulSoupBanner from "../assets/banners/BeautifulSoup-Banner.png";

import GitBanner from "../assets/banners/Git-Banner.png";
import GitHubPagesBanner from "../assets/banners/GitHub-Pages-Banner.png";
import PhotoshopBanner from "../assets/banners/Photoshop-Banner.png";
import PremiereProBanner from "../assets/banners/Premiere-Pro-Banner.png";

function Projects() {
	return (
		<div className="PageContent">
            <h1>KHUX Info Page</h1>
			<img className="bannerIcon" src={JavaScriptBanner} alt="JavaScript Banner" />
			<img className="bannerIcon" src={HTMLBanner} alt="HTML Banner" />
			<img className="bannerIcon" src={GitBanner} alt="Git Banner" />
			<img className="bannerIcon" src={GitHubPagesBanner} alt="GitHub Pages Banner" />
			<img className="bannerIcon" src={PhotoshopBanner} alt="Photoshop Banner" />

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
				</div>
				<div className="halfBlock headerRight">
					<img className="bannerIcon headerRight" src={JavaScriptBanner} alt="JavaScript Banner" />
					<img className="bannerIcon headerRight" src={HTMLBanner} alt="HTML Banner" />
					<img className="bannerIcon headerRight" src={GitBanner} alt="Git Banner" />
					<img className="bannerIcon headerRight" src={GitHubPagesBanner} alt="GitHub Pages Banner" />
					<img className="bannerIcon headerRight" src={PhotoshopBanner} alt="Photoshop Banner" />
					<img className="bannerIcon headerRight" src={PremiereProBanner} alt="Premiere Pro Banner" />
				</div>
			</div>
			
			<div className="divBlock">
				<div className="halfBlock">
					<img className="imageFile size500" src={IMGFFXIVGuidesHegemone} alt="FFXIV Guides example screenshot" />
					<img className="imageFile size500" src={IMGFFXIVGuidesSildihn} alt="FFXIV Guides example screenshot" />
				</div>
				<div className="halfBlock">
					<p>My next major website is for the massively multiplayer online game Final Fantasy 14. I organized several multi-person coordinated events where groups of 8 dedicated players participated in raids. In these raids, players must perform complex sequences of inputs, including executing an optimized rotation of actions and performing movements necessary to avoid boss attacks and losing the battle.</p>
                    <p>In order to best communicate the boss's telegraphed attacks, the responsibilities of each player, and the strategies needed to weave all of these concepts together, I created a website aimed at helping players succeed.</p>
                    <p>I created page guides for each of the latest fights in the game. Each guide was populated with images, videos, and text created by me. Over 50 players in my circle of raiders benefitted from my project. With this guide as their aid, many groups of players were able to successfully team up, clear challenges, and obtain achievements in the game that less than 10% of the playerbase own.</p>
				</div>
			</div>
			<br />
			<br />
			<br />

            <h1>Data Sora</h1>
			<img className="bannerIcon" src={PythonBanner} alt="Python Banner" />
			<img className="bannerIcon" src={DiscordAPIBanner} alt="Discord API Banner" />
			<img className="bannerIcon" src={BeautifulSoupBanner} alt="BeautifulSoup Banner" />

			<div className="divBlock">
				<div className="halfBlock">
					<p>My first Python project was Data Sora. I was determined to solve a challenge in the Kingdom Hearts Union χ community. There were two issues: 1. the in-game notice list was only available in the in-game browser, and many browser feature were disabled 2. the notice list only displayed the 20 most recent notices. With my Data Sora project, I created a solution for both challenges.</p>
                    <p>The purpose of Data Sora is to track notices, web scrape the contents of notices, and post formatted content to Discord, a popular social media service. I used context menu options on an Android device and some workarounds in order to find the URL of the notice page. I stored the notice URL, the notice name, and the date the notice was posted into a JSON. This would allow me to track notice history for archival purposes.</p>
                    <p>Using the BeautifulSoup Python library, I scraped page contents given the URL. I further used the ibrary to format the text to prepare it for posting to Discord. Then I used Discord's API to send the text to specified server channels. I hosted the Python file on a file hosting service, which allowed it to automatically check for new notices every 30 minutes. New notices would be recorded, scraped, and posted to Discord. Thousands of users benefitted from being able to see new notices without loading and opening the game, and the log of Discord posts allowed users to scroll back through Data Sora posts to gain information about the past.</p>
				</div>
				<div className="halfBlock">
					<img className="imageFile size500" src={IMGDataSoraOfficialNotice} alt="KHUX official notice page" />
					<img className="imageFile size500" src={IMGDataSoraListing} alt="KHUX Data Sora Discord post" />
				</div>
			</div>
			<br />
			<br />
			<br />

            <h1 className="headerRight">Gil Checker</h1>
			<div className="divBlock">
				<div className="halfBlock">
				</div>
				<div className="halfBlock headerRight">
					<img className="bannerIcon headerRight" src={PythonBanner} alt="Python Banner" />
					<img className="bannerIcon headerRight" src={DiscordAPIBanner} alt="Discord API Banner" />
					<img className="bannerIcon headerRight" src={BeautifulSoupBanner} alt="BeautifulSoup Banner" />
				</div>
			</div>
			
			<div className="divBlock">
				<div className="halfBlock">
					<img className="imageFile size500" src={IMGXIVPF} alt="XIV PF, the website I scraped" />
					<img className="imageFile size500" src={IMGGilCheckerExample1} alt="Gil Checker example output" />
					<img className="imageFile size500" src={IMGGilCheckerExample2} alt="Gil Checker example output" />
				</div>
				<div className="halfBlock">
					<p>I created a second Python app focused on the Final Fantasy 14 community. In the high-end raiding community, some users are willing to pay players in-game currency, called Gil, to assist them in battles. However, there are two problems to fully capitalize on these opportunities: 1. the in-game player request board (Party Finder) has no way to tag or filter to tell other players that the host is willing to pay in-game currency 2. these party requests often fill up quickly, and there is no way to know if a currency listing has been opened outside of refreshing the Party Finder constantly, which is inefficient. The Gil Checker bot was created with the goal of giving myself and my companions an edge over the money-making competition.</p>
                    <p>I started by identifying ways that I could scan through the Party Finder. The in-game browser had no API, so scraping was the route to take. Another user already created a tracking plugin that players could install, which sends listing data to a website. The website is known for its accuracy and speed, as thousands of users have the same tracking plugin and view the Party Finder every minute. I examined the structure of the website and set BeautifulSoup to filter out the relevant types of listings, such as High-Difficulty Raids, which is where most of the money requests came from.</p>
                    <p>Then, I needed to find the listings that were paying players. Since there was no filter or tag for money parties, I used word filtering and regex to find the desired listings. These requests often had text such as "paying everyone 4M to clear this fight" or "I will trade the loot in exchange for 500k". I used regex to only return listings with a numerical value followed by an abbreviation of quantity, such as M, Mil, or K (not case sensitive).</p>
					<p>Finally, I formatted the selected listings and posted them to Discord. The listings were formatted into blocks with relevant information such as how many players and what roles were still needed. I also added the minimum power level required to join as well as the location to join from. The Python bot checks for relevant listings every minute and is hosted on a file hosting service. The end result was over 250 million Gil collected in a game where 5 million Gil is considered a large amount. It also provided a unique team building experience between me and my companions as we raced to join parties whenever the Discord bot notified us of a new listing. Gil Checker was a fun project that put more of my Python skills to practice in an everyday use-case. There were immediate benefits for both myself and my associates.</p>
				</div>
			</div>
			<br />
			<br />
			<br />

			<h1>My Personal Portfolio</h1>
			<img className="bannerIcon" src={ReactBanner} alt="React Banner" />
			<img className="bannerIcon" src={JavaScriptBanner} alt="JavaScript Banner" />
			<img className="bannerIcon" src={HTMLBanner} alt="HTML Banner" />
			<img className="bannerIcon" src={GitBanner} alt="Git Banner" />
			<img className="bannerIcon" src={GitHubPagesBanner} alt="GitHub Pages Banner" />
			<img className="bannerIcon" src={PhotoshopBanner} alt="Photoshop Banner" />

			<div className="divBlock">
				<div className="halfBlock">
					<p>The portfolio you see before you is the result of many cycles of iteration. In the past, my portfolio ran on solely JavaScript and HTML. It was a raw project created in the early phases of my career. Since then, I have learned more languages and techniques to create a more impressive website.</p>
					<p>The modern iteration utilizes React. I learned how to build and deploy a React application to GitHub Pages. I utilized GitHub Actions to create a workflow that automatically builds and deploys the app every time a change is pushed, which follows CI / CD practices. Harnessing the potential of technologies I had scratched the surfaces of previously is invigorating.</p>
				</div>
				<div className="halfBlock">
					<img className="imageFile" src={IMGOldPortfolioHTML} alt="Former portfolio example" />
					<img className="imageFile size400" src={IMGProgrammingMashup} alt="Programming languages" />
				</div>
			</div>
		</div>
	);
}

export default Projects;