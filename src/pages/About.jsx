import { getConfigData } from "../data/configReader";
import TechCarrusel from "../components/TechCarrusel";
import { HiOutlineDocumentText } from "react-icons/hi";
import profileImage from "../assets/source.jpg";
import resume from "../assets/CV-Lucas Benitez.pdf";

export default function About() {
  const configData = getConfigData();
  return (
    <>
      <div className="px-7 py-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          About
        </h1>
      </div>
      <div className="px-7 py-7 flex flex-col flex-col-reverse md:flex md:flex-row md:items-center pt-3">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-4xl md:text-4xl font-semibold tracking-tighter">
            Hi, I'm Lucas
          </h1>
          <p className="text-lg text-gray-500 font-normal tracking-tight">
            {configData.aboutDesc}
          </p>
          <img
            className="w-64 h-64 border rounded-full p-3 shadow-md object-cover mx-auto"
            src={profileImage}
            alt="Profile"
          />
          <div className="text-gray-600">
            <p className="text-lg font-normal">
              I firmly believe that a good user experience is essential for the
              success of any product, which is why I constantly strive to
              improve and perfect my skills in this area. That's why I love
              designing and developing frontend components, always prioritizing
              design and usability to create attractive and intuitive
              interfaces.
            </p>
            <p className="text-lg font-normal mt-2">
              In my free time, I enjoy studying new trends in technology and
              UX/UI design, or even relaxing with video games, which allow me to
              foster my creativity and stay up to date with strategic thinking.
            </p>
            <p className="text-lg font-normal mt-3">
              I have had the opportunity to collaborate with multicultural teams
              from countries such as Colombia, the Dominican Republic, and
              Paraguay, which has enriched my growth both professionally and
              personally. I really enjoy learning from different perspectives
              and working on exciting projects that bring real value. If you're
              interested in connecting or collaborating on projects, feel free
              to reach out to me.
            </p>
          </div>
        </div>
      </div>
      <div className="px-7 py-7 mb-12">
        <TechCarrusel />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold">Collaborate with me.</h1>
        <p className="text-md font-normal text-gray-500 text-center px-3">
          Check my resume below
        </p>
      </div>
      <div className="flex flex-col flex-col-reverse md:flex md:flex-row md:items-center justify-center py-8">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center text-center md:text-justify justify-center md:justify-normal">
            <a
              href={resume}
              download="CV-LucasBenitez.pdf"
            >
              <button
                type="button"
                className="gap-x-1 before:ease relative overflow-hidden border border-[#000000] bg-[#050708] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center mr-2 mb-2 hover:bg-purple-500"
              >
                <HiOutlineDocumentText className="w-5 h-5 mr-2" />
                My Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
