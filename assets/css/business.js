/* assets/css/business.css */
.business-hero {
    background-size: cover;
    background-position: center;
    color: #fff;
    padding: 100px 0 80px;
    position: relative;
}

.business-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
}

.agriculture-hero {
    background-image: url('../images/business/agriculture-hero.jpg');
}

.grain-processing-hero {
    background-image: url('../images/business/grain-processing-hero.jpg');
}

.ict-hero {
    background-image: url('../images/business/ict-hero.jpg');
}

.contract-hero {
    background-image: url('../images/business/contract-hero.jpg');
}

.merchandise-hero {
    background-image: url('../images/business/merchandise-hero.jpg');
}

.business-hero .container {
    position: relative;
    z-index: 1;
}

.breadcrumb {
    margin-bottom: 30px;
    font-size: 0.9rem;
}

.breadcrumb a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: var(--transition);
}

.breadcrumb a:hover {
    color: var(--secondary-color);
}

.breadcrumb span {
    color: var(--secondary-color);
    font-weight: 500;
}

.business-hero h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    color: #fff;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
    font-size: 1.4rem;
    max-width: 700px;
    margin-bottom: 0;
    opacity: 0.9;
    font-weight: 300;
}

.business-overview {
    padding: 100px 0;
    background-color: #fff;
}

.overview-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.overview-text h2 {
    color: var(--primary-color);
    font-size: 2.5rem;
    margin-bottom: 25px;
}

.overview-text p {
    color: var(--gray-color);
    margin-bottom: 25px;
    font-size: 1.05rem;
    line-height: 1.7;
}

.key-stats {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    flex-wrap: wrap;
    gap: 20px;
}

.key-stat {
    text-align: center;
    flex: 1;
    min-width: 120px;
    padding: 20px;
    background-color: var(--light-color);
    border-radius: var(--border-radius);
    transition: var(--transition);
}

.key-stat:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
}

.key-stat h3 {
    font-size: 2.8rem;
    color: var(--primary-color);
    margin-bottom: 5px;
    line-height: 1;
}

.key-stat p {
    margin: 0;
    font-size: 0.9rem;
    color: var(--gray-color);
    font-weight: 500;
}

.overview-image {
    position: relative;
}

.overview-image img {
    width: 100%;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-lg);
    transition: var(--transition);
}

.overview-image:hover img {
    transform: scale(1.02);
}

.services-details {
    padding: 100px 0;
    background-color: var(--light-color);
}

.services-details h2 {
    text-align: center;
    color: var(--primary-color);
    font-size: 2.5rem;
    margin-bottom: 60px;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
}

.service-detail {
    background-color: #fff;
    padding: 40px 35px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    transition: var(--transition);
    text-align: center;
    height: 100%;
}

.service-detail:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.service-detail .service-icon {
    width: 80px;
    height: 80px;
    background-color: rgba(44, 85, 48, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 25px;
    transition: var(--transition);
}

.service-detail:hover .service-icon {
    background-color: var(--primary-color);
}

.service-detail .service-icon i {
    font-size: 2.2rem;
    color: var(--primary-color);
    transition: var(--transition);
}

.service-detail:hover .service-icon i {
    color: #fff;
}

.service-detail h3 {
    margin-bottom: 20px;
    color: var(--dark-color);
    font-size: 1.5rem;
}

.service-detail p {
    color: var(--gray-color);
    line-height: 1.7;
    margin: 0;
}

.business-cta {
    background-color: var(--accent-color);
}

.business-cta h2 {
    color: #fff;
}

.business-cta p {
    color: rgba(255, 255, 255, 0.9);
}

.process-section {
    padding: 100px 0;
    background-color: #fff;
}

.process-section h2 {
    text-align: center;
    color: var(--primary-color);
    font-size: 2.5rem;
    margin-bottom: 60px;
}

.process-steps {
    display: flex;
    justify-content: space-between;
    position: relative;
    max-width: 900px;
    margin: 0 auto;
}

.process-steps::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 50px;
    right: 50px;
    height: 2px;
    background-color: var(--light-gray);
    z-index: 0;
}

.process-step {
    text-align: center;
    position: relative;
    z-index: 1;
    flex: 1;
    padding: 0 15px;
}

.step-number {
    width: 80px;
    height: 80px;
    background-color: var(--primary-color);
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 25px;
    font-size: 1.8rem;
    font-weight: 700;
    box-shadow: 0 5px 15px rgba(44, 85, 48, 0.3);
}

.process-step h3 {
    color: var(--dark-color);
    font-size: 1.3rem;
    margin-bottom: 15px;
}

.process-step p {
    color: var(--gray-color);
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
}

.case-studies {
    padding: 100px 0;
    background-color: var(--light-color);
}

.case-studies h2 {
    text-align: center;
    color: var(--primary-color);
    font-size: 2.5rem;
    margin-bottom: 60px;
}

.case-study-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
}

.case-study {
    background-color: #fff;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.case-study:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.case-study-image {
    height: 200px;
    overflow: hidden;
}

.case-study-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.case-study:hover .case-study-image img {
    transform: scale(1.05);
}

.case-study-content {
    padding: 30px;
}

.case-study h3 {
    color: var(--primary-color);
    font-size: 1.4rem;
    margin-bottom: 15px;
}

.case-study p {
    color: var(--gray-color);
    line-height: 1.6;
    margin-bottom: 20px;
}

.case-study-link {
    display: inline-flex;
    align-items: center;
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    transition: var(--transition);
}

.case-study-link i {
    margin-left: 8px;
    transition: var(--transition);
    font-size: 0.9rem;
}

.case-study-link:hover {
    color: var(--accent-color);
}

.case-study-link:hover i {
    transform: translateX(5px);
}

/* Responsive for Business Pages */
@media (max-width: 1200px) {
    .business-hero h1 {
        font-size: 3rem;
    }
    
    .hero-subtitle {
        font-size: 1.3rem;
    }
    
    .overview-content {
        gap: 40px;
    }
}

@media (max-width: 992px) {
    .business-hero h1 {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.2rem;
    }
    
    .overview-content {
        grid-template-columns: 1fr;
        gap: 50px;
    }
    
    .overview-image {
        order: -1;
    }
    
    .services-grid {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    
    .process-steps {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
    
    .process-steps::before {
        display: none;
    }
    
    .process-step {
        max-width: 400px;
    }
}

@media (max-width: 768px) {
    .business-hero {
        padding: 80px 0 60px;
    }
    
    .business-hero h1 {
        font-size: 2.2rem;
    }
    
    .hero-subtitle {
        font-size: 1.1rem;
    }
    
    .business-overview, .services-details, .process-section, .case-studies {
        padding: 70px 0;
    }
    
    .overview-text h2, .services-details h2, .process-section h2, .case-studies h2 {
        font-size: 2rem;
        margin-bottom: 40px;
    }
    
    .key-stats {
        justify-content: center;
    }
    
    .key-stat {
        min-width: 150px;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }
    
    .service-detail {
        padding: 30px 25px;
    }
    
    .case-study-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }
}

@media (max-width: 576px) {
    .business-hero h1 {
        font-size: 1.8rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }
    
    .breadcrumb {
        font-size: 0.8rem;
    }
    
    .overview-text h2, .services-details h2, .process-section h2, .case-studies h2 {
        font-size: 1.8rem;
    }
    
    .key-stat {
        min-width: 120px;
        padding: 15px;
    }
    
    .key-stat h3 {
        font-size: 2.2rem;
    }
}
