import React from 'react';

export default function Home() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center bg-bgLight text-primary font-heading text-center fade-in"
      style={{ paddingTop: '4rem' }}
    >
      <h1 className="text-5xl mb-2">Manoj Elangovan</h1>
      <p className="text-2xl font-body mb-6">Full Stack Developer</p>
      <a
        href="Resume-M.docx"
        className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors"
      >
        Download CV
      </a>
    </section>
  );
}
