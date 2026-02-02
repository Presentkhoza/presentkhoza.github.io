import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 25 }}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={toggleMobileMenu}>
          <FaReact className="react-icon" />
          <span>P. Khoza</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="nav-menu">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => {
                const element = document.getElementById(item.id);
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="nav-buttons">
          <a href="/assets/docs/Present-Khoza-Resume.pdf" download className="btn btn-secondary">
            <BsFileEarmarkPdf /> Resume
          </a>
          <button 
            className="nav-toggle" 
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
        
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMobileMenu}
          />
        )}
        
        {/* Mobile Menu */}
        <motion.div 
          className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}
          initial={{ x: '100%' }}
          animate={{ x: mobileMenuOpen ? 0 : '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          <div className="mobile-menu-header">
            <Link to="/" className="nav-logo" onClick={toggleMobileMenu}>
              <FaReact className="react-icon" />
              <span>Present Khoza</span>
            </Link>
            <button 
              className="nav-toggle close-btn" 
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <FiX size={28} />
            </button>
          </div>
          
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={`#${item.id}`}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => {
                  toggleMobileMenu();
                  const element = document.getElementById(item.id);
                  if (element) {
                    setTimeout(() => {
                      window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }, 300);
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="mobile-menu-footer">
              <a href="/assets/docs/Present-Khoza-Resume.pdf" download className="btn btn-primary btn-block">
                <BsFileEarmarkPdf /> Download Resume
              </a>
              
              <div className="mobile-social-links">
                <a href="https://github.com/Presentkhoza" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaReact className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/present-khoza-66b7281ba/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaReact className="social-icon" />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaReact className="social-icon" />
                </a>
                <a href="mailto:present.khoza@beyondvitiligo.org" aria-label="Email">
                  <FaReact className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;