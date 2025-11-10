// burger menu start
const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu__body')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}

/*===========================================*/

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})

//burger menu end


/*===========================================*/

// slider genres
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider__wrapper');
    const prevBtn = document.querySelector('.slider__button-prev');
    const nextBtn = document.querySelector('.slider__button-next');
    const cardWidth = document.querySelector('.slider__item').offsetWidth;
    let currentSlide = 0;

    function moveSlide() {
        slider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            moveSlide();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < slider.children.length - 3) {
            currentSlide++;
            moveSlide();
        }
    });

    function autoSlide() {
        currentSlide++;
        if (currentSlide >= slider.children.length - 2) {
            currentSlide = 0;
        }
        moveSlide();
    }

    setInterval(autoSlide, 3000); // Автоматическое переключение каждые 3 секунды
});



///
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.quotes-slider__wrapper');
    const cardWidth = document.querySelector('.quotes-slider__item').offsetWidth;
    let currentSlide = 0;

    function moveSlide() {
        slider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
    }

    function autoSlide() {
        currentSlide++;
        if (currentSlide >= slider.children.length - 0) {
            currentSlide = 0;
        }
        moveSlide();
    }

    setInterval(autoSlide, 3000); // Автоматическое переключение каждые 3 секунды
});