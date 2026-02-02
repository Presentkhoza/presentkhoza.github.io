import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaPhp, FaDocker, FaAws, 
  FaGitAlt, FaJira, FaSlack, FaNpm 
} from 'react-icons/fa';
import { 
  SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, 
  SiBootstrap, SiRedux, SiFigma, SiExpress, SiMongodb, SiPostgresql,
  SiNetlify, SiVercel, SiWebpack, SiJest 
} from 'react-icons/si';
import { BiServer, BiCog, BiData, BiTestTube } from 'react-icons/bi';

const Skills = () => {
  const skillsData = [
    {
      title: 'Frontend Development',
      icon: <FaReact />,
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'JavaScript (ES6+)', icon: <SiJavascript /> },
        { name: 'HTML5', icon: <SiHtml5 /> },
        { name: 'CSS3/SASS', icon: <SiCss3 /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
        { name: 'Redux Toolkit', icon: <SiRedux /> },
        { name: 'Figma', icon: <SiFigma /> }
      ]
    },
    {
      title: 'Backend Development',
      icon: <BiServer />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'PHP', icon: <FaPhp /> },
        { name: 'RESTful APIs', icon: <BiData /> },
        { name: 'Git', icon: <FaGitAlt /> }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <BiCog />,
      skills: [
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Netlify', icon: <SiNetlify /> },
        { name: 'Vercel', icon: <SiVercel /> },
        { name: 'Jira', icon: <FaJira /> },
        { name: 'Slack', icon: <FaSlack /> },
        { name: 'Webpack', icon: <SiWebpack /> },
        { name: 'NPM/Yarn', icon: <FaNpm /> },
        { name: 'Jest/Testing Library', icon: <SiJest /> }
      ]
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.section 
      className="section skills-section" 
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
          <p>Technologies and tools I work with daily</p>
        </div>
        
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3>
                {category.icon}
                <span>{category.title}</span>
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="skill-item"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;