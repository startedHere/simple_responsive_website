'use strict';

//! Show Nav Menu...
//////////////////////////////////////////////////////
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navToggle = document.getElementById('nav-toggle');

//_ Menu 100%...
///////////////////////////////////////////////////////////
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu'); //# 'show-menu' class will now be created inside 'styles.css' where can be sourced from....
	});
}

//_ Menu 0%...
////////////////////////////////////////////////////////
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}

//! Click Any Nav Link To Close Nav Menu...
///////////////////////////////////////////////////////////
const navLink = document.querySelectorAll('.nav__link'); //# is ('.querySelectorAll') an Array ?? {Because of Response gotten from ChatGPT}

function howLinkBehaves() {
	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show-menu'); //# ('.show-menu') created in styles.css
}

navLink.forEach(n => n.addEventListener('click', howLinkBehaves));

//! Changing Background Header When Scrolling...
///////////////////////////////////////////////////////////////////////
function headerOnScroll() {
	const header = document.getElementById('header');
	//# When the Scroll is greater than 100 vp height, add the scroll-header class to the header tag
	if (this.scrollY >= 100) {
		//# the 'this' keyword here is pointing to 'window' object since it is the object calling the 'headerOnScroll' function...
		header.classList.add('scroll-header');
	} else {
		header.classList.remove('scroll-header');
	}
}
window.addEventListener('scroll', headerOnScroll);

//! Initializing SwiperJs For Discover Section of Web Page
//////////////////////////////////////////////////////////////////////////////////
const swiper = new Swiper('.discover__container', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	spaceBetween: 8,
	coverFlowEffect: {
		// rotate: 50,
		rotate: 0,
		// stretch: 0,
		// depth: 100,
		// modifier: 1,
		slideShadows: 'true',
	},
	// pagination: {
	// 	el: '.swiper-pagination',
	// },
});

//! Video Section....
//////////////////////////////////////////
const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-button');
const videoIcon = document.getElementById('video-icon');

function playPause() {
	if (videoFile.paused) {
		// To Play Video
		videoFile.play();

		// Changing Video icon from Pause to Play
		videoIcon.classList.add('ri-pause-fill');
		videoIcon.classList.remove('ri-play-fill');
	} else {
		// To Pause Video
		videoFile.pause();

		videoIcon.classList.remove('ri-pause-fill');
		videoIcon.classList.add('ri-play-fill');
	}
}

videoButton.addEventListener('click', playPause);

function endOfVideo() {
	videoIcon.classList.remove('ri-pause-fill');
	videoIcon.classList.add('ri-play-fill');
}

// When Video ends...
videoFile.addEventListener('ended', endOfVideo);

//! display Scroll-Up Button beside The Scroll Bar While Scrolling...
///////////////////////////////////////
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');

	//# When the Scroll is Higher than 200vp height , add the 'show-scroll' class to the tag with the scroll-up class
	if (this.scrollY >= 400) {
		scrollUp.classList.add('show-scroll');
	} else {
		scrollUp.classList.remove('show-scroll');
	}
}
window.addEventListener('scroll', scrollUp);

//! Scrolling A Section will Activate Corresponding Section Link on The Nav Bar...
///////////////////////////////////////////////////////////////////////////
function scrollActive() {
	const scrollY = window.pageYOffset;
	const sections = document.querySelectorAll('section[id]');

	sections.forEach(current => {
		const sectionTop = current.offsetTop - 50;
		const sectionHeight = current.offsetHeight;
		const sectionId = current.getAttribute('id');
		// const sectionId = current.id;

		// _ If Statement to define Border Boundaries for An Active Section on a Webpage...
		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
		} else {
			document
				.querySelector(`.nav__menu a[href*=${sectionId}]`)
				.classList.remove('active-link');
		}
	});
}
window.addEventListener('scroll', scrollActive);
