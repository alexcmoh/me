function switchMenu(value)  {
    var primaryDiv = document.getElementById("mainContainer");

    primaryDiv.innerHTML = "";

    switch(value)   {
        case 1:     // About me
            var breakElement = document.createElement('br');
            primaryDiv.appendChild(breakElement);

            var image1 = document.createElement('img');
            image1.src = "./images/item1_1.png";
            image1.style = "height: 200px; vertical-align: middle";
            image1.className = "fadeInText";
            primaryDiv.appendChild(image1);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph1 = document.createElement('span');
            paragraph1.style = "font-size: 2em; margin-top: 5%";
            paragraph1.className = "fadeInText";
            paragraph1.appendChild(document.createTextNode("Hello! My name is Alex Moh. I'm a computer science student at Purdue University, graduating 2021."));
            primaryDiv.appendChild(paragraph1);


            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());


            var image2 = document.createElement('img');
            image2.src = "./images/item1_2.png";
            image2.style = "height: 200px; vertical-align: middle; box-shadow: 5px 5px rgb(0, 0, 0)";
            image2.title = "My friends and I winning Qualcomm's challenge in BoilerMake 2017";
            image2.className = "fadeInText";
            primaryDiv.appendChild(image2);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph2 = document.createElement('span');
            paragraph2.style = "font-size: 2em; margin-top: 5%";
            paragraph2.className = "fadeInText";
            paragraph2.appendChild(document.createTextNode("I enjoy working in groups to create projects that fully utilize everyone's creativity."));
            primaryDiv.appendChild(paragraph2);
            

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());


            var image3 = document.createElement('img');
            image3.src = "./images/item1_3.png";
            image3.style = "height: 200px; vertical-align: middle; box-shadow: 5px 5px rgb(0, 0, 0)";
            image3.className = "fadeInText";
            primaryDiv.appendChild(image3);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph3 = document.createElement('span');
            paragraph3.style = "font-size: 2em; margin-top: 5%";
            paragraph3.className = "fadeInText";
            paragraph3.appendChild(document.createTextNode("I love using my skills to help others, and my personal projects exemplify this desire. Please check out my projects in the menu to learn more!"));
            primaryDiv.appendChild(paragraph3);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            break;
        case 2:     // Union X Infobase
            var breakElement = document.createElement('br');
            primaryDiv.appendChild(breakElement);

            var paragraph0 = document.createElement('span');
            paragraph0.style = "font-size: 3em; margin-top: 5%";
            paragraph0.className = "fadeInText";
            paragraph0.appendChild(document.createTextNode("Every great idea begins with a spark."));
            primaryDiv.appendChild(paragraph0);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph1 = document.createElement('span');
            paragraph1.style = "font-size: 1.5em; margin-top: 5%";
            paragraph1.className = "fadeInText";
            paragraph1.appendChild(document.createTextNode("I like getting the most out of my leisure time. In multiplayer mediums, this means ensuring my friends have a good time as well. In the summer of 2016, I dove into the game Kingdom Hearts Union χ. Outside of simply playing the game, I gathered information about new events and shared my findings with others. Answers to questions such as 'What quest has the highest chance to drop rare loot?' and 'How can I take down this difficult boss?' originated from me and spread their way around the community. This was fine and good until I tackled more difficult projects. I compiled information about the costs to upgrade certain weapons, and the resulting sheet spanned dozens of columns and hundreds of columns."));
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
            paragraph2a.appendChild(document.createTextNode("Since I launched my site earlier this year, I have added several more pages to accomodate expanded needs. One page shows off the game's beautiful scenery, and another calculates your total level up bonuses based on your current level. I was happy to see both myself and others enjoying these new tools. However, there was one big wave I had yet to tackle."));
            primaryDiv.appendChild(paragraph2a);
            

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());


            var image3 = document.createElement('img');
            image3.src = "./images/item1_3.png";
            image3.style = "height: 200px; vertical-align: middle; box-shadow: 5px 5px rgb(0, 0, 0)";
            image3.className = "fadeInText";
            primaryDiv.appendChild(image3);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());

            var paragraph3 = document.createElement('span');
            paragraph3.style = "font-size: 2em; margin-top: 5%";
            paragraph3.className = "fadeInText";
            paragraph3.appendChild(document.createTextNode("I love using my skills to help others, and my personal projects exemplify this desire. Please check out my projects in the menu to learn more!"));
            primaryDiv.appendChild(paragraph3);

            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            primaryDiv.appendChild(breakElement.cloneNode());
            break;
        default:
            break;
    }
}