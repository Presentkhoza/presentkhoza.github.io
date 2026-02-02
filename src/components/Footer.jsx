import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && !subscribed) {
      // In a real app, you'd send this to your backend/newsletter service
      console.log('Subscribed:', email);
      setSubscribed(true);
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const mySkills = [
    { label: "React & TypeScript", href: "#skills" },
    { label: "Node.js & Express", href: "#skills" },
    { label: "State Management", href: "#skills" },
    { label: "RESTful APIs", href: "#skills" },
    { label: "UI/UX Implementation", href: "#skills" },
    { label: "Testing & Debugging", href: "#skills" }
  ];

  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              <FaReact className="react-icon" />
              <span>P. Khoza</span>
            </Link>
            <p className="footer-description">
              Senior React Developer building exceptional digital experiences with modern web technologies.
            </p>
            <div className="footer-social">
              <a href="https://github.com/Presentkhoza" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/present-khoza-66b7281ba/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="mailto:present.khoza@beyondvitiligo.org" aria-label="Email">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Quick Links</h3>
            <div className="footer-links">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index} 
                  to={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  <span className="link-icon">→</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="footer-col">
            <h3>My Skills</h3>
            <div className="footer-links">
              {mySkills.map((skill, index) => (
                <Link 
                  key={index} 
                  to={skill.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(skill.href);
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  <span className="link-icon">→</span>
                  {skill.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Newsletter</h3>
            <p>Subscribe to get updates on my latest projects and articles.</p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder={subscribed ? "Subscribed! 🎉" : "Your email address"} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={subscribed}
                aria-label="Email address for newsletter"
              />
              <motion.button 
                type="submit" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={subscribed}
                aria-disabled={subscribed}
              >
                {subscribed ? '✓ Subscribed' : <><FiSend size={18} /> Subscribe</>}
              </motion.button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Present Khoza. All rights reserved. | 
            Built with ❤️ using React & TypeScript
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;