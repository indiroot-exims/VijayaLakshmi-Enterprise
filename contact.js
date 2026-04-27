// ===== Contact Form Handling =====

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const productSelect = document.getElementById('product');

    if (!contactForm) return;

    // Pre-fill product interest from URL parameter if present
    const urlParams = new URLSearchParams(window.location.search);
    const productParam = urlParams.get('product');
    
    if (productParam && productSelect) {
        // Try to match the product parameter to a select option
        const options = productSelect.querySelectorAll('option');
        let found = false;
        
        options.forEach(option => {
            if (option.value && productParam.toLowerCase().includes(option.value.split('-')[0])) {
                productSelect.value = option.value;
                found = true;
            }
        });
        
        // If not found in predefined options, update the label to show the product
        if (!found) {
            const label = document.querySelector('label[for="product"]');
            if (label) {
                label.textContent = `Product Interest: ${decodeURIComponent(productParam)} *`;
            }
        }
    }

    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            company: document.getElementById('company').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            product: document.getElementById('product').value,
            message: document.getElementById('message').value.trim(),
            timestamp: new Date().toLocaleString()
        };

        // Validation
        if (!formData.name || !formData.email || !formData.product || !formData.message) {
            showFormStatus('Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showFormStatus('Please enter a valid email address.', 'error');
            return;
        }

        // Phone validation (if provided)
        if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
            showFormStatus('Please enter a valid phone number.', 'error');
            return;
        }

        // In a real implementation, send to backend
        // For now, we'll store locally and show success message
        storeFormData(formData);
        showFormStatus('Thank you! Your message has been sent successfully. We will contact you soon.', 'success');

        // Log to console for demonstration
        console.log('[v0] Contact Form Submitted:', formData);

        // Reset form
        contactForm.reset();

        // Clear success message after 5 seconds
        setTimeout(function() {
            showFormStatus('', '');
        }, 5000);
    });

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

    function storeFormData(formData) {
        // Store in localStorage for demonstration
        // In production, this would be sent to a backend server
        try {
            const existingData = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
            existingData.push(formData);
            localStorage.setItem('contactSubmissions', JSON.stringify(existingData));

            // Also log to console
            console.log('[v0] All Contact Submissions:', existingData);
        } catch (error) {
            console.error('[v0] Error storing form data:', error);
        }
    }
});

// ===== Contact Information Display =====
// Display stored contact submissions (for testing/verification)
window.getContactSubmissions = function() {
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
    console.log('[v0] Contact Form Submissions:', submissions);
    return submissions;
};

// Clear stored submissions
window.clearContactSubmissions = function() {
    localStorage.removeItem('contactSubmissions');
    console.log('[v0] Contact submissions cleared');
};
