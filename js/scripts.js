/**
 * Custom JavaScript for Avukat Ezgi Cura Law Firm Website
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add active class to current navigation item
    highlightCurrentPage();
    
    // Add scroll event listener for navbar
    handleNavbarScroll();
    
    // Initialize any tooltips
    initializeTooltips();
});

/**
 * Highlights the current page in the navigation menu
 */
function highlightCurrentPage() {
    // Get current page path
    const currentPage = window.location.pathname.split('/').pop();
    
    // Find all navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Loop through links and add active class to current page
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // If the link href matches the current page or if it's index.html and we're at the root
        if (linkHref === currentPage || 
            (linkHref === 'index.html' && (currentPage === '' || currentPage === '/'))) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
}

/**
 * Handles navbar background change on scroll
 */
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
}

/**
 * Initializes Bootstrap tooltips
 */
function initializeTooltips() {
    // If Bootstrap tooltip is available, initialize it
    if (typeof bootstrap !== 'undefined' && typeof bootstrap.Tooltip !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
}

/**
 * Form validation helper
 * @param {HTMLFormElement} form - The form element to validate
 * @returns {boolean} - Whether the form is valid
 */
function validateForm(form) {
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return false;
    }
    return true;
}

/**
 * Scroll to element smoothly
 * @param {string} elementId - The ID of the element to scroll to
 */
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        if (targetId) {
            scrollToElement(targetId);
        }
    });
}); 