// script.js - Clean, modern, and well-documented

document.addEventListener('DOMContentLoaded', function() {
    // --- Smooth Scroll for Navigation ---
    document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- Fade-in Animation on Scroll ---
    const faders = document.querySelectorAll('.fade-in, .card.fade-in');
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    faders.forEach(fader => appearOnScroll.observe(fader));

    // --- Hero Section Animation on Load ---
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.opacity = 0;
        hero.style.transform = 'translateY(40px)';
        setTimeout(() => {
            hero.style.transition = 'opacity 0.8s cubic-bezier(.39,.575,.565,1), transform 0.8s cubic-bezier(.39,.575,.565,1)';
            hero.style.opacity = 1;
            hero.style.transform = 'translateY(0)';
        }, 200);
    }

    // --- Back to Top Button ---
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.style.display = window.scrollY > 300 ? 'flex' : 'none';
        });
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Connect Icons: Pop-in, Float, Sparkle ---
    const connectIcons = document.querySelectorAll('.connect-icons .icon-anim');
    connectIcons.forEach((icon, i) => {
        // Pop-in effect
        icon.style.opacity = 0;
        icon.style.transform = 'scale(0.7)';
        setTimeout(() => {
            icon.style.transition = 'opacity 0.7s cubic-bezier(.39,.575,.565,1), transform 0.7s cubic-bezier(.39,.575,.565,1)';
            icon.style.opacity = 1;
            icon.style.transform = 'scale(1)';
        }, 400 + i * 80);
        // Floating animation
        setTimeout(() => {
            icon.animate([
                { transform: 'translateY(0px)' },
                { transform: 'translateY(-8px)' },
                { transform: 'translateY(0px)' }
            ], {
                duration: 2600 + i * 100,
                iterations: Infinity,
                direction: 'alternate',
                easing: 'ease-in-out',
                delay: i * 80
            });
        }, 800 + i * 60);
        // Sparkle on hover
        icon.addEventListener('mouseenter', () => {
            let sparkle = document.createElement('span');
            sparkle.className = 'icon-sparkle';
            sparkle.style.left = Math.random() * 60 + '%';
            sparkle.style.top = Math.random() * 60 + '%';
            icon.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 700);
        });
    });

    // --- Accessibility: Add aria-labels to Social Links ---
    document.querySelectorAll('.social-links a').forEach(link => {
        const img = link.querySelector('img');
        if (img && !link.hasAttribute('aria-label')) {
            link.setAttribute('aria-label', img.alt);
        }
    });
});
