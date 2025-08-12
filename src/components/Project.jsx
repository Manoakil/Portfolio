import React, { useState, useRef, useEffect } from 'react';

const projects = [
  { title: 'E-Commerce',      content: 'Full-stack shopping platform.',  own: true },
  { title: 'Inventory Lifecycle', content: 'Procurement to disposal tracking.', own: false },
  { title: 'User Management', content: 'Roles & permissions.',            own: true },
  { title: 'HR Management',    content: 'Employee data & payroll.',        own: false }
];

export default function Projects() {
  const [tab, setTab] = useState('all');
  const refs = useRef({});
  const [style, setStyle] = useState({});

  useEffect(() => {
    const el = refs.current[tab];
    if (el) setStyle({ left: el.offsetLeft, width: el.offsetWidth });
  }, [tab]);

  const filtered = projects.filter(p =>
    tab === 'own' ? p.own : tab === 'intern' ? !p.own : true
  );

  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-white text-gray-800 font-body fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading mb-2">Projects</h2>
        <p className="text-gray-600 max-w-xl mx-auto">A selection of my key work.</p>
      </div>

      <div className="relative mb-12">
        <div className="flex justify-center space-x-6">
          {['all','own','intern'].map(t => (
            <button
              key={t}
              ref={el => (refs.current[t] = el)}
              onClick={() => setTab(t)}
              className={`py-2 ${
                tab === t ? 'text-primary font-medium' : 'text-gray-600'
              } transition-colors`}
            >
              {t === 'all' ? 'All' : t === 'own' ? 'Own' : 'Intern'}
            </button>
          ))}
        </div>
        <span
          className="absolute bottom-0 h-px bg-primary transition-all"
          style={style}
        />
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {filtered.map((p,i) => (
          <div
            key={i}
            className="w-80 p-6 bg-bgLight rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-medium mb-2">{p.title}</h3>
            <p className="text-gray-600">{p.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
