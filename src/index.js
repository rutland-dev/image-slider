import "./style.css";
import "./favicon.png";
import thief from "./thief.jpg";
import guy from "./guy.jpg";
import twins from "./twins.jpeg";
import witch from "./witch.jpg";

function scrollToDiv(element) {
    element.scrollIntoView({behavior: "smooth", inline: "center"});
}

function buildImageSlider() {
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("outer-div");

    const navBarDiv = document.createElement("div");
    navBarDiv.classList.add("nav-bar");

    const innerDiv = document.createElement("div");
    innerDiv.classList.add("inner-div");
    outerDiv.appendChild(innerDiv);

    const thiefImageDiv = document.createElement("div");
    thiefImageDiv.classList.add("image-div");
    innerDiv.appendChild(thiefImageDiv);
    const thiefScroll = document.createElement("button");
    navBarDiv.appendChild(thiefScroll);
    thiefScroll.addEventListener("click", () => {
        scrollToDiv(thiefImageDiv);
    })

    const thiefImage = document.createElement("img");
    thiefImage.setAttribute("src", thief);
    thiefImage.setAttribute("alt", "A fantasy thief in a cloak");
    thiefImageDiv.appendChild(thiefImage);

    const guyImageDiv = document.createElement("div");
    guyImageDiv.classList.add("image-div");
    innerDiv.appendChild(guyImageDiv);
    const guyScroll = document.createElement("button");
    navBarDiv.appendChild(guyScroll);
    guyScroll.addEventListener("click", () => {
        scrollToDiv(guyImageDiv);
    })

    const guyImage = document.createElement("img");
    guyImage.setAttribute("src", guy);
    guyImage.setAttribute("alt", "A fantasy guy in robes");
    guyImageDiv.appendChild(guyImage);

    const twinsImageDiv = document.createElement("div");
    twinsImageDiv.classList.add("image-div");
    innerDiv.appendChild(twinsImageDiv);
    const twinsScroll = document.createElement("button");
    navBarDiv.appendChild(twinsScroll);
    twinsScroll.addEventListener("click", () => {
        scrollToDiv(twinsImageDiv);
    })

    const twinsImage = document.createElement("img");
    twinsImage.setAttribute("src", twins);
    twinsImage.setAttribute("alt", "Some fantasy twin elf guys");
    twinsImageDiv.appendChild(twinsImage);

    const witchImageDiv = document.createElement("div");
    witchImageDiv.classList.add("image-div");
    innerDiv.appendChild(witchImageDiv);
        const witchScroll = document.createElement("button");
    navBarDiv.appendChild(witchScroll);
    witchScroll.addEventListener("click", () => {
        scrollToDiv(witchImageDiv);
    })

    const witchImage = document.createElement("img");
    witchImage.setAttribute("src", witch);
    witchImage.setAttribute("alt", "A fantasy witch with a cool hat");
    witchImageDiv.appendChild(witchImage);
    
    outerDiv.appendChild(navBarDiv);

    return outerDiv;
}

document.body.appendChild(buildImageSlider());