import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowDown, FiMail } from 'react-icons/fi';
import { BiCodeAlt } from 'react-icons/bi';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (typedInstance.current) return;

    typedInstance.current = new Typed(typedRef.current, {
      strings: [
        'Exceptional Digital Experiences',
        'High-Performance Web Applications',
        'Complex CRM Solutions',
        'Intuitive User Interfaces',
        'Scalable Full-Stack Systems'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true
    });

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
        typedInstance.current = null;
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.section 
      className="hero" 
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          variants={itemVariants}
        >
          <motion.div 
            className="hero-badge"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <BiCodeAlt />
            <span>Senior React Developer</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            Building <span ref={typedRef} className="typed-element"></span> with React & Modern Web Technologies
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            variants={itemVariants}
          >
            I craft high-performance, user-centric web applications with React, TypeScript, and Node.js. 
            Specializing in complex CRM systems with advanced filtering, sorting, and state management solutions.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            variants={itemVariants}
          >
            <Link to="#projects" className="btn btn-primary">
              <BiCodeAlt /> View Projects
            </Link>
            <Link to="#contact" className="btn btn-secondary">
              <FiMail /> Get in Touch
            </Link>
          </motion.div>
          
          <motion.div 
            className="hero-social"
            variants={itemVariants}
          >
            <a href="https://github.com/Presentkhoza" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/present-khoza-66b7281ba/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
            <a href="mailto:present.khoza@beyondvitiligo.org" className="social-link" aria-label="Email">
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="image-container">
            <img src="/assets/images/pp.jpg" alt="Present Khoza - React Developer" />
            <div className="image-overlay">
              <div className="tech-stack">
                <span>React</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>Redux</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <Link to="#about" className="scroll-down" aria-label="Scroll to about section">
        <FiArrowDown size={24} />
        <span>Scroll Down</span>
      </Link>
    </motion.section>
  );
};

export default Hero;