const sectionHeader = document.querySelector('.section-header');
const header = document.getElementById('header');

document.querySelector('.btn-burger').addEventListener('click', () => {
	sectionHeader.classList.toggle('section-header--active-nav');

	if (sectionHeader.classList.contains('section-header--active-nav')) {
		hideScroll();
	} else {
		showScroll();
	}
});

const hideScroll = () => {
	const scrollWidth = `${getScrollbarWidth()}px`;

	document.body.style.paddingRight = scrollWidth;
	document.body.style.overflow = 'hidden';

	header.style.paddingRight = scrollWidth;
};

const showScroll = () => {
	document.body.style.paddingRight = '';
	document.body.style.overflow = 'visible';

	header.style.paddingRight = '';
};

const resetNav = () => {
	sectionHeader.classList.remove('section-header--active-nav');
	showScroll();
}

window.addEventListener('resize', resetNav);

// Get scrollbar width
const getScrollbarWidth = () => {
	const outer = document.createElement('div');

	outer.style.position = 'absolute';
	outer.style.top = '-9999px';
	outer.style.width = '50px';
	outer.style.height = '50px';
	outer.style.overflow = 'scroll';
	outer.style.visibility = 'hidden';

	document.body.appendChild(outer);
	const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
	document.body.removeChild(outer);

	return scrollBarWidth;
};

const swiper = new Swiper('.swiper', {
	// Optional parameters
	// direction: 'vertical',
	loop: true,

	// If we need pagination
	// pagination: {
	// 	el: '.swiper-pagination',
	// },

	// Navigation arrows
	navigation: {
		nextEl: '.section-hero-button-next',
		prevEl: '.section-hero-button-prev',
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
});
