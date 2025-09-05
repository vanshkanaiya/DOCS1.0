function initSlider() {
    let currentSlide = 0;
    const slide = document.querySelectorAll(".slide");

    function showSlide(index) {
        slide.forEach((s, i) => {
            s.style.opacity = i === index ? "1" : "0";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slide.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slide.length) % slide.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 3000);

    // Make navigation functions global so buttons in HTML can use them
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
}
