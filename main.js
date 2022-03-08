function switchMenu(value)  {
    var primaryDiv = document.getElementById("mainContainer");
    var topButton = document.getElementById("topButton");

    primaryDiv.innerHTML = "";

    switch(value)   {
        case 1:     // About me
            topButton.style = "display: none"
            var breakElement = document.createElement('br');
            primaryDiv.appendChild(breakElement);

            var image1 = document.createElement('img');
            image1.src = "./images/item1_1.png";
            image1.style = "height: 200px;  max-width: 100%; vertical-align: middle";
            image1.className = "fadeInText";
            primaryDiv.appendChild(image1);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph1 = document.createElement('span');
            paragraph1.style = "font-size: 1.5em; margin-top: 5%";
            paragraph1.className = "fadeInText";
            paragraph1.appendChild(document.createTextNode("Hello! My name is Alex Moh. I'm a Computer Science undergraduate from Purdue University."));
            primaryDiv.appendChild(paragraph1);


            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());


            var image2 = document.createElement('img');
            image2.src = "./images/item1_2.png";
            image2.style = "height: 200px;  max-width: 100%; vertical-align: middle; box-shadow: 5px 5px rgb(0, 0, 0)";
            image2.title = "My friends and I winning Qualcomm's challenge in BoilerMake 2017";
            image2.className = "fadeInText";
            primaryDiv.appendChild(image2);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph2 = document.createElement('span');
            paragraph2.style = "font-size: 1.5em; margin-top: 5%";
            paragraph2.className = "fadeInText";
            paragraph2.appendChild(document.createTextNode("I enjoy working in team settings that utilize everyone's creativity to develop software that helps people."));
            primaryDiv.appendChild(paragraph2);
            

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());


            var image3 = document.createElement('img');
            image3.src = "./images/item1_3.png";
            image3.style = "height: 200px;  max-width: 100%; vertical-align: middle; box-shadow: 5px 5px rgb(0, 0, 0)";
            image3.className = "fadeInText";
            primaryDiv.appendChild(image3);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph3 = document.createElement('span');
            paragraph3.style = "font-size: 1.5em; margin-top: 5%";
            paragraph3.className = "fadeInText";
            paragraph3.appendChild(document.createTextNode("I love using my skills to help others, and my personal projects exemplify this desire. Please click on the above icons to learn more!"));
            primaryDiv.appendChild(paragraph3);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            break;
        case 2:     // Union X Infobase
            topButton.style = "display: initial"
            var breakElement = document.createElement('br');
            primaryDiv.appendChild(breakElement);

            var paragraph0 = document.createElement('span');
            paragraph0.style = "font-size: 2.5em; margin-top: 5%";
            paragraph0.className = "fadeInText";
            paragraph0.appendChild(document.createTextNode("Every great idea begins with a spark."));
            primaryDiv.appendChild(paragraph0);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph1 = document.createElement('span');
            paragraph1.style = "font-size: 1.5em; margin-top: 5%";
            paragraph1.className = "fadeInText";
            paragraph1.appendChild(document.createTextNode("I like getting the most out of my leisure time. In multiplayer mediums, this means ensuring my friends have a good time as well. In the summer of 2016, I dove into the game Kingdom Hearts Union χ. Outside of simply playing the game, I gathered information about new events and shared my findings with others. Answers to questions such as 'What quest has the highest chance to drop rare loot?' and 'How can I take down this difficult boss?' originated from me and spread their way around the community. This was fine and good until I tackled more difficult projects. I compiled information about the costs to upgrade certain weapons, and the resulting sheet spanned dozens of columns and hundreds of rows."));
            primaryDiv.appendChild(paragraph1);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph1a = document.createElement('span');
            paragraph1a.style = "font-size: 1.5em; margin-top: 5%";
            paragraph1a.className = "fadeInText";
            paragraph1a.appendChild(document.createTextNode("I considered the idea of simply posting a spreadsheet and sharing it around, but I found this to be an ineffective solution. Some players like seeing all the data, but most want relevant information presented in a simple manner. Telling thousands of users to just 'Do the math yourself' wasn't practical. I could have some formulas in the file that crunch numbers based on input, but it still wasn't the elegant solution I wanted. Union χ is a mobile game—not everyone has a computer they can use to download a spreadsheet and open it up. To get the perfect solution I desired, I knew I had to aim bigger. This was the beginning of my Union χ Infobase."));
            primaryDiv.appendChild(paragraph1a);


            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());


            var image2 = document.createElement('img');
            image2.src = "./images/item2_1.png";
            image2.style = "width: 600px; max-width: 100%; vertical-align: middle; box-shadow: 5px 5px rgb(0, 0, 0)";
            image2.className = "fadeInText";
            primaryDiv.appendChild(image2);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph2 = document.createElement('span');
            paragraph2.style = "font-size: 1.5em; margin-top: 5%";
            paragraph2.className = "fadeInText";
            paragraph2.appendChild(document.createTextNode("My first page was a cost calculator. Players in Union χ use weapons called Keyblades that can be upgraded nearly 200 times. With 16 Keyblades to choose from, I believed that a web tool would be perfect for selecting a Keyblade and getting its upgrade costs. I entered all of my spreadsheet information into a database and hooked it up to some inputs on the frontend. Players can select a Keyblade and inpput base and target levels. The website totals up all the necessary materials for the required upgrades and informs the user. In a game where upgrade materials are rare, it is important to arm players with knowledge so that they can make an informed decision about how they would like to spend their valuable materials."));
            primaryDiv.appendChild(paragraph2);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph2a = document.createElement('span');
            paragraph2a.style = "font-size: 1.5em; margin-top: 5%";
            paragraph2a.className = "fadeInText";
            paragraph2a.appendChild(document.createTextNode("Since I launched my site earlier this year, I have added several more pages to accomodate expanded needs. One page shows off the game's beautiful scenery, and another calculates your total level up bonuses based on your current level. I was happy to see both myself and others enjoying these new tools. However, there was one ambitious idea I had yet to tackle."));
            primaryDiv.appendChild(paragraph2a);
            

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());


            var image3 = document.createElement('img');
            image3.src = "./images/item2_2.png";
            image3.style = "width: 600px; max-width: 100%; vertical-align: middle; box-shadow: 5px 5px rgb(0, 0, 0)";
            image3.className = "fadeInText";
            primaryDiv.appendChild(image3);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph3 = document.createElement('span');
            paragraph3.style = "font-size: 1.5em; margin-top: 5%";
            paragraph3.className = "fadeInText";
            paragraph3.appendChild(document.createTextNode("From the beginning, I had dreamt of creating a tool that allows users to search for units. There are nearly 2,000 units in the game, and there were no up-to-date tools online for searching through all of these units. I acknowledged that this task would be even more difficult than the Keyblade upgrade cost calculator I had built in the beginning. As I added more and more tools to my site, my web developer skills grew. One day, I decided to take a leap and start the seventh tool, which would be my most complex creation yet."));
            primaryDiv.appendChild(paragraph3);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph3a = document.createElement('span');
            paragraph3a.style = "font-size: 1.5em; margin-top: 5%";
            paragraph3a.className = "fadeInText";
            paragraph3a.appendChild(document.createTextNode("I planned out a roadmap. First, I needed to enter all near 2,000 units into a database, each entry detailing the unit's stats, abilities, and any related images to the unit such as character art. Next, I had to create a template for generating unit info when the user asks for it. Finally, I had to make a search engine that tied all of these features together. The project tested my resolve several times, but I always pushed through in pursuit of the monumental benefits that success would yield. I paced myself by adding about 100 units per day, and I pitched my design ideas to friends. I enjoyed tweaking the filter options in ways that offered users greater control than the simple in-game filters."));
            primaryDiv.appendChild(paragraph3a);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph1 = document.createElement('span');
            paragraph1.style = "font-size: 2.5em; margin-top: 5%";
            paragraph1.className = "fadeInText";
            paragraph1.appendChild(document.createTextNode("Over 26,000 users and 62,000 sessions"));
            primaryDiv.appendChild(paragraph1);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph3b = document.createElement('span');
            paragraph3b.style = "font-size: 1.5em; margin-top: 5%";
            paragraph3b.className = "fadeInText";
            paragraph3b.appendChild(document.createTextNode("After about a month of work, I unveiled the newest, largest addition to my website. The reception was nothing short of astronomical. Hundreds of users gathered to the site that day to check out the latest tool. Users had the ability to search, sort, and filter over all of the units in the game. With this, the people themselves could answer questions such as 'What units have this special ability?', 'How many units in the game feature this specific character?', and 'Of the blue units in the game, which have a specific property?' My journey had come full circle, and I passed on my knowledge to the users and given them the tools for success."));
            primaryDiv.appendChild(paragraph3b);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var image4 = document.createElement('img');
            image4.src = "./images/item2_3.png";
            image4.style = "width: 700px; max-width: 100%; vertical-align: middle; box-shadow: 5px 5px rgb(0, 0, 0)";
            image4.className = "fadeInText";
            primaryDiv.appendChild(image4);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph4 = document.createElement('span');
            paragraph4.style = "font-size: 1.5em; margin-top: 5%";
            paragraph4.className = "fadeInText";
            paragraph4.appendChild(document.createTextNode("I update my site about every week. Users come back to see what new units do, what amazing backdrops were added, and more. Throughout this journey, I have overcome hurdles in order to create a site that shines brighter than what I had envisioned. I am happy I was able to bring myself this far and create what was once just a dream, and it brings me joy to see users take full advantage of my creations."));
            primaryDiv.appendChild(paragraph4);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            break;
        case 3: // Data Sora
            topButton.style = "display: initial"
            var breakElement = document.createElement('br');
            primaryDiv.appendChild(breakElement);

            var image2 = document.createElement('img');
            image2.src = "./images/item3_1.png";
            image2.style = "width: 300px; max-width: 100%; vertical-align: middle";
            image2.className = "fadeInText";
            primaryDiv.appendChild(image2);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph1 = document.createElement('span');
            paragraph1.style = "font-size: 1.5em; margin-top: 5%";
            paragraph1.className = "fadeInText";
            paragraph1.appendChild(document.createTextNode("Data Sora bot is a bot for the chat service Discord. The name comes from the Kingdom Hearts series's primary protagonist, Sora. The bot is written in Python and takes advantage of helpful libraries such as BeautifulSoup to scrape the game's website for new notices and post them to Discord. Having only dabbled in Python a bit before this project, I felt a little intimidated at learning another language. However, Discord bots are usually written in either Python or JavaScript, and users recommendeded that web scraping bots be written in Python due to the language's advantages in this field. With no other choice, I leapt into the specifics of Python."));
            primaryDiv.appendChild(paragraph1);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph2 = document.createElement('span');
            paragraph2.style = "font-size: 1.5em; margin-top: 5%";
            paragraph2.className = "fadeInText";
            paragraph2.appendChild(document.createTextNode("After getting my bearings with the basics and differences between Python and other languages, I started looking into how to make a Discord bot. I made an bot account on Discord and linked its credentials to my bot. The hard part was making it do what I desired. I needed to overcome two main hurdles: how will the bot know if new notices have been added, and how will the bot format the contents of the site?"));
            primaryDiv.appendChild(paragraph2);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var image2 = document.createElement('img');
            image2.src = "./images/item3_2.png";
            image2.style = "width: 600px; max-width: 100%; vertical-align: middle";
            image2.className = "fadeInText";
            primaryDiv.appendChild(image2);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph3 = document.createElement('span');
            paragraph3.style = "font-size: 1.5em; margin-top: 5%";
            paragraph3.className = "fadeInText";
            paragraph3.appendChild(document.createTextNode("First, I needed to figure out a way to detect new notices. I navigated to the game's notice page and looked at the page source. I found that the page was populated with links to individual notices. I created a plan to store links in a JSON. I configured the bot check the site hourly for new links. If there is a link that was not present in the JSON before, or if the order of a notice changed (indicating that it was updated), then I record the links and insert them into the JSON by the order listed on the website."));
            primaryDiv.appendChild(paragraph3);


            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var image3 = document.createElement('img');
            image3.src = "./images/item3_3.png";
            image3.style = "width: 600px; max-width: 100%; vertical-align: middle";
            image3.className = "fadeInText";
            primaryDiv.appendChild(image3);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph4 = document.createElement('span');
            paragraph4.style = "font-size: 1.5em; margin-top: 5%";
            paragraph4.className = "fadeInText";
            paragraph4.appendChild(document.createTextNode("Next, I had to parse the notices given links to their pages. I iterated through each notice, removed extraneous spacing, and organized information by text, image, and tabularized info. I also had to split the post into parts if it exceeded 2,000 characters, which is the character limit for Discord messages. The bot would then send this notice to a specified channel."));
            primaryDiv.appendChild(paragraph4);


            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph5 = document.createElement('span');
            paragraph5.style = "font-size: 1.5em; margin-top: 5%";
            paragraph5.className = "fadeInText";
            paragraph5.appendChild(document.createTextNode("In just one short week, I created a Python bot from scratch. The game's notice page rotates out notices one a limit is met, so having the ability to scroll through a Discord channel to find important legacy information is helpful for players. I've also added other commands, such as one that calculates the cost to purchase certain deals. Creating a bot by hand allows me control and utility that I could not have had without it, and I like using my skills to make day to day interactions run smoother for everyone."));
            primaryDiv.appendChild(paragraph5);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            break;
        case 4:
            topButton.style = "display: none"
            var breakElement = document.createElement('br');
            primaryDiv.appendChild(breakElement);

            var selector = Math.floor(Math.random() * 3);
            var variableImage = "item1_1";
            switch(selector)    {
                case 0:
                    variableImage = "item1_1";
                    break;
                case 1:
                    variableImage = "item1_2";
                    break;
                case 2:
                    variableImage = "item3_1";
                    break;
                default:
                    break;
            }

            var image2 = document.createElement('img');
            image2.src = "./images/" + variableImage + ".png";
            image2.style = "width: 300px; max-width: 100%; vertical-align: middle";
            image2.className = "fadeInText";
            primaryDiv.appendChild(image2);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph1 = document.createElement('span');
            paragraph1.style = "font-size: 1.5em; margin-top: 5%";
            paragraph1.className = "fadeInText";
            paragraph1.appendChild(document.createTextNode("If you'd like to get in touch, send me an email! Take a look at my resume and browse my Union χ Infobase for more information."));
            primaryDiv.appendChild(paragraph1);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph2 = document.createElement('span');
            paragraph2.style = "font-size: 1.5em; margin-top: 5%";
            paragraph2.className = "fadeInText";

            var aLink1Text = document.createTextNode("Email me");
            var aLink1 = document.createElement('a');
            aLink1.appendChild(aLink1Text);
            aLink1.href = "mailto:amoh@purdue.edu";
            paragraph2.appendChild(aLink1);
            primaryDiv.appendChild(paragraph2);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph3 = document.createElement('span');
            paragraph3.style = "font-size: 1.5em; margin-top: 5%";
            paragraph3.className = "fadeInText";

            var aLink2Text = document.createTextNode("View my resume");
            var aLink2 = document.createElement('a');
            aLink2.appendChild(aLink2Text);
            aLink2.href = "./files/Resume.pdf";
            aLink2.target = "_blank";
            paragraph3.appendChild(aLink2);
            primaryDiv.appendChild(paragraph3);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph4 = document.createElement('span');
            paragraph4.style = "font-size: 1.5em; margin-top: 5%";
            paragraph4.className = "fadeInText";

            var aLink3Text = document.createTextNode("Browse the Union χ Infobase");
            var aLink3 = document.createElement('a');
            aLink3.appendChild(aLink3Text);
            aLink3.href = "https://roboloid.github.io/khux/search";
            aLink3.target = "_blank";
            paragraph4.appendChild(aLink3);
            primaryDiv.appendChild(paragraph4);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            break;
        default:
            break;
    }
}