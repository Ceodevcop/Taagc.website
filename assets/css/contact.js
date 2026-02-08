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

.contact-form .form-group input
