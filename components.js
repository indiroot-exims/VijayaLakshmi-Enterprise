// components.js — injects shared header & footer, handles nav behaviour
document.addEventListener('DOMContentLoaded', () => {
    inject('header-placeholder', 'header.html', initNav);
    inject('footer-placeholder', 'footer.html', null);
});

function inject(id, file, cb) {
    const el = document.getElementById(id);
    if (!el) return;
    fetch(file)
        .then(r => r.text())
        .then(html => { el.innerHTML = html; if (cb) cb(); })
        .catch(() => console.warn('Could not load:', file));
}

function initNav() {
    highlightActiveNav();
    const navbar    = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    hamburger?.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('active');
    });

    // Mobile dropdown toggle
    document.querySelectorAll('.has-dropdown > .nav-item').forEach(a => {
        a.addEventListener('click', e => {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                a.closest('.has-dropdown').classList.toggle('open');
            }
        });
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-item:not(.has-dropdown .nav-item)').forEach(a => {
        a.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('active');
        });
    });
}

function highlightActiveNav() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item').forEach(a => {
        a.classList.remove('active');
        const href = (a.getAttribute('href') || '').split('#')[0];
        if (href === page || (page === '' && href === 'index.html')) {
            a.classList.add('active');
        }
    });
}
