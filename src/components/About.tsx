import React from 'react';
import { Code2, Brain, Users, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Technical Expertise',
      description: 'Specialized in React.js with 4.5 years of hands-on experience'
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Committed to writing clean, efficient code and optimizing system performance'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Strong track record of successful cross-functional team collaboration'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Focused on designing and implementing scalable, high-performance solutions'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <h2>About Me</h2>
          <p className="about__description">
            Results-driven Software Development Engineer with 8 years of experience in designing, 
            developing, and implementing scalable, high-performance software solutions. Bringing 
            4.5 years of specialized expertise in React.js, with a strong commitment to writing 
            clean, efficient code, enhancing system performance, and driving the success of 
            cross-functional teams through effective collaboration and technical insight.
          </p>
          
          <div className="about__skills">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-card__icon">
                  <skill.icon size={24} />
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;