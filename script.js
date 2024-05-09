// JavaScript for smooth scrolling on navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// JavaScript to handle "Scroll to Top" button functionality
var mybutton = document.getElementById("toTopButton");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

mybutton.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// JavaScript to handle copying text from icons (email and phone)
const copyIcons = document.querySelectorAll('.copy-icon');
copyIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const email = icon.dataset.email;
        navigator.clipboard.writeText(email)
            .then(() => alert('Email copied to clipboard!'))
            .catch(err => console.error('Failed to copy email: ', err));
    });
});

const phoneIcon = document.querySelector('.phone-icon');
phoneIcon.addEventListener('click', () => {
    const phone = phoneIcon.dataset.phone;
    navigator.clipboard.writeText(phone)
        .then(() => alert('Phone number copied to clipboard!'))
        .catch(err => console.error('Failed to copy phone number: ', err));
});

// JavaScript for slider functionality
const slider = document.querySelector('.slider');
const sliderContainer = slider.querySelector('.slider-container');
const projectCards = sliderContainer.querySelectorAll('.project-card');
const prevBtn = slider.querySelector('.prev-btn');
const nextBtn = slider.querySelector('.next-btn');
const indicatorDots = slider.querySelectorAll('.indicator-dot');

let currentIndex = 0;
let cardWidth = projectCards[0].offsetWidth;
const numCards = projectCards.length;

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    updateIndicator();
}

function updateIndicator() {
    indicatorDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function handleResize() {
    cardWidth = projectCards[0].offsetWidth;
    updateSlider();
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + numCards) % numCards;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % numCards;
    updateSlider();
});

window.addEventListener('resize', handleResize);
