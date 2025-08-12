import React from 'react';

export default function About() {
  const details = [
    { label: 'Date of Birth',     value: '15 June 2004' },
    { label: 'Spoken Languages',  value: 'English, French, German' },
    { label: 'Interests',         value: 'Music, Podcasts' }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-white text-gray-800 font-body fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-heading mb-2 text-primary">Personal Details</h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          A concise overview of my background and passions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {details.map((d,i) => (
          <div key={i}>
            <h3 className="text-sm text-gray-500 mb-1 uppercase">{d.label}</h3>
            <p className="text-lg font-medium">{d.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
