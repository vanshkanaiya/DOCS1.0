const contentDiv = document.getElementById("content");

async function loadPage(relativePath, button, pushToHistory = true) {
    const position = button.dataset.position || "left";
    let slideOut = "translate-x-full";
    let slideIn = "-translate-x-full";

    if (position === "bottom") {
        slideOut = "-translate-y-full";
        slideIn = "translate-y-full";
    }

    contentDiv.classList.remove(
        "translate-x-0",
        "translate-y-0",
        "opacity-100",
    );
    contentDiv.classList.add(slideOut, "opacity-0");

    setTimeout(async () => {
        try {
            const res = await fetch(relativePath);
            const data = await res.text();
            contentDiv.innerHTML = data;

            // Re-initialize slider if loading home.html
            if (
                relativePath.includes("home") &&
                typeof initSlider === "function"
            ) {
                initSlider();
            }

            if (
                relativePath.includes("gallery") &&
                typeof initGallery === "function"
            ) {
                initGallery();
            }

            contentDiv.classList.remove(slideOut, "opacity-0");
            contentDiv.classList.add(slideIn);

            requestAnimationFrame(() => {
                contentDiv.classList.remove(slideIn);
                contentDiv.classList.add(
                    "translate-x-0",
                    "translate-y-0",
                    "opacity-100",
                );
            });

            if (pushToHistory) {
                history.pushState({ path: relativePath }, "", "index.html");
            }
        } catch (err) {
            contentDiv.innerHTML =
                "<p class='text-red-600 text-center'>Failed to load content.</p>";
            console.error(err);
        }
    }, 300);
}

// Load home.html on first load
fetch("PAGES/home.html")
    .then((res) => res.text())
    .then((data) => {
        contentDiv.innerHTML = data;
        if (typeof initSlider === "function") {
            initSlider();
        }
        contentDiv.classList.add("slide-up");
    })
    .catch((err) => {
        contentDiv.innerHTML =
            "<p class='text-red-600 text-center'>Failed to load home page.</p>";
        console.error(err);
    });
