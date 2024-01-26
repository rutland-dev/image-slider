import "./style.css";
import "./favicon.png";
import buildNavBar from "./navigation";
import thief from "./thief.jpg";
import guy from "./guy.jpg";
import twins from "./twins.jpeg";
import witch from "./witch.jpg";

function buildImageSlider() {
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("outer-div");


    const innerDiv = document.createElement("div");
    innerDiv.classList.add("inner-div");
    outerDiv.appendChild(innerDiv);


    const thiefImageDiv = document.createElement("div");
    thiefImageDiv.classList.add("image-div");
    thiefImageDiv.setAttribute("id", "thief-image-div");
    innerDiv.appendChild(thiefImageDiv);

    const thiefImage = document.createElement("img");
    thiefImage.setAttribute("src", thief);
    thiefImage.setAttribute("alt", "A fantasy thief in a cloak");
    thiefImageDiv.appendChild(thiefImage);



    const guyImageDiv = document.createElement("div");
    guyImageDiv.classList.add("image-div");
    guyImageDiv.setAttribute("id", "guy-image-div");
    innerDiv.appendChild(guyImageDiv);

    const guyImage = document.createElement("img");
    guyImage.setAttribute("src", guy);
    guyImage.setAttribute("alt", "A fantasy guy in robes");
    guyImageDiv.appendChild(guyImage);


    const twinsImageDiv = document.createElement("div");
    twinsImageDiv.classList.add("image-div");
    twinsImageDiv.setAttribute("id", "twins-image-div");
    innerDiv.appendChild(twinsImageDiv);

    const twinsImage = document.createElement("img");
    twinsImage.setAttribute("src", twins);
    twinsImage.setAttribute("alt", "Some fantasy twin elf guys");
    twinsImageDiv.appendChild(twinsImage);


    const witchImageDiv = document.createElement("div");
    witchImageDiv.classList.add("image-div");
    witchImageDiv.setAttribute("id", "witch-image-div");
    innerDiv.appendChild(witchImageDiv);

    const witchImage = document.createElement("img");
    witchImage.setAttribute("src", witch);
    witchImage.setAttribute("alt", "A fantasy witch with a cool hat");
    witchImageDiv.appendChild(witchImage);

    return outerDiv;
}

function initiate() {
    const outerDiv = document.body.appendChild(buildImageSlider());
    const navBarDiv = buildNavBar();
    outerDiv.appendChild(navBarDiv);
}

initiate();