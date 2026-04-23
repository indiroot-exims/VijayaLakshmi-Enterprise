/**
 * Vijaya Lakshmi Enterprises - Main JavaScript
 * Professional Industrial Website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initBackToTop();
    initNavbarScroll();
    initSmoothScroll();
    initAnimations();
});

/**
 * Back to Top Button
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Navbar scroll effect
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '12px 0';
        } else {
            navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)';
            navbar.style.padding = '16px 0';
        }
    });
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const offset = 100;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Scroll animations using Intersection Observer
 */
function initAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .category-card, .product-card, .industry-card, .why-feature');
    
    if (!animatedElements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/**
 * Product Filter functionality (for products page)
 */
function initProductFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-item');
    const searchInput = document.getElementById('productSearch');
    
    // Filter by category
    if (filterBtns.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.dataset.filter;
                
                // Update active state
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter products
                products.forEach(product => {
                    if (filter === 'all' || product.dataset.category === filter) {
                        product.style.display = 'block';
                        setTimeout(() => {
                            product.style.opacity = '1';
                            product.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        product.style.opacity = '0';
                        product.style.transform = 'scale(0.9)';
                        setTimeout(() => {
                            product.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            products.forEach(product => {
                const title = product.querySelector('.product-title').textContent.toLowerCase();
                const category = product.querySelector('.product-category').textContent.toLowerCase();
                const specs = product.querySelector('.product-specs').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || category.includes(searchTerm) || specs.includes(searchTerm)) {
                    product.style.display = 'block';
                    setTimeout(() => {
                        product.style.opacity = '1';
                        product.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    product.style.opacity = '0';
                    product.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        product.style.display = 'none';
                    }, 300);
                }
            });
        });
    }
}

/**
 * Contact Form Validation (for contact page)
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form fields
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        
        let isValid = true;
        
        // Simple validation
        [name, email, phone, subject, message].forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('is-invalid');
                isValid = false;
            } else {
                field.classList.remove('is-invalid');
                field.classList.add('is-valid');
            }
        });
        
        // Email validation
        if (email.value && !isValidEmail(email.value)) {
            email.classList.add('is-invalid');
            isValid = false;
        }
        
        if (isValid) {
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'alert alert-success mt-4';
            successMsg.innerHTML = '<i class="fas fa-check-circle me-2"></i>Thank you for your inquiry! We will get back to you within 24 hours.';
            form.appendChild(successMsg);
            
            // Reset form
            form.reset();
            document.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMsg.remove();
            }, 5000);
        }
    });
}

/**
 * Email validation helper
 */
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * URL Parameter handler for product filtering
 */
function handleURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category) {
        const filterBtn = document.querySelector(`[data-filter="${category}"]`);
        if (filterBtn) {
            filterBtn.click();
        }
    }
}

// Initialize product page specific functions
if (window.location.pathname.includes('products')) {
    document.addEventListener('DOMContentLoaded', function() {
        initProductFilter();
        handleURLParams();
    });
}

// Initialize contact page specific functions
if (window.location.pathname.includes('contact')) {
    document.addEventListener('DOMContentLoaded', initContactForm);
}
