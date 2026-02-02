import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(
      'service_bfos50d', 
      'template_lff2ezq', 
      formRef.current,
      'sGbxw-6r_ojYbTBVB' // Replace with your actual EmailJS user ID
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setSubmitStatus({ success: true, message: "✅ Message sent successfully! I'll get back to you soon." });
      setFormState({ name: '', email: '', subject: '', message: '' });
      formRef.current.reset();
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      setSubmitStatus({ success: false, message: "❌ Failed to send message. Please try again or email me directly at present.khoza@beyondvitiligo.org" });
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

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

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: "Email",
      content: "present.khoza@beyondvitiligo.org",
      link: "mailto:present.khoza@beyondvitiligo.org"
    },
    {
      icon: <FiPhone size={24} />,
      title: "Phone",
      content: "+27 76 624 3209",
      link: "tel:+27766243209"
    },
    {
      icon: <FiMapPin size={24} />,
      title: "Location",
      content: "Johannesburg, South Africa"
    },
    {
      icon: <FiClock size={24} />,
      title: "Availability",
      content: "Open to freelance projects and full-time opportunities"
    }
  ];

  return (
    <motion.section 
      className="section" 
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Have a project in mind or just want to say hi?</p>
        </div>
        
        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            variants={itemVariants}
          >
            {contactInfo.map((item, index) => (
              <motion.div 
                key={index}
                className="contact-item"
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {item.icon}
                <div className="contact-text">
                  <h3>{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.content}
                    </a>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
            
            <motion.div 
              className="contact-resume"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <BsFileEarmarkPdf size={32} />
              <div>
                <h3>Resume</h3>
                <a href="/assets/docs/Present-Khoza-Resume.pdf" download>
                  Download my resume
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            variants={itemVariants}
          >
            {submitStatus && (
              <motion.div 
                className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {submitStatus.message}
              </motion.div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formState.name}
                  onChange={handleChange}
                  required 
                  placeholder="Your name"
                  aria-required="true"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formState.email}
                  onChange={handleChange}
                  required 
                  placeholder="Your email"
                  aria-required="true"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formState.subject}
                  onChange={handleChange}
                  required 
                  placeholder="How can I help?"
                  aria-required="true"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formState.message}
                  onChange={handleChange}
                  required 
                  placeholder="Tell me about your project..."
                  aria-required="true"
                ></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;