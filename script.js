let slideShowI = ["/fakeCompany/images/slideOne.png", "/fakeCompany/images/slideTwo.png", "/fakeCompany/images/slideThree.png"];

let currentSlide = document.querySelector("#currentSlide");
let slideButton = document.querySelector('#slideButton');

currentSlide.setAttribute('src', slideShowI[0])
let i = 0;
function slideChanger() {
    i++;
    if (i > 2) {
        i = 0;
    }
    currentSlide.style.opacity = 0;
    slideButton.style.opacity = 0
    setTimeout(() => {
        currentSlide.setAttribute('src', slideShowI[i]);
        currentSlide.style.opacity = 1;
        slideButton.style.opacity = 1

    }, 200); 
}
setInterval(slideChanger, 8000);