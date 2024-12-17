import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Code, Laptop, Award, Users, Calendar, MapPin } from 'lucide-react';
import Dialog from './common/Dialog';

interface Experience {
  id: number;
  year: string;
  company: string;
  position: string;
  description: string;
  icon: any;
  location: string;
  team: string;
  achievements: string[];
  technologies: string[];
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    year: 'Nov 2024 - Present',
    company: 'Cognizant Technology Solutions',
    position: 'Senior Associate',
    description: 'Developed and Led ReactJs frontend web application for Banking Product',
    icon: Briefcase,
    location: 'Chennai, IN',
    team: '5 developers, 1 designer, 1 product manager',
    achievements: [
      'Increased application performance by 40%',
      'Reduced deployment time by 60%',
      'Implemented automated testing pipeline',
      'Mentored 3 junior developers'
    ],
    technologies: [
      'React', 'TypeScript', 'Microfrontends', 'Redux',
      'Redux Toolkit', 'Material UI'
    ],
    responsibilities: [
      'Lead development of core platform features',
      'Architect scalable solutions',
      'Code review and technical guidance',
      'Sprint planning and technical documentation'
    ]
  },
  {
    id: 2,
    year: 'June 2022 - September 2024',
    company: 'Tata Consultancy Services Ltd',
    position: 'IT Analyst (Senior UI Developer)',
    description: 'Developed and Led ReactJs frontend web application for telecom product',
    icon: Code,
    location: 'Chennai, IN',
    team: '3 developers, 1 designer',
    achievements: [
      'Successfully reduced development time by 30% through the implementation of config-driven reusable components.',
      'Minimized application vulnerabilities by 90% through regular scanning and proactive issue resolution.',
      'Enhanced team productivity and code quality by mentoring junior developers and promoting best practices.',
      'co-ordinated with cross-functional teams to deliver external vendor portal in a timely manner.',
      'Enhanced team productivity and code quality by mentoring junior developers and promoting best practices.',
      'Refactored existing legacy codebases to improve maintainability and align with modern coding standards during the development of new features.'
    ],
    technologies: [
      'React', 'Express.js', 'Oracle SQL',
      'Jenkins', 'JTL'
    ],
    responsibilities: [
      'Frontend development',
      'Team managment and Agile task management',
      'Performance optimization',
      'Bug fixing and maintenance',
      'UI/UX implementation'
    ]
  },
  {
    id: 3,
    year: 'April 2020 - June 2022',
    company: 'HTC Global Services',
    position: 'Senior UI Developer',
    description: 'Worked on frontend development using React and UI Library Antd',
    icon: Laptop,
    location: 'Chennai, IN',
    team: '8 developers',
    achievements: [
      'Created dynamic components for entire pages to perform CRUD operations for similar screens.',
      'Led and managed a team of 6 developers, delivering tasks effectively and with high accuracy.',
      'Enhanced application performance using techniques like lazy loading, component splitting, data caching, and reusable common methods, achieving significant performance gains.',
      'Implemented React Router with database-driven routing to dynamically render allowed pages based on the logged-in user’s role, providing flexibility for on-the-fly page creation and route modifications.'
    ],
    technologies: [
      'React', 'Antd UI Library', 'React Recoil', 'React Router'
    ],
    responsibilities: [
      'Frontend development',
      'UI/UX implementation',
      'Component development',
      'Bug fixing and maintenance',
      'Team managment and Requirements gathering'
    ]
  },
  {
    id: 4,
    year: 'August 2016 - April 2020',
    company: 'HTC Global Services',
    position: 'Software Engineer',
    description: 'Developed and maintained ecommerce web applications using DNN(C#) and MSSQL',
    icon: Briefcase,
    location: 'Chennai, IN',
    team: '4 developers, 1 designer, 1 product manager',
    achievements: [
      'Engineered and optimized SQL Jobs to streamline backend processes, ensuring data consistency and system reliability',
      'Developed and optimized SQL Indexes and Views to enhance query performance, reducing execution times and improving database efficiency'
    ],
    technologies: [
      'C#', 'DotNetNuke', 'MSSQL', 'Javascript', 'Jenkins', 'Jmeter'
    ],
    responsibilities: [
      'Frontend development using C# and DotNetNuke',
      'Backend development using C# and MSSQL',
      'Building complex ETL pipelines using SSIS'
    ]
  }
];

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="timeline" id="experience" ref={timelineRef}>
      <h2>Experience</h2>
      {experiences.map((exp) => (
        <div key={exp.id} className="timeline-item">
          <div className="content" onClick={() => setSelectedExperience(exp)}>
            <div className="content__icon">
              <exp.icon size={24} />
            </div>
            <h3>{exp.position}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.year}</p>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}

      <Dialog
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        title={selectedExperience?.position || ''}
      >
        {selectedExperience && (
          <div className="experience-details">
            <div className="experience-details__header">
              <h4>{selectedExperience.company}</h4>
              <p className="experience-meta">
                <span><Calendar size={16} /> {selectedExperience.year}</span>
                <span><MapPin size={16} /> {selectedExperience.location}</span>
                <span><Users size={16} /> {selectedExperience.team}</span>
              </p>
            </div>

            <div className="experience-details__section">
              <h4>Key Achievements</h4>
              <ul className="achievement-list">
                {selectedExperience.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div className="experience-details__section">
              <h4>Core Responsibilities</h4>
              <ul className="responsibilities-list">
                {selectedExperience.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div className="experience-details__section">
              <h4>Technologies Used</h4>
              <div className="tech-tags">
                {selectedExperience.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    <Code size={14} />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
};

export default Timeline;