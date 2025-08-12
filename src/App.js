import React, { useState } from 'react';
import Navbar   from './components/Navbar';
import Home     from './components/Home';
import About    from './components/About';
import Skills   from './components/Skills';
import Career   from './components/Career';
import Contact  from './components/Contact';
import Footer   from './components/Footer';
import './App.css';
import Projects from './components/Project';

function App() {
  const [isClassic, setIsClassic] = useState(false);

  return (
    <div className={isClassic ? 'filter-grayscale' : ''}>
      <Navbar isClassic={isClassic} setIsClassic={setIsClassic} />
      <main className="pt-16">
        <Home />
        <About />
        <Skills />
        <Career />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
