let slideIndex = 0;

const showSlides = () => {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => {
        slide.classList.remove("active"); // Remove active class from all slides
    });

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1; // Reset index if it exceeds the number of slides

    slides[slideIndex - 1].classList.add("active"); // Add active class to the current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
};

document.addEventListener("DOMContentLoaded", showSlides);
