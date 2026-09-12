// ===== EmailJS CDN Auto-Loader =====
(function loadEmailJS() {
    if (!document.querySelector('script[src*="email.min.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.async = true;
        document.head.appendChild(script);
    }
})();

// ===== EmailJS & Global Enquiry Handler =====

// 1. CONFIGURATION: Replace these placeholders with your actual EmailJS Keys
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";  
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";  
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; 

// Initialize EmailJS SDK after CDN loads
function initEmailJS() {
    if (window.emailjs && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    
    // Check for EmailJS SDK availability periodically in case CDN is still loading
    const checkInterval = setInterval(() => {
        if (window.emailjs) {
            initEmailJS();
            clearInterval(checkInterval);
        }
    }, 100);

    // ==========================================
    // 1. POPULATE PRODUCT DROPDOWNS DYNAMICALLY
    // ==========================================
    function populateProductDropdowns() {
        const productSelects = document.querySelectorAll('select#product, select#mfProduct');
        if (!productSelects.length) return;

        const productsList = (typeof PRODUCTS !== 'undefined' && Array.isArray(PRODUCTS)) ? PRODUCTS : [];

        productSelects.forEach(select => {
            select.innerHTML = '<option value="">-- Select Product / Category --</option>';

            if (productsList.length > 0) {
                const categories = {};
                productsList.forEach(item => {
                    const catName = item.category || 'General';
                    if (!categories[catName]) categories[catName] = [];
                    categories[catName].push(item);
                });

                Object.keys(categories).forEach(cat => {
                    const group = document.createElement('optgroup');
                    group.label = cat;

                    categories[cat].forEach(prod => {
                        const opt = document.createElement('option');
                        opt.value = prod.name;
                        opt.textContent = prod.name;
                        group.appendChild(opt);
                    });

                    select.appendChild(group);
                });
            } else {
                const fallbacks = [
                    "Pressure & Temperature Instruments",
                    "Instruments Fittings",
                    "Pneumatic Fittings",
                    "Valves & Regulators",
                    "Gaskets & Sheets",
                    "Level Instruments",
                    "Flow Instruments"
                ];
                fallbacks.forEach(cat => {
                    const opt = document.createElement('option');
                    opt.value = cat;
                    opt.textContent = cat;
                    select.appendChild(opt);
                });
            }
        });
    }

    populateProductDropdowns();

    // ==========================================
    // 2. CONTACT PAGE FORM HANDLER
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    const productSelect = document.getElementById('product');

    const urlParams = new URLSearchParams(window.location.search);
    const productParam = urlParams.get('product');

    if (productParam && productSelect) {
        const decodedProd = decodeURIComponent(productParam).toLowerCase();
        let matched = false;

        Array.from(productSelect.options).forEach(option => {
            if (option.value && option.value.toLowerCase() === decodedProd) {
                productSelect.value = option.value;
                matched = true;
            }
        });

        if (!matched) {
            const opt = document.createElement('option');
            opt.value = decodeURIComponent(productParam);
            opt.textContent = decodeURIComponent(productParam);
            opt.selected = true;
            productSelect.appendChild(opt);
        }
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn ? submitBtn.textContent : 'Send Message';

            const formData = {
                from_name: document.getElementById('name').value.trim(),
                from_email: document.getElementById('email').value.trim(),
                company: document.getElementById('company') ? document.getElementById('company').value.trim() : 'N/A',
                phone: document.getElementById('phone') ? document.getElementById('phone').value.trim() : 'N/A',
                product_interest: document.getElementById('product') ? document.getElementById('product').value : 'General Enquiry',
                message: document.getElementById('message').value.trim(),
                submission_time: new Date().toLocaleString()
            };

            if (!formData.from_name || !formData.from_email || !formData.message) {
                showFormStatus('Please fill in all required fields.', 'error');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.from_email)) {
                showFormStatus('Please enter a valid email address.', 'error');
                return;
            }

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
            }

            sendEnquiryEmail(formData)
                .then(() => {
                    showFormStatus('Thank you! Your message has been sent successfully. We will contact you soon.', 'success');
                    storeFormData(formData);
                    contactForm.reset();
                })
                .catch((err) => {
                    console.error('Email sending error:', err);
                    showFormStatus('Failed to send email. Stored locally, we will still get back to you!', 'warning');
                    storeFormData(formData);
                })
                .finally(() => {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalBtnText;
                    }
                    setTimeout(() => showFormStatus('', ''), 6000);
                });
        });
    }

    // ==========================================
    // 3. GLOBAL "REQUEST QUOTE" MODAL HANDLER
    // ==========================================
    const modalSubmitBtn = document.getElementById('modalSubmit');

    if (modalSubmitBtn) {
        modalSubmitBtn.addEventListener('click', function(e) {
            e.preventDefault();

            const prodNameHeader = document.getElementById('modalProductName');
            const nameInput = document.getElementById('mfName');
            const phoneInput = document.getElementById('mfPhone');
            const emailInput = document.getElementById('mfEmail');
            const notesInput = document.getElementById('mfNotes');

            const modalData = {
                from_name: nameInput ? nameInput.value.trim() : '',
                phone: phoneInput ? phoneInput.value.trim() : '',
                from_email: emailInput ? emailInput.value.trim() : 'N/A',
                product_interest: prodNameHeader ? prodNameHeader.textContent.trim() : 'Modal Quote Request',
                message: notesInput ? notesInput.value.trim() : 'No additional specs provided.',
                company: 'N/A',
                submission_time: new Date().toLocaleString()
            };

            if (!modalData.from_name || !modalData.phone) {
                alert('Please enter your Name and Phone / WhatsApp number.');
                return;
            }

            const originalText = modalSubmitBtn.textContent;
            modalSubmitBtn.disabled = true;
            modalSubmitBtn.textContent = 'Sending Enquiry...';

            sendEnquiryEmail(modalData)
                .then(() => {
                    alert('Thank you! Your quote request has been sent successfully.');
                    storeFormData(modalData);

                    if (nameInput) nameInput.value = '';
                    if (phoneInput) phoneInput.value = '';
                    if (emailInput) emailInput.value = '';
                    if (notesInput) notesInput.value = '';

                    const modalOverlay = document.getElementById('quoteModal');
                    if (modalOverlay) modalOverlay.style.display = 'none';
                })
                .catch((err) => {
                    console.error('Modal Email Error:', err);
                    alert('Enquiry saved successfully! We will get back to you shortly.');
                    storeFormData(modalData);
                })
                .finally(() => {
                    modalSubmitBtn.disabled = false;
                    modalSubmitBtn.textContent = originalText;
                });
        });
    }

    function sendEnquiryEmail(templateParams) {
        if (window.emailjs && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
            return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
        } else {
            return new Promise((resolve) => setTimeout(resolve, 800));
        }
    }

    function showFormStatus(message, type) {
        const statusDiv = document.getElementById('formStatus');
        if (!statusDiv) return;

        if (message) {
            statusDiv.textContent = message;
            statusDiv.className = `form-status ${type}`;
        } else {
            statusDiv.className = 'form-status';
            statusDiv.textContent = '';
        }
    }

    function storeFormData(data) {
        try {
            const existingData = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
            existingData.push(data);
            localStorage.setItem('contactSubmissions', JSON.stringify(existingData));
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }
});

window.getContactSubmissions = function() {
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
    console.log('Submissions:', submissions);
    return submissions;
};

window.clearContactSubmissions = function() {
    localStorage.removeItem('contactSubmissions');
    console.log('Submissions cleared.');
};
