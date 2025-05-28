import SkillCard from "./SkillCard";
import { useRef } from 'react';


const skillItem = [
    {
      imgSrc: '/images/balsamiq.svg',
      label: 'Balsamiq',
      desc: 'Wireframing Tool'
    },
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/html5.svg',
      label: 'HTML5',
      desc: 'Markup Language'
    },  
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Frontend Language'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Frontend Library'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'CSS Framework'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/api.svg',
      label: 'RESTful APIs',
      desc: 'Client-Server Communication'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'NoSQL Database'
    },  
    {
      imgSrc: '/images/postman.svg',
      label: 'Postman',
      desc: 'API Testing'
    },
    {
      imgSrc: '/images/github.svg',
      label: 'GitHub',
      desc: 'Version Control'
    },
    {
      imgSrc: '/images/docker.svg',
      label: 'Docker',
      desc: 'Containerization'
    },
    {
      imgSrc: '/images/jenkins.svg',
      label: 'Jenkins',
      desc: 'CI/CD Automation'
    },
    {
      imgSrc: '/images/vscode.svg',
      label: 'VS Code',
      desc: 'Code Editor'
    },
];


const SCROLL_AMOUNT = 200;

const Skill = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Tools & Technologies</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-full reveal-up">
          The essential software and platforms I use to craft efficient, maintainable, and high-performance digital experiences.
        </p>

        <div className="relative flex items-center">
          {/* Left Arrow Button */}
          <button
            onClick={scrollLeft}
            aria-label="Scroll skills left"
            className="absolute left-0 z-10 p-2 backdrop-blur h-full rounded hover:bg-gray-500 focus:outline-none"
          >
            <span className="material-symbols-rounded text-2xl font-bold">chevron_left</span>
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex items-stretch gap-3 overflow-x-auto scroll-smooth scrollbar-hide px-10"
            style={{ scrollSnapType: 'x mandatory' }} // optional for snap effect
          >
            {skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={scrollRight}
            aria-label="Scroll skills right"
            className="absolute right-0 z-10 p-2 backdrop-blur h-full rounded hover:bg-gray-500 focus:outline-none"
          >
            <span className="material-symbols-rounded text-2xl font-bold">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
};


export default Skill