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
function scrollHeader() {
	const header = document.getElementById('header');
	if (this.scrollY >= 56) header.classList.add('change_bg_header');
	else header.classList.remove('change_bg_header');
}
window.addEventListener('scroll', scrollHeader);

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
