import './Testmonials.scss';
import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'C++', 'Java', ],
      
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Angular', 'Tailwind Css',],
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'MySQL', ],
    },
  ];

  return (
    <section className="skills-section" id="testmonials">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skillGroup, index) => (
          <div key={index} className="skill-group">
            <h3>{skillGroup.title}</h3>
            <ul className="skill-list">
              {skillGroup.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>
                <img src="https://w7.pngwing.com/pngs/520/382/png-transparent-black-dots-miscellaneous-black-desktop-wallpaper-thumbnail.png" alt="" />
                {skill}
              </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;