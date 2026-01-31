// Initialize Lucide Icons
lucide.createIcons();

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .section-title, .project-card, .skill-tag, .timeline-item').forEach(el => {
    el.classList.add('fade-in'); // Ensure class exists
    observer.observe(el);
});

// Navbar background on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(15, 10, 30, 0.95)';
        nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = 'rgba(15, 10, 30, 0.8)';
        nav.style.boxShadow = 'none';
    }
});
