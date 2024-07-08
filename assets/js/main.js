/* ===================== HEADER ===================== */

const navMenu = document.getElementById('nav_menu'),
	navToggle = document.getElementById('nav_toggle'),
	navClose = document.getElementById('nav_close');

// SHOW MENU
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show_menu');
	});
}

// HIDDEN MENU
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show_menu');
	});
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
	const navMenu = document.getElementById('nav_menu');
	navMenu.classList.remove('show_menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

// CHANGE BACKGROUND HEADER

/* ====================== MAIN ====================== */

// SECTION - POPULAR

// SWIPER

// SECTION - FEATURED

// MIXITUP FILTER

// Link active products

/* ================= SCROLL ACTIONS ================= */

// SHOW SCROLL UP

// SCROLL SECTIONS ACTIVE LINK

// SCROLL REVEAL ANIMATION
