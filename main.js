const menuButton = document.querySelector(".menu-container");
const nav = document.querySelector(".header__nav");
const openMenuIcon = document.querySelector(".open-menu");
const closeMenuIcon = document.querySelector(".close-menu");

menuButton.addEventListener("click", () => {
	if (nav.classList.contains("opened")) {
		nav.classList.remove("opened");
		nav.classList.add("closed");
	} else {
		nav.classList.remove("closed");
		nav.classList.add("opened");
	}

	openMenuIcon.classList.toggle("hidden");
	closeMenuIcon.classList.toggle("shown");
});
