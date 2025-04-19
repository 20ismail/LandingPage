import React, { useState } from 'react';
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Img1 from "../../assets/coach/WhatsApp Image 2025-04-19 à 14.45.48_71e1a274.jpg";
import Img2 from "../../assets/coach/WhatsApp Image 2025-04-19 à 14.45.48_9a561d5f.jpg";
const CoachLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  // Données pour les sections
  const services = [
    { icon: '🚀', title: 'التطوير المهني', description: 'برامج متخصصة لتعزيز مسارك الوظيفي وتطوير المهارات القيادية' },
    { icon: '🧠', title: 'التنمية الشخصية', description: 'جلسات فردية لتعزيز الثقة بالنفس وإدارة الضغوط والتوتر' },
    { icon: '💡', title: 'استشارات الأعمال', description: 'خطط استراتيجية مخصصة لنمو وتطوير مشروعك أو شركتك' }
  ];

  const testimonials = [
    {
      text: "ساعدني المدرب العربي على تغيير حياتي بالكامل. أشعر الآن بالثقة والقدرة على تحقيق أحلامي.",
      name: "محمد أحمد",
      role: "رجل أعمال",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      text: "الجلسات مع المدرب العربي كانت نقطة التحول في مسيرتي المهنية. أنصح الجميع بالاستفادة من خبراته.",
      name: "سارة خالد",
      role: "مديرة تنفيذية",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("message", formData.message);
  
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwRTVIN8-khQETNNXebLXk-RJwp3Jln8SOcufmNfVX5JDqi0Px0SrQWPgsofDSVQV2h/exec", {
        method: "POST",
        body: form,
        mode: "no-cors", // important pour contourner CORS
      });
  
      console.log("✅ Envoi réussi (no-cors, pas de réponse lisible)");
      // Tu peux afficher une alerte ou vider le formulaire ici
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi :", error);
    }
  };
  


  return (
    <div className="app" dir="rtl">
      {/* Styles CSS */}
      <style jsx global>{`
        :root {
          --primary-color: #2C3E50;
          --secondary-color: #E74C3C;
          --accent-color: #3498DB;
          --text-color: #333;
          --light-bg: #F9F9F9;
          --white: #FFFFFF;
          --shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          --transition: all 0.3s ease;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Tajawal', sans-serif;
          color: var(--text-color);
          background-color: var(--light-bg);
          line-height: 1.8;
        }

        .app {
          text-align: right;
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        section {
          padding: 100px 0;
        }

        h1, h2, h3, h4 {
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }

        h1 {
          font-size: 3rem;
          color: var(--primary-color);
        }

        h2 {
          font-size: 2.5rem;
        }

        p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          color: #555;
        }

        a {
          text-decoration: none;
          color: var(--primary-color);
          transition: var(--transition);
        }

        /* Header */
        header {
          background-color: var(--white);
          box-shadow: var(--shadow);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          transition: var(--transition);
        }

        header.scrolled {
          padding: 10px 0;
          background-color: rgba(255, 255, 255, 0.95);
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px 0;
          transition: var(--transition);
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--primary-color);
          display: flex;
          align-items: center;
        }

        .logo span {
          color: var(--secondary-color);
        }

        .nav-links {
          display: flex;
        }

        .nav-links a {
          margin-left: 30px;
          font-weight: 600;
          font-size: 1.1rem;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          right: 0;
          width: 0;
          height: 3px;
          background-color: var(--secondary-color);
          transition: var(--transition);
        }

        .nav-links a:hover::after {
          width: 100%;
          left: 0;
        }

        .hamburger {
          display: none;
          font-size: 1.8rem;
          cursor: pointer;
          color: var(--primary-color);
        }

        /* Hero */
        .hero {
          padding-top: 120px;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center/cover;
          opacity: 0.1;
          z-index: 0;
        }

        .hero-container {
          display: flex;
          align-items: center;
          gap: 50px;
          position: relative;
          z-index: 1;
        }

        .hero-text {
          flex: 1;
        }

        .hero-text h1 {
          font-size: 3.5rem;
          margin-bottom: 20px;
          background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-text p {
          font-size: 1.3rem;
          margin-bottom: 40px;
          max-width: 90%;
        }

        .hero-image {
          flex: 1;
          text-align: center;
          position: relative;
        }

        .hero-image img {
          max-width: 100%;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          transform: perspective(1000px) rotateY(-10deg);
          transition: var(--transition);
          border: 10px solid var(--white);
        }

        .hero-image:hover img {
          transform: perspective(1000px) rotateY(0deg);
        }

        /* Boutons */
        .cta-button, .submit-button {
          display: inline-block;
          background: linear-gradient(45deg, var(--secondary-color), #FF6B6B);
          color: var(--white);
          padding: 15px 35px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          transition: var(--transition);
          border: none;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
          position: relative;
          overflow: hidden;
        }

        .cta-button:hover, .submit-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(231, 76, 60, 0.4);
        }

        .cta-button::before, .submit-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: 0.5s;
        }

        .cta-button:hover::before, .submit-button:hover::before {
          left: 100%;
        }

        .whatsapp-button {
          position: fixed;
          bottom: 30px;
          left: 30px;
          background-color: #25D366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
          box-shadow: 0 5px 20px rgba(37, 211, 102, 0.4);
          z-index: 999;
          transition: var(--transition);
          animation: pulse 2s infinite;
        }

        .whatsapp-button:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.6);
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        /* Titres de section */
        .section-title {
          text-align: center;
          font-size: 2.8rem;
          color: var(--primary-color);
          margin-bottom: 4rem;
          position: relative;
          padding-bottom: 20px;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 50%;
          transform: translateX(50%);
          width: 100px;
          height: 5px;
          background: linear-gradient(to right, var(--secondary-color), var(--accent-color));
          border-radius: 5px;
        }

        /* Services */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .service-card {
          background-color: var(--white);
          padding: 40px 30px;
          border-radius: 15px;
          box-shadow: var(--shadow);
          text-align: center;
          transition: var(--transition);
          border-bottom: 5px solid transparent;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
          border-bottom-color: var(--secondary-color);
        }

        .service-icon {
          font-size: 3.5rem;
          margin-bottom: 25px;
          color: var(--accent-color);
        }

        .service-card h3 {
          color: var(--primary-color);
          margin-bottom: 20px;
          font-size: 1.8rem;
        }

        .service-card p {
          font-size: 1.1rem;
        }

        /* About */
        .about-container {
          display: flex;
          align-items: center;
          gap: 60px;
          background-color: var(--white);
          border-radius: 20px;
          padding: 60px;
          box-shadow: var(--shadow);
          position: relative;
          overflow: hidden;
        }

        .about-container::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(135deg, var(--accent-color), var(--secondary-color));
          z-index: 0;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 100%);
        }

        .about-image {
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .about-image img {
          width: 100%;
          border-radius: 15px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          border: 5px solid var(--white);
        }

        .about-text {
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .about-text h2 {
          color: var(--white);
        }

        .about-text p {
          color: #eee;
        }

        .about-text ul {
          list-style-position: inside;
          margin-bottom: 20px;
          color: #eee;
        }

        .about-text li {
          margin-bottom: 10px;
          position: relative;
          padding-right: 20px;
        }

        .about-text li::before {
          content: '✓';
          color: var(--secondary-color);
          font-weight: bold;
          position: absolute;
          right: 0;
        }

        /* Testimonials */
        .testimonials {
          background: url('https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center/cover;
          position: relative;
          color: white;
        }

        .testimonials::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(44, 62, 80, 0.9);
        }

        .testimonials .section-title {
          color: white;
          position: relative;
        }

        .testimonials .section-title::after {
          background: linear-gradient(to right, var(--secondary-color), white);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          position: relative;
        }

        .testimonial-card {
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 40px 30px;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: var(--transition);
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
          background-color: rgba(255, 255, 255, 0.2);
        }

        .testimonial-card p {
          font-style: italic;
          margin-bottom: 30px;
          font-size: 1.2rem;
          color: white;
          position: relative;
        }

        .testimonial-card p::before,
        .testimonial-card p::after {
          content: '"';
          font-size: 3rem;
          color: rgba(255, 255, 255, 0.3);
          position: absolute;
        }

        .testimonial-card p::before {
          top: -20px;
          right: -10px;
        }

        .testimonial-card p::after {
          bottom: -40px;
          left: -10px;
        }

        .client-info {
          display: flex;
          align-items: center;
        }

        .client-info img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          object-fit: cover;
          margin-left: 20px;
          border: 3px solid var(--secondary-color);
        }

        .client-info h4 {
          margin-bottom: 5px;
          color: white;
          font-size: 1.3rem;
        }

        .client-info p {
          font-style: normal;
          color: #ddd;
          font-size: 1rem;
          margin: 0;
        }

        /* CTA Section */
        .cta-section {
          text-align: center;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          color: var(--white);
          padding: 100px 20px;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }

        .cta-section::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 300px;
          height: 300px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }

        .cta-section h2 {
          color: var(--white);
          margin-bottom: 30px;
          position: relative;
          z-index: 1;
        }

        .cta-section p {
          font-size: 1.3rem;
          max-width: 700px;
          margin: 0 auto 40px;
          color: #eee;
          position: relative;
          z-index: 1;
        }

        /* Contact */
        .contact-form {
          background-color: var(--white);
          border-radius: 20px;
          box-shadow: var(--shadow);
          padding: 60px;
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }

        .contact-form::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 10px;
          background: linear-gradient(to right, var(--secondary-color), var(--accent-color));
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          margin-bottom: 10px;
          font-weight: 600;
          color: var(--primary-color);
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 15px 20px;
          border: 2px solid #ddd;
          border-radius: 10px;
          font-family: 'Tajawal', sans-serif;
          font-size: 1.1rem;
          transition: var(--transition);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--accent-color);
          outline: none;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 150px;
        }

        .submit-button {
          width: 100%;
          padding: 18px;
          font-size: 1.2rem;
          margin-top: 20px;
        }

        /* Footer */
        footer {
          background-color: var(--primary-color);
          color: var(--white);
          padding: 80px 0 30px;
          text-align: center;
          position: relative;
        }

        footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 10px;
          background: linear-gradient(to right, var(--secondary-color), var(--accent-color));
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 50px;
        }

        .footer-logo {
          font-size: 2.2rem;
          font-weight: 900;
          margin-bottom: 30px;
          color: var(--white);
        }

        .footer-logo span {
          color: var(--secondary-color);
        }

        .footer-links {
          margin-bottom: 30px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .footer-links a {
          color: var(--white);
          font-size: 1.1rem;
          font-weight: 500;
          padding: 5px 10px;
          border-radius: 5px;
          transition: var(--transition);
        }

        .footer-links a:hover {
          color: var(--secondary-color);
          background-color: rgba(255, 255, 255, 0.1);
        }

        .social-links {
          display: flex;
          gap: 25px;
          margin-bottom: 40px;
        }

        .social-links a {
          color: var(--white);
          font-size: 1.8rem;
          transition: var(--transition);
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .social-links a:hover {
          transform: translateY(-5px);
          background-color: var(--secondary-color);
        }

        .copyright {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 30px;
          width: 100%;
          color: rgba(255, 255, 255, 0.7);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          h1 {
            font-size: 2.8rem;
          }
          
          h2 {
            font-size: 2.3rem;
          }
        }

        @media (max-width: 992px) {
          .hero-container,
          .about-container {
            flex-direction: column;
          }
          
          .hero-text,
          .about-text {
            text-align: center;
            margin-bottom: 50px;
          }
          
          .hero-text p {
            max-width: 100%;
          }
          
          .about-container::before {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
            width: 100%;
            height: 40%;
            top: auto;
            bottom: 0;
          }
          
          .about-text h2,
          .about-text p,
          .about-text ul {
            color: var(--text-color);
          }
          
          section {
            padding: 80px 0;
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            right: 0;
            background-color: var(--white);
            width: 100%;
            padding: 20px;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          }
          
          .nav-links.active {
            display: flex;
          }
          
          .nav-links a {
            margin: 15px 0;
            color: var(--primary-color);
          }
          
          .hamburger {
            display: block;
          }
          
          .hero {
            padding-top: 100px;
          }
          
          h1 {
            font-size: 2.5rem;
          }
          
          h2 {
            font-size: 2rem;
          }
          
          .section-title {
            font-size: 2.2rem;
          }
          
          .about-container {
            padding: 40px;
          }
          
          .contact-form {
            padding: 40px;
          }
        }

        @media (max-width: 576px) {
          h1 {
            font-size: 2.2rem;
          }
          
          h2 {
            font-size: 1.8rem;
          }
          
          .section-title {
            font-size: 2rem;
            padding-bottom: 15px;
          }
          
          .section-title::after {
            width: 80px;
            height: 4px;
          }
          
          .service-card,
          .testimonial-card {
            padding: 30px 20px;
          }
          
          .about-container,
          .contact-form {
            padding: 30px 20px;
          }
          
          .footer-logo {
            font-size: 1.8rem;
          }
          
          .social-links a {
            width: 45px;
            height: 45px;
            font-size: 1.5rem;
          }
        }
      `}</style>

      {/* WhatsApp Button */}
      <a href="https://wa.me/212612345678" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>

      {/* Header */}
      <header id="header">
        <nav className="container">
          <div className="logo">Ela<span>arabi</span></div>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#services">خدماتي</a>
            <a href="#about">من أنا</a>
            <a href="#testimonials">شهادات العملاء</a>
            <a href="#contact">تواصل معي</a>
          </div>
          
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container hero-container">
            <div className="hero-text">
              <h1>اكتشف قوة شخصيتك مع المدرب العربي</h1>
              <p>برامج تدريبية واستشارات فردية مصممة خصيصاً لمساعدتك على تحقيق أقصى إمكاناتك في الحياة والعمل</p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <a href="#contact" className="cta-button">احجز جلسة الآن</a>
                <a href="#services" className="cta-button" style={{ background: 'var(--primary-color)', boxShadow: '0 5px 15px rgba(44, 62, 80, 0.3)' }}>اكتشف الخدمات</a>
              </div>
            </div>
            <div className="hero-image">
              <img src={Img1} alt="المدرب العربي" />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section">
          <div className="container">
            <h2 className="section-title">خدماتي</h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
  <div className="container about-container">
    <div className="about-image">
      <img src={Img2} alt="المدرب العربي" />
    </div>
    <div className="about-text">
      <h2 className="section-title">من أنا</h2>
      <p>أنا العربي، رائد في مجال التطوير الذاتي والتمكين القيادي، أمتلك شغفًا لا حدود له لمساعدة الأفراد على كسر قيودهم وإطلاق العنان لإمكاناتهم الكامنة.</p>
      <p>على مدى 15 عامًا، قمت بتوجيه أكثر من 500 فرد نحو تحقيق تحولات جذرية في حياتهم الشخصية والمهنية، من خلال منهجية فريدة تجمع بين الحكمة القديمة والعلم الحديث.</p>
      <ul>
        <li>حاصل على دكتوراه في القيادة التحويلية من الجامعة الأمريكية</li>
        <li>مؤسس "أكاديمية التميز الذاتي" الرائدة في العالم العربي</li>
        <li>حاصل على جائزة أفضل مدرب تحفيزي لعام 2022</li>
        <li>مؤلف سلسلة كتب "القيادة من الداخل" الأكثر مبيعًا</li>
        <li>مستشار لعدد من كبرى الشركات في استراتيجيات تنمية الموارد البشرية</li>
      </ul>
    </div>
  </div>
</section>

        {/* Testimonials */}
        <section id="testimonials" className="testimonials section">
          <div className="container">
            <h2 className="section-title">آراء العملاء</h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <p>{testimonial.text}</p>
                  <div className="client-info">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div>
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>هل أنت مستعد لبدء رحلتك نحو التميز؟</h2>
            <p>احجز جلسة استشارية مع المدرب العربي اليوم وابدأ رحلة التحول الشخصي والمهني</p>
            <a href="#contact" className="cta-button">تواصل الآن</a>
          </div>
        </section>

               {/* Contact */}
        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title">تواصل معي</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">الاسم الكامل</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">رقم الهاتف</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">الرسالة</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="أخبرني أكثر عن احتياجاتك وكيف يمكنني مساعدتك"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">إرسال الرسالة</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">Ela<span>arabi</span></div>
            <div className="footer-links">
              <a href="#services">خدماتي</a>
              <a href="#about">من أنا</a>
              <a href="#testimonials">شهادات العملاء</a>
              <a href="#contact">تواصل معي</a>
              <a href="#">سياسة الخصوصية</a>
              <a href="#">الشروط والأحكام</a>
            </div>
            <div className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
          <div className="copyright">
            <p>© {new Date().getFullYear()} جميع الحقوق محفوظة | تصميم وتطوير بواسطة المدرب العربي</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CoachLandingPage;