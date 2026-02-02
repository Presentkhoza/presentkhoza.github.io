import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { BiLinkExternal } from 'react-icons/bi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Enterprise CRM System",
      description: "A comprehensive CRM solution with advanced filtering, sorting, and pagination features. Built with React, TypeScript, and Redux Toolkit for state management. Includes real-time data synchronization and role-based access control.",
      tags: ["React", "TypeScript", "Redux Toolkit", "Node.js"],
      demoLink: "#",
      codeLink: "https://github.com/Presentkhoza/crm-project",
      codePreview: `const CRMApp = () => {
  const { data, loading } = useFetch('/api/clients');
  const [filters, setFilters] = useState({ search: '', status: 'all' });
  
  // Advanced filtering & sorting implementation
  return (
    <Dashboard>
      <FilterBar filters={filters} onFilterChange={setFilters} />
      <ClientTable data={filteredData} sortConfig={sortConfig} />
    </Dashboard>
  );
};`
    },
    {
      id: 2,
      title: "Modern E-commerce Platform",
      description: "A full-featured e-commerce solution with product catalog, shopping cart, payment processing, and user authentication. Features responsive design, real-time inventory updates, and admin dashboard for order management.",
      tags: ["React", "Context API", "Stripe API", "MongoDB"],
      demoLink: "#",
      codeLink: "https://github.com/Presentkhoza/ecommerce-project",
      codePreview: `function ProductCatalog() {
  const { products, categories } = useProducts();
  const [cart, dispatch] = useCart();
  
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    showNotification('Added to cart!');
  };
  
  return (
    <CatalogGrid>
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAdd={addToCart} />
      ))}
    </CatalogGrid>
  );
}`
    },
    {
      id: 3,
      title: "Drag & Drop Task Manager",
      description: "An intuitive task management application with drag-and-drop Kanban board interface. Features real-time collaboration, user authentication, task prioritization, and deadline tracking. Built with React DnD and Firebase backend.",
      tags: ["React DnD", "Firebase", "JWT Auth", "Responsive UI"],
      demoLink: "#",
      codeLink: "https://github.com/Presentkhoza/task-manager",
      codePreview: `const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [draggedTask, setDraggedTask] = useState(null);
  
  const handleDragStart = (e, task) => {
    setDraggedTask(task);
    e.dataTransfer.setData('text/plain', task.id);
  };
  
  const handleDrop = (e, status) => {
    const taskId = e.dataTransfer.getData('text/plain');
    const updatedTasks = tasks.map(task => 
      task.id === taskId ? { ...task, status } : task
    );
    setTasks(updatedTasks);
  };
  
  return (
    <KanbanBoard onDrop={handleDrop}>
      {columns.map(column => (
        <Column key={column.status} status={column.status}>
          {tasks.filter(t => t.status === column.status).map(task => (
            <TaskCard key={task.id} task={task} onDragStart={handleDragStart} />
          ))}
        </Column>
      ))}
    </KanbanBoard>
  );
};`
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.section 
      className="section" 
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>
          <p>Some of my recent work showcasing React expertise</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -15, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="project-image">
                <div className="project-preview">
                  <div className="code-window">
                    <div className="window-header">
                      <div className="window-buttons">
                        <span className="btn-red"></span>
                        <span className="btn-yellow"></span>
                        <span className="btn-green"></span>
                      </div>
                      <div className="window-title">{project.title}</div>
                    </div>
                    <div className="code-content">
                      {project.codePreview.split('\n').map((line, i) => (
                        <div key={i} className="code-line">{line}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <BiLinkExternal /> Live Demo
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiGithub /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;