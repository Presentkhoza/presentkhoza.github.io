import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiBriefcase, FiGraduationCap } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      period: "2023 - Present",
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      description: "Lead development of enterprise CRM solutions using React, TypeScript, and Redux Toolkit. Implemented advanced filtering, sorting, and pagination features that improved user efficiency by 40%. Mentored junior developers and established coding standards.",
      icon: <FiBriefcase />
    },
    {
      period: "2021 - 2023",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      description: "Developed and maintained multiple client-facing web applications using React, Node.js, and MongoDB. Created reusable component libraries that reduced development time by 30%. Implemented CI/CD pipelines and automated testing workflows.",
      icon: <FiBriefcase />
    },
    {
      period: "2019 - 2021",
      title: "Junior Web Developer",
      company: "Startup Hub",
      description: "Built responsive websites and web applications for startup clients. Gained experience with React, JavaScript, and RESTful APIs. Collaborated with designers to implement pixel-perfect UIs and optimize performance.",
      icon: <FiBriefcase />
    },
    {
      period: "2019",
      title: "ICT Diploma",
      company: "University of Mpumalanga",
      description: "Completed Diploma in Information and Communication Technology with specialization in Application Development. Graduated with distinction in software development projects.",
      icon: <FiGraduationCap />
    }
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
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <motion.section 
      className="section experience-section" 
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container">
        <div className="section-title">
          <h2>Work Experience</h2>
          <p>My professional journey and key achievements</p>
        </div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="timeline-content">
                <div className="timeline-date">
                  <FiCalendar />
                  <span>{exp.period}</span>
                </div>
                <h3 className="timeline-title">{exp.title}</h3>
                <span className="timeline-company">{exp.company}</span>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;