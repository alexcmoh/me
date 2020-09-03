function switchMenu(value)  {
    var primaryDiv = document.getElementById("mainContainer");

    primaryDiv.innerHTML = "";

    switch(value)   {
        case 1:     // About me
            var paragraph1 = document.createElement('span');
            paragraph1.style = "font-size: 2em; margin-top: 5%";
            paragraph1.className = "fadeInText";
            paragraph1.appendChild(document.createTextNode("Hello! I am a test."));
            primaryDiv.appendChild(paragraph1);
            break;
        default:
            break;
    }
}