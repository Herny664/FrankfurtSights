// Query Selectors
const body = document.body;
const menuButton = document.querySelector(".header__menu-container");
const nav = document.querySelector(".header__nav");
const openMenuIcon = document.querySelector(".open-menu");
const closeMenuIcon = document.querySelector(".close-menu");

// Functions

// Evern Listeners
menuButton.addEventListener("click", () => {
	if (nav.classList.contains("opened")) {
		nav.classList.remove("opened");
		nav.classList.add("closed");
		body.classList.remove("no-scroll");
	} else {
		nav.classList.remove("closed");
		nav.classList.add("opened");
		body.classList.add("no-scroll");
	}

	openMenuIcon.classList.toggle("hidden");
	closeMenuIcon.classList.toggle("shown");
});

const navMql = matchMedia("(min-width: 600px)");
navMql.addEventListener("change", () => {
	if (navMql.matches) {
		nav.classList.remove("closed");
		body.classList.remove("no-scroll");
	}
});