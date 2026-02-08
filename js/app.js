// js/app.js
// Main application JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const closeSidebar = document.getElementById('closeSidebar');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            sidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
        });
    }
    
    if (closeSidebar) {
        closeSidebar.addEventListener('click', function() {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });
    }
    
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function() {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });
    }
    
    // Handle dropdown menus
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('a');
        
        trigger.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a, .sidebar-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === '')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Handle FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentNode;
            const answer = question.nextElementSibling;
            
            // Close other open items
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherItem = otherQuestion.parentNode;
                    const otherAnswer = otherQuestion.nextElementSibling;
                    
                    otherItem.classList.remove('active');
                    otherAnswer.style.maxHeight = null;
                    otherQuestion.querySelector('i').classList.remove('fa-chevron-up');
                    otherQuestion.querySelector('i').classList.add('fa-chevron-down');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                question.querySelector('i').classList.remove('fa-chevron-down');
                question.querySelector('i').classList.add('fa-chevron-up');
            } else {
                answer.style.maxHeight = null;
                question.querySelector('i').classList.remove('fa-chevron-up');
                question.querySelector('i').classList.add('fa-chevron-down');
            }
        });
    });
});
