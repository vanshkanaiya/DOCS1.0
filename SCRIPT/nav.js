const toggler = document.querySelector("#toggler"),
  ul = document.querySelector("nav ul");

const toggleMenu = () => {
  ul.classList.toggle("!pointer-events-auto");
  ul.classList.toggle("!visible");
  ul.classList.toggle("!opacity-100");
};

ul.addEventListener("click", (e) => {
  if (e.target.id === "menuButton") {
    toggleMenu();
  }
});
toggler.addEventListener("click", () => {
  toggleMenu();
});
