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
