// js/auth.js
// Authentication JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Login form handling
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;
            
            // Basic validation
            if (!email || !password) {
                showAuthMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showAuthMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate authentication
            showAuthMessage('Authenticating...', 'info');
            
            // In a real application, this would be an API call
            setTimeout(() => {
                // For demo purposes, accept any email/password
                // In production, this would validate against a backend
                
                // Determine which dashboard to redirect to based on email
                let redirectUrl = 'dashboard/client.html';
                
                if (email.includes('investor')) {
                    redirectUrl = 'dashboard/investor.html';
                } else if (email.includes('admin')) {
                    redirectUrl = 'dashboard/admin.html';
                }
                
                // Store auth state in localStorage (for demo purposes)
                localStorage.setItem('taagc_auth', 'true');
                localStorage.setItem('taagc_user_email', email);
                localStorage.setItem('taagc_user_type', getAccountTypeFromEmail(email));
                
                showAuthMessage('Login successful! Redirecting...', 'success');
                
                setTimeout(() => {
                    window.location.href = redirectUrl;
                }, 1000);
            }, 1500);
        });
    }
    
    // Signup form handling
    const signupForm = document.getElementById('signupForm');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const accountType = document.getElementById('accountType').value;
            const businessInterest = document.getElementById('businessInterest').value;
            const terms = document.getElementById('terms').checked;
            
            // Validation
            if (!firstName || !lastName || !email || !phone || !password || !confirmPassword || !accountType || !businessInterest) {
                showAuthMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showAuthMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            if (password !== confirmPassword) {
                showAuthMessage('Passwords do not match.', 'error');
                return;
            }
            
            if (password.length < 8) {
                showAuthMessage('Password must be at least 8 characters.', 'error');
                return;
            }
            
            if (!terms) {
                showAuthMessage('You must agree to the terms and conditions.', 'error');
                return;
            }
            
            // Simulate signup process
            showAuthMessage('Creating your account...', 'info');
            
            setTimeout(() => {
                // Store user data in localStorage (for demo purposes)
                const userData = {
                    firstName,
                    lastName,
                    email,
                    phone,
                    accountType,
                    businessInterest,
                    joined: new Date().toISOString()
                };
                
                localStorage.setItem('taagc_user_data', JSON.stringify(userData));
                localStorage.setItem('taagc_auth', 'true');
                localStorage.setItem('taagc_user_email', email);
                localStorage.setItem('taagc_user_type', accountType);
                
                showAuthMessage('Account created successfully! Redirecting to dashboard...', 'success');
                
                setTimeout(() => {
                    // Redirect based on account type
                    let redirectUrl = 'dashboard/client.html';
                    
                    if (accountType === 'investor') {
                        redirectUrl = 'dashboard/investor.html';
                    } else if (accountType === 'partner' || accountType === 'supplier') {
                        redirectUrl = 'dashboard/client.html';
                    }
                    
                    window.location.href = redirectUrl;
                }, 1500);
            }, 2000);
        });
    }
    
    // Helper functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showAuthMessage(message, type) {
        // Remove any existing message
        const existingMessage = document.querySelector('.auth-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `auth-message auth-message-${type}`;
        messageDiv.textContent = message;
        
        // Add styles
        messageDiv.style.padding = '12px 20px';
        messageDiv.style.borderRadius = 'var(--border-radius)';
        messageDiv.style.marginBottom = '20px';
        messageDiv.style.fontWeight = '500';
        
        if (type === 'error') {
            messageDiv.style.backgroundColor = 'rgba(220, 53, 69, 0.1)';
            messageDiv.style.border = '1px solid var(--danger-color)';
            messageDiv.style.color = 'var(--danger-color)';
        } else if (type === 'success') {
            messageDiv.style.backgroundColor = 'rgba(40, 167, 69, 0.1)';
            messageDiv.style.border = '1px solid var(--success-color)';
            messageDiv.style.color = 'var(--success-color)';
        } else {
            messageDiv.style.backgroundColor = 'rgba(58, 124, 165, 0.1)';
            messageDiv.style.border = '1px solid var(--accent-color)';
            messageDiv.style.color = 'var(--accent-color)';
        }
        
        // Insert message at the top of the form
        const authCard = document.querySelector('.auth-card');
        const authHeader = document.querySelector('.auth-header');
        
        if (authCard && authHeader) {
            authCard.insertBefore(messageDiv, authHeader.nextSibling);
        }
    }
    
    function getAccountTypeFromEmail(email) {
        if (email.includes('investor')) return 'investor';
        if (email.includes('admin')) return 'admin';
        return 'client';
    }
});
