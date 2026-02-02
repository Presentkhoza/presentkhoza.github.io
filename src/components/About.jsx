import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiUsers, FiSmile } from 'react-icons/fi';

const About = () => {
  const stats = [
    { number: '2+', label: 'Years Experience', icon: <FiAward /> },
    { number: '15+', label: 'Projects Completed', icon: <FiCheckCircle /> },
    { number: '8+', label: 'Happy Clients', icon: <FiUsers /> },
    { number: '4.9/5', label: 'Client Satisfaction', icon: <FiSmile /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      className="section" 
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>My journey into software development and what drives me</p>
        </div>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            variants={itemVariants}
          >
            <p className="about-description">
              Hello! I'm Present Khoza, a passionate full-stack developer with over 2 years of experience building robust web applications. My expertise lies in creating complex CRM systems with React, TypeScript, and modern state management solutions.
            </p>
            <p className="about-description">
              I'm deeply committed to writing clean, maintainable code and creating intuitive user experiences. My background in ICT application development combined with hands-on experience in real-world projects has shaped my approach to solving complex problems with elegant technical solutions.
            </p>
            <p className="about-description">
              When I'm not coding, I enjoy contributing to open-source projects, learning new technologies, and mentoring aspiring developers. I believe in continuous learning and staying at the forefront of web development trends.
            </p>
            
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-card"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="stat-icon">
                    {React.cloneElement(stat.icon, { size: 32 })}
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="about-image"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="image-container">
              <img src="/assets/images/about.jpg" alt="Present Khoza working on code" />
              <div className="image-badge">
                <FiAward size={24} />
                <span>Code with Passion</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;