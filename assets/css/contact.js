/* assets/css/contact.css */
.contact-hero {
    background: linear-gradient(rgba(44, 85, 48, 0.9), rgba(44, 85, 48, 0.9)), 
                url('../images/contact/contact-hero.jpg');
    background-size: cover;
    background-position: center;
    color: #fff;
    padding: 100px 0 80px;
    text-align: center;
}

.contact-hero h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #fff;
}

.contact-hero p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    opacity: 0.9;
}

.contact-section {
    padding: 100px 0;
    background-color: var(--light-color);
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: flex-start;
}

.contact-info h2 {
    color: var(--primary-color);
    font-size: 2.2rem;
    margin-bottom: 20px;
}

.contact-info p {
    color: var(--gray-color);
    margin-bottom: 40px;
    line-height: 1.7;
    font-size: 1.05rem;
}

.contact-methods {
    margin-bottom: 50px;
}

.contact-method {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
    padding: 25px;
    background-color: #fff;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.contact-method:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.method-icon {
    width: 60px;
    height: 60px;
    background-color: rgba(44, 85, 48, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    flex-shrink: 0;
}

.method-icon i {
    font-size: 1.5rem;
    color: var(--primary-color);
}

.method-details h3 {
    color: var(--dark-color);
    font-size: 1.3rem;
    margin-bottom: 10px;
}

.method-details p {
    color: var(--gray-color);
    margin: 0;
    line-height: 1.6;
}

.regional-offices {
    margin-top: 60px;
}

.regional-offices h3 {
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-bottom: 25px;
    position: relative;
    padding-bottom: 10px;
}

.regional-offices h3::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: var(--secondary-color);
}

.office-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 25px;
}

.office {
    background-color: #fff;
    padding: 25px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.office:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.office h4 {
    color: var(--primary-color);
    margin-bottom: 15px;
    font-size: 1.2rem;
}

.office p {
    color: var(--gray-color);
    margin: 0;
    line-height: 1.6;
    font-size: 0.95rem;
}

.contact-form-container {
    background-color: #fff;
    padding: 40px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-lg);
}

.contact-form-container h2 {
    color: var(--primary-color);
    font-size: 2rem;
    margin-bottom: 30px;
    text-align: center;
}

.contact-form .form-group {
    margin-bottom: 25px;
}

.contact-form .form-group label {
    display: block;
    margin-bottom: 8px;
    color: var(--dark-color);
    font-weight: 500;
    font-size: 0.95rem;
}

.contact-form .form-group label span {
    color: var(--danger-color);
}

.contact-form .form-group input,
.contact-form .form-group select,
.contact-form .form-group textarea {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid var(--light-gray);
    border-radius: var(--border-radius);
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    transition: var(--transition);
    color: var(--dark-color);
}

.contact-form .form-group input:focus,
.contact-form .form-group select:focus,
.contact-form .form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(44, 85, 48, 0.1);
}

.contact-form .form-group input::placeholder,
.contact-form .form-group textarea::placeholder {
    color: #aaa;
}

.contact-form .form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.contact-form .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.faq-section {
    padding: 100px 0;
    background-color: #fff;
}

.faq-section h2 {
    text-align: center;
    color: var(--primary-color);
    font-size: 2.5rem;
    margin-bottom: 50px;
}

.faq-container {
    max-width: 800px;
    margin: 0 auto;
}

.faq-item {
    margin-bottom: 15px;
    border: 1px solid var(--light-gray);
    border-radius: var(--border-radius);
    overflow: hidden;
    transition: var(--transition);
}

.faq-item.active {
    border-color: var(--primary-color);
    box-shadow: 0 5px 15px rgba(44, 85, 48, 0.1);
}

.faq-question {
    width: 100%;
    padding: 25px 30px;
    background: none;
    border: none;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--dark-color);
    transition: var(--transition);
}

.faq-question:hover {
    background-color: rgba(44, 85, 48, 0.05);
}

.faq-question span {
    flex-grow: 1;
    margin-right: 20px;
}

.faq-question i {
    color: var(--primary-color);
    transition: var(--transition);
    font-size: 0.9rem;
}

.faq-item.active .faq-question i {
    transform: rotate(180deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
}

.faq-item.active .faq-answer {
    max-height: 500px;
}

.faq-answer p {
    padding: 0 30px 25px;
    color: var(--gray-color);
    line-height: 1.7;
    margin: 0;
}

/* Responsive for Contact Page */
@media (max-width: 992px) {
    .contact-content {
        grid-template-columns: 1fr;
        gap: 50px;
    }
    
    .contact-info {
        text-align: center;
    }
    
    .contact-method {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 30px;
    }
    
    .method-icon {
        margin-right: 0;
        margin-bottom: 20px;
    }
    
    .office-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}

@media (max-width: 768px) {
    .contact-hero {
        padding: 80px 0 60px;
    }
    
    .contact-hero h1 {
        font-size: 2.2rem;
    }
    
    .contact-section, .faq-section {
        padding: 70px 0;
    }
    
    .contact-info h2, .contact-form-container h2 {
        font-size: 1.8rem;
    }
    
    .faq-section h2 {
        font-size: 2rem;
        margin-bottom: 40px;
    }
    
    .contact-form-container {
        padding: 30px 25px;
    }
    
    .contact-form .form-row {
        grid-template-columns: 1fr;
        gap: 0;
    }
    
    .contact-form .form-row .form-group:first-child {
        margin-bottom: 25px;
    }
    
    .faq-question {
        padding: 20px 25px;
        font-size: 1rem;
    }
    
    .faq-answer p {
        padding: 0 25px 20px;
    }
}

@media (max-width: 576px) {
    .contact-hero h1 {
        font-size: 1.8rem;
    }
    
    .contact-hero p {
        font-size: 1rem;
    }
    
    .contact-info h2, .contact-form-container h2 {
        font-size: 1.6rem;
    }
    
    .regional-offices h3 {
        font-size: 1.3rem;
    }
    
    .office {
        padding: 20px;
    }
}
