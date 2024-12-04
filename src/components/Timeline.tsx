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
    year: '2023 - Present',
    company: 'Tech Corp',
    position: 'Senior Developer',
    description: 'Led development of enterprise applications using React and Node.js',
    icon: Briefcase,
    location: 'San Francisco, CA',
    team: '4 developers, 1 designer, 1 product manager',
    achievements: [
      'Increased application performance by 40%',
      'Reduced deployment time by 60%',
      'Implemented automated testing pipeline',
      'Mentored 3 junior developers'
    ],
    technologies: [
      'React', 'Node.js', 'TypeScript', 'AWS', 'Docker',
      'MongoDB', 'Redis', 'GraphQL'
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
    year: '2021 - 2023',
    company: 'Digital Solutions Inc',
    position: 'Full Stack Developer',
    description: 'Developed and maintained multiple client projects',
    icon: Code,
    location: 'Austin, TX',
    team: '3 developers, 1 designer',
    achievements: [
      'Delivered 5 major projects on time',
      'Reduced bug reports by 45%',
      'Implemented CI/CD pipeline',
      'Optimized database queries'
    ],
    technologies: [
      'React', 'Express.js', 'PostgreSQL', 'Redis',
      'Docker', 'Jenkins', 'AWS'
    ],
    responsibilities: [
      'Full-stack development',
      'Database design and optimization',
      'API development and integration',
      'Performance optimization'
    ]
  },
  {
    id: 3,
    year: '2019 - 2021',
    company: 'StartUp Hub',
    position: 'Junior Developer',
    description: 'Worked on frontend development using React and TypeScript',
    icon: Laptop,
    location: 'Seattle, WA',
    team: '2 developers, 1 designer',
    achievements: [
      'Built responsive UI components',
      'Improved page load time by 30%',
      'Implemented unit testing',
      'Created reusable component library'
    ],
    technologies: [
      'React', 'TypeScript', 'SCSS', 'Jest',
      'Redux', 'Material-UI'
    ],
    responsibilities: [
      'Frontend development',
      'UI/UX implementation',
      'Component development',
      'Bug fixing and maintenance'
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