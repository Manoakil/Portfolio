import React from 'react';

const skills = [
  { name: 'JavaScript',   level: 'Advanced',      img: 'javascript.svg' },
  { name: 'React',         level: 'Advanced',      img: 'react.svg' },
  { name: 'Tailwind CSS',  level: 'Intermediate',  img: 'tailwindcss.svg' },
  { name: 'MongoDB',       level: 'Intermediate',  img: 'mongodb.svg' },
  { name: 'Java',          level: 'Intermediate',  img: 'java.svg' },
  { name: 'MySQL',         level: 'Intermediate',  img: 'mysql.svg' }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-bgLight text-primary font-body fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading">Skills</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((s,i) => (
          <div
            key={i}
            className="w-56 p-4 bg-white rounded-md shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow"
          >
            <img src={s.img} alt={s.name} className="w-8 h-8" />
            <div>
              <h3 className="font-medium">{s.name}</h3>
              <p className="text-gray-600 text-sm">{s.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
