import React, { useState } from 'react';

const education = [
  { degree: 'Bachelor of Engineering', institution: 'Sree Sakthi Engineering College', year: '2021 - 2025' },
  { degree: 'Higher Secondary',        institution: 'Sathya Saai Matric Higher Secondary School', year: '2019 - 2021' }
];

export default function Career() {
  const [open, setOpen] = useState(null);

  return (
    <section id="career" className="py-20 px-6 md:px-24 bg-bgLight text-primary font-body fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading">Education & Experience</h2>
        <p className="mt-2 text-gray-600 max-w-lg mx-auto">
          My academic journey and professional growth.
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {education.map((edu,idx) => (
          <div key={idx} className="border rounded-md overflow-hidden">
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
            >
              <span>{edu.degree}</span>
              <span>{open === idx ? '-' : '+'}</span>
            </button>
            <div
              className={`max-h-0 overflow-hidden transition-[max-height] duration-300 ${
                open === idx ? 'max-h-40' : ''
              } bg-white px-6`}
            >
              <p className="py-2">{edu.institution}</p>
              <p className="pb-4 text-gray-500">{edu.year}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-3xl mx-auto bg-white p-6 rounded-md shadow-sm">
        <h3 className="text-xl font-medium mb-1">ReactJS Intern</h3>
        <p className="text-gray-600">Code Value Technologies</p>
        <p className="mt-3 text-gray-700">
          Developed reusable React components and optimized UI performance.
        </p>
      </div>
    </section>
  );
}
