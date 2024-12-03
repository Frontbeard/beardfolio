import { useState } from "react";

export default function Home() {
  const [projects] = useState([
    {
      "project-name": "Pink Panther",
      "project-desc": "Online store development with user authentication, payment gateway, product filters, and image management.",
      "project-image-url": "https://i.imgur.com/YvJep04.png",
      "project-link": "https://github.com/Frontbeard/pinkpantherfront"
    },
    {
      "project-name": "Calculator",
      "project-desc": "Online tool for basic mathematical calculations, designed to practice and improve technical skills.",
      "project-image-url": "https://i.imgur.com/2ADGpI6.png",
      "project-link": "https://github.com/Frontbeard/calculator"
    },
    {
      "project-name": "Challenge Chat MERN",
      "project-desc": "Real-time chat with React, multi-user, responsive, no email registration. Functional, intuitive, stylish, and with a database.",
      "project-image-url": "https://i.imgur.com/LoGPWko.png",
      "project-link": "https://github.com/Frontbeard/challenge-mern-chat-tailwindcss"
    },
    {
      "project-name": "Individual project: Countries",
      "project-desc": "SPA with React, Redux, Node, Express, and Sequelize to search, filter, sort countries, and create tourist activities. Local database and JavaScript validations.",
      "project-image-url": "https://i.imgur.com/lyYkxpH.png",
      "project-link": "https://github.com/Frontbeard/PI-Countries"
    },
    {
      "project-name": "Beardfolio",
      "project-desc": "A great portfolio is like a well-groomed beard, essential for making a lasting impression!",
      "project-image-url": "https://i.imgur.com/mNJWZSg.png",
      "project-link": "https://github.com/Frontbeard/beardfolio"
    }
  ]);

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const svgClass = isHovered ? "w-6 h-6 text-gray-500 transition delay-150" : "w-6 h-6 text-gray-300";

  return (
    <div className="px-7 py-7">
      <h1 className="flex items-center gap-x-2 text-lg font-medium">
        <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
        Projects
      </h1>

      <div className="flex flex-col gap-2 mt-6">
        {projects.map((project, index) => (
          <a
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="drop-shadow-md card bg-white rounded-lg px-5 py-3 hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300 flex flex-col sm:flex-row"
            href={project["project-link"]}
          >
            <div className="flex sm:block sm:w-16 sm:h-16 sm:mr-4">
              <div className="rounded-full overflow-hidden w-16 h-16 mx-auto sm:mx-0 border border-gray-200">
                <img
                  className="w-full h-full object-cover"
                  src={project["project-image-url"]}
                  alt={project["project-name"]}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center mt-4 sm:mt-0">
              <h1 className="font-medium text-lg">{project["project-name"]}</h1>
              <p className="text-gray-500 text-md">{project["project-desc"]}</p>
            </div>
            <button className="ml-auto hidden sm:inline-block">
              <svg
                className={svgClass}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}
