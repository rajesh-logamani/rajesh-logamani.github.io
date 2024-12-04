import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Calendar, Users, BarChart } from 'lucide-react';
import Dialog from './common/Dialog';

interface ProjectDetails {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  image: string;
  challenges: string[];
  role: string;
  team: string;
  duration: string;
  impact: string[];
}

const projects: ProjectDetails[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    challenges: [
      'Implementing real-time inventory management',
      'Optimizing performance for large product catalogs',
      'Integrating multiple payment gateways'
    ],
    role: 'Lead Developer',
    team: '4 developers, 1 designer, 1 product manager',
    duration: '6 months',
    impact: [
      '50% increase in conversion rate',
      '30% improvement in page load time',
      'Successfully processed 10,000+ orders'
    ]
  },
  {
    title: 'Task Management System',
    description: 'Real-time task management application with drag-and-drop functionality',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    challenges: [
      'Implementing real-time updates across multiple users',
      'Complex drag-and-drop interactions',
      'Offline support and data synchronization'
    ],
    role: 'Full Stack Developer',
    team: '3 developers, 1 designer',
    duration: '4 months',
    impact: [
      'Improved team productivity by 40%',
      'Reduced task completion time by 25%',
      'Successfully onboarded 50+ teams'
    ]
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics visualization',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'WebSocket'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    challenges: [
      'Processing and visualizing large datasets',
      'Real-time data updates',
      'Complex data aggregation and filtering'
    ],
    role: 'Frontend Developer',
    team: '2 developers, 1 data scientist',
    duration: '3 months',
    impact: [
      'Reduced reporting time by 60%',
      'Increased data accuracy by 35%',
      'Implemented 20+ custom visualization components'
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2>Featured Projects</h2>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-card__image">
                <img src={project.image} alt={project.title} />
                <div className="project-card__overlay">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                  >
                    <Github />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                  >
                    <ExternalLink />
                  </a>
                </div>
              </div>
              <div className="project-card__content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card__technologies">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="tech-tag">
                      <Code2 size={14} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="project-details">
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="project-details__image"
            />
            
            <div className="project-details__section">
              <h4>Overview</h4>
              <p>{selectedProject.description}</p>
            </div>

            <div className="project-details__meta">
              <div className="meta-item">
                <Calendar size={20} />
                <span>{selectedProject.duration}</span>
              </div>
              <div className="meta-item">
                <Users size={20} />
                <span>{selectedProject.team}</span>
              </div>
              <div className="meta-item">
                <BarChart size={20} />
                <span>{selectedProject.role}</span>
              </div>
            </div>

            <div className="project-details__section">
              <h4>Technologies Used</h4>
              <div className="tech-tags">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    <Code2 size={14} />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-details__section">
              <h4>Challenges & Solutions</h4>
              <ul className="challenges-list">
                {selectedProject.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>

            <div className="project-details__section">
              <h4>Impact & Results</h4>
              <ul className="impact-list">
                {selectedProject.impact.map((impact, index) => (
                  <li key={index}>{impact}</li>
                ))}
              </ul>
            </div>

            <div className="project-details__links">
              <a 
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <Github size={20} />
                View Source
              </a>
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
};

export default Projects;