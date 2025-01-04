document.querySelector(".prev").addEventListener("click", prevSlide);
document.querySelector(".next").addEventListener("click", nextSlide);


const slides = document. querySelectorAll(".slide");
console.log(slides)
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", initializeSlider)

const intervalId = setInterval(nextSlide, 5000);

function prevSlide (){
    clearInterval(intervalId);
    console.log("prev");
    slideIndex--;
    showSlide(slideIndex)
}

function nextSlide (){
    console.log("next");
    slideIndex++;
    showSlide(slideIndex);
}

function showSlide(index){
    if(index>=slides.length){
        slideIndex=0;
    }

    else if (index<0){
        slideIndex= slides.length-1;
    }
   

    slides.forEach(slide => {
        slide.classList.remove("display");
    })
    slides[slideIndex].classList.add("display");
}

function initializeSlider() {
    slides[slideIndex].classList.add("display");

}