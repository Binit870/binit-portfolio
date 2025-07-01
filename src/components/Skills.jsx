import React from 'react';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'Github','C++'];

const Skills = () => {
  return (
    <section id="skills" className="py-20 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-10">Skills</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 px-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg transition">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
