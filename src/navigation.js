let currentImage;

function getImageListDiv() {
    const imageListDiv = document.querySelectorAll(".image-div");
    
    return imageListDiv;
}

function checkForActiveImage() {
    const isActiveImage = document.querySelector(".active-image");
    if (isActiveImage) {
        if(isActiveImage.classList.contains("active-image")) {
            isActiveImage.classList.remove("active-image");
        }
    }
    const isButtonSelected = document.querySelector(".button-selected");
    if (isButtonSelected) {
        if(isButtonSelected.classList.contains("button-selected")) {
            isButtonSelected.classList.remove("button-selected");
        }
    }
}

function scrollToDiv(element) {
    element.scrollIntoView({behavior: "smooth", inline: "center"});
    element.classList.add("active-image");
    document.querySelector(`#${element.id}-button`).classList.add("button-selected");
}

function scrollForward() {
    let nextElement = document.querySelector(".active-image + div");

    checkForActiveImage();

    if (!nextElement) {
        nextElement = document.querySelector(".image-div");
    }
    scrollToDiv(nextElement);
}

function scrollBackward() {
    let previousElement = document.querySelector(".active-image").previousSibling;

    checkForActiveImage();

    if (!previousElement) {
        previousElement = document.querySelector(".inner-div").lastChild;
    }
    scrollToDiv(previousElement);
}

function buildNavBarButtons(navBarDiv) {
    const backButton = document.createElement("button");
    backButton.classList.add("arrow");
    backButton.classList.add("arrow-left");
    navBarDiv.appendChild(backButton);
    backButton.addEventListener("click", () => {
        scrollBackward(currentImage);
    })

    const imageListDiv = getImageListDiv();

    imageListDiv.forEach(imageDiv => {
        const divScrollButton = document.createElement("button");
        divScrollButton.classList.add("round-button");
        divScrollButton.setAttribute("id", `${imageDiv.id}-button`);
        navBarDiv.appendChild(divScrollButton);
        divScrollButton.addEventListener("click", () => {

            checkForActiveImage();

            scrollToDiv(imageDiv);
            currentImage = imageDiv;
        })
    });

    const forwardButton = document.createElement("button");
    forwardButton.classList.add("arrow");
    forwardButton.classList.add("arrow-right");
    navBarDiv.appendChild(forwardButton);
    forwardButton.addEventListener("click", () => {
        scrollForward(currentImage);
    })

}

window.addEventListener("load", () => {
    document.querySelector(".round-button").click();
    setInterval(() => {
        scrollForward(currentImage);
    }, 5000);
})

export default function buildNavBar() {
    const navBarDiv = document.createElement("div");
    navBarDiv.classList.add("nav-bar");

    buildNavBarButtons(navBarDiv);
    
    return navBarDiv;
}