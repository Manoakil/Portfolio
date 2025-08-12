import React from 'react';

export default function Navbar({ isClassic, setIsClassic }) {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="text-primary font-heading text-2xl">
          Mano
        </a>
        <ul className="flex space-x-8 text-gray-700 font-body">
          {['about','projects','contact'].map(id => (
            <li key={id} className="relative group">
              <a
                href={`#${id}`}
                className="uppercase transition-colors hover:text-primary"
              >
                {id}
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
            </li>
          ))}
          {/* <li className="flex items-center">
            <button
              onClick={() => setIsClassic(!isClassic)}
              className="relative h-5 w-10 bg-gray-300 rounded-full transition-colors"
            >
              <span
                className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${
                  isClassic ? 'left-1' : 'left-5'
                }`}
              />
            </button>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
