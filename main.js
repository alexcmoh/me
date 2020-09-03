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
            paragraph3.appendChild(document.createTextNode("I love using my skills to help others, and my personal projects exemplify this goal. Please check out my projects in the menu to learn more!"));
            primaryDiv.appendChild(paragraph3);
            break;
        default:
            break;
    }
}