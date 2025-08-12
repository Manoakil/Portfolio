import { useState } from "react";
import aboutIcon from "./assets/about.png";
import educationIcon from "./assets/education.png";
import experienceIcon from "./assets/experience.png";
import projectsIcon from "./assets/projects.png";
import skillsIcon from "./assets/skills.png";
import contactIcon from "./assets/contact.png";

function ClassicView() {
  const [openWindow, setOpenWindow] = useState(null);

  const icons = [
    { label: "About", content: "about", img: aboutIcon },
    { label: "Education", content: "education", img: educationIcon },
    { label: "Experience", content: "experience", img: experienceIcon },
    { label: "Projects", content: "projects", img: projectsIcon },
    { label: "Skills", content: "skills", img: skillsIcon },
    { label: "Contact", content: "contact", img: contactIcon },
  ];

  const Icon = ({ label, onClick, position, img }) => {
    const top = 80 + position * 100;
    const left = 40;
    return (
      <div
        className="absolute text-center cursor-pointer hover:scale-105 transition-transform"
        style={{ top, left }}
        onClick={onClick}
      >
        <img src={img} alt={label} className="w-12 h-12 mb-1 rounded-md" />
        <p className="text-xs">{label}</p>
      </div>
    );
  };

  const Window = ({ label, onClose, children }) => {
    return (
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 bg-[#222] border border-white shadow-xl z-10">
        <div className="bg-[#444] text-white px-4 py-2 flex justify-between items-center">
          <span className="font-bold capitalize">{label}</span>
          <button onClick={onClose} className="bg-red-500 w-4 h-4 rounded-full"></button>
        </div>
        <div className="p-4 text-sm">{children}</div>
      </div>
    );
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#1a1a2e] text-white font-mono relative">
      {icons.map((icon, i) => (
        <Icon
          key={i}
          label={icon.label}
          onClick={() => setOpenWindow(icon.content)}
          position={i}
          img={icon.img}
        />
      ))}

      {openWindow && (
        <Window label={openWindow} onClose={() => setOpenWindow(null)}>
          {openWindow === "about" && (
            <p>
              Results-driven Frontend Developer with experience in responsive,
              user-focused web interfaces using HTML, CSS, JS, and React.
            </p>
          )}
          {openWindow === "education" && (
            <p>
              B.E. Computer Science - Sree Sakthi Engineering College (2021–2025)
              CGPA: 6.9
            </p>
          )}
          {openWindow === "experience" && (
            <ul>
              <li>Intern - Code Value Technologies (Feb–May 2025)</li>
              <li>Hands-on with ReactJS, HTML, CSS, JS</li>
            </ul>
          )}
          {openWindow === "projects" && (
            <ul>
              <li>Inventory Lifecycle Mgmt – Refactored React components</li>
              <li>HRMS – Tailwind CSS UI redesign & mobile optimization</li>
            </ul>
          )}
          {openWindow === "skills" && (
            <ul className="flex gap-2 flex-wrap">
              {["HTML", "CSS", "JavaScript", "ReactJS"].map((s, i) => (
                <li key={i} className="bg-pink-500 px-2 py-1 rounded text-xs">
                  {s}
                </li>
              ))}
            </ul>
          )}
          {openWindow === "contact" && (
            <p>
              Email: manoakil12@gmail.com<br />
              Phone: +91 6379435597<br />
              Location: Chennai
            </p>
          )}
        </Window>
      )}
    </div>
  );
}

export default ClassicView;
