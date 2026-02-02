// Initialize EmailJS
(function() {
    emailjs.init("YOUR_EMAILJS_PUBLIC_KEY"); // Replace with your actual key
})();

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const popupMessage = document.getElementById('popup-message');
const contactForm = document.getElementById('contact-form');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.innerHTML = navMenu.classList.contains('active') 
        ? "<i class='bx bx-x'></i>" 
        : "<i class='bx bx-menu'></i>";
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.innerHTML = "<i class='bx bx-menu'></i>";
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active link highlighting on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Typed.js Animation for Hero Section
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.highlight')) {
        const typed = new Typed('.highlight', {
            strings: [
                'Exceptional Digital Experiences',
                'High-Performance Web Applications',
                'Complex CRM Solutions',
                'Intuitive User Interfaces',
                'Scalable Full-Stack Systems'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
    
    // ScrollReveal Animations
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false
    });
    
    // Reveal animations for sections
    sr.reveal('.hero-text', { origin: 'left', delay: 300 });
    sr.reveal('.hero-image', { origin: 'right', delay: 500 });
    sr.reveal('.about-text', { origin: 'left', delay: 300 });
    sr.reveal('.about-image', { origin: 'right', delay: 500 });
    sr.reveal('.skill-category', { interval: 200 });
    sr.reveal('.project-card', { interval: 200 });
    sr.reveal('.timeline-item', { interval: 200 });
    sr.reveal('.contact-info', { origin: 'left', delay: 300 });
    sr.reveal('.contact-form-container', { origin: 'right', delay: 500 });
    sr.reveal('.footer-col', { interval: 200 });
    
    // Initialize form handling
    initContactForm();
});

// Contact Form Handling
function initContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="bx bx-loader bx-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Send email using EmailJS
        emailjs.sendForm('service_bfos50d', 'template_lff2ezq', contactForm)
            .then((response) => {
                showPopup('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                showPopup('❌ Failed to send message. Please try again or email me directly.', 'error');
            })
            .finally(() => {
                // Reset button state
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 1000);
            });
    });
}

// Popup Message Function
function showPopup(message, type = 'success') {
    popupMessage.textContent = message;
    popupMessage.className = type; // 'success' or 'error'
    
    // Show popup
    popupMessage.style.bottom = '30px';
    popupMessage.style.opacity = '1';
    
    // Hide after 5 seconds
    setTimeout(() => {
        popupMessage.style.bottom = '-100px';
        popupMessage.style.opacity = '0';
    }, 5000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Project card hover effect enhancement
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Skill item animation on hover
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(5px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
    });
});

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showPopup('✅ Thank you for subscribing! You\'ll receive updates soon.', 'success');
        newsletterForm.reset();
    });
}

// Preloader (optional)
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.style.overflow = 'auto';
    }, 500);
});