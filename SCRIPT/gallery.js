function initGallery() {
    let angle = 0;
    const container = document.getElementById("imageContainer");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    nextBtn.addEventListener("click", () => {
        angle -= 45;
        container.style.transform = `rotateY(${angle}deg)`;
    });

    prevBtn.addEventListener("click", () => {
        angle += 45;
        container.style.transform = `rotateY(${angle}deg)`;
    });
}
