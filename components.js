// ============================================================
// components.js — Injects shared header & footer into all pages
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    injectComponent('header-placeholder', 'header.html', () => initNav());
    injectComponent('footer-placeholder', 'footer.html', () => highlightActiveNav());
});

function injectComponent(placeholderId, file, callback) {
    const el = document.getElementById(placeholderId);
    if (!el) return;
    fetch(file)
        .then(r => r.text())
        .then(html => {
            el.innerHTML = html;
            if (callback) callback();
        })
        .catch(() => {
            console.warn(`Could not load component: ${file}`);
        });
}

// ── Highlight active nav link based on current page ──
function highlightActiveNav() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item').forEach(a => {
        a.classList.remove('active');
        const href = a.getAttribute('href') || '';
        if (href === page || (page === '' && href === 'index.html')) {
            a.classList.add('active');
        }
    });
}

// ── Navbar: sticky shrink, hamburger, dropdown ──
function initNav() {
    highlightActiveNav();

    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    // Sticky shrink on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile hamburger toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-item').forEach(a => {
        a.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('active');
        });
    });

    // Desktop dropdown hover — handled by CSS
    // Mobile dropdown toggle on click
    document.querySelectorAll('.has-dropdown > .nav-item').forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                link.closest('.has-dropdown').classList.toggle('open');
            }
        });
    });
}
