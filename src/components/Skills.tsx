import { Code2, Database, Globe, Terminal, Cpu, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: ['React.js', 'Redux Toolkit', 'Next.js', 'SCSS', 'Material UI', 'Semantic UI', 'Redux']
  },
  // {
  //   title: 'Backend Development',
  //   icon: Database,
  //   skills: ['Node.js', 'Express.js', 'Python', 'Django', 'RESTful APIs']
  // },
  {
    title: 'Database',
    icon: Globe,
    // skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch']
    skills: ['MSSQL', 'PostgreSQL', 'Oracle','Fulltext Search']
  },
  {
    title: 'DevOps & Tools',
    icon: Terminal,
    skills: ['Git', 'Docker', 'Jenkins', 'EmailJs' ]
  },
  // {
  //   title: 'Mobile Development',
  //   icon: Cpu,
  //   skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Ionic']
  // },
  {
    title: 'Cloud Services',
    icon: Cloud,
    skills: ['AWS', 'Azure', 'Google Cloud', 'Heroku', 'Netlify','Hostinger']
  }
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <h2>Skills & Expertise</h2>
        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-category__header">
                <category.icon size={24} />
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-category__list">
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;