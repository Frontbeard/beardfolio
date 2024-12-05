import profile from "../assets/profile.png";
import { getConfigData } from "../data/configReader";

export default function Profile() {
  const configData = getConfigData();

  const workStatusTextClass =
    configData.status == "on"
      ? "bg-[#d0fadf] text-[#109d5c] rounded-full uppercase px-[0.60rem] py-[0.60rem] md:px-2 md:py-1 font-medium"
      : "bg-[#ff9d9d] text-[#f74d4d] rounded-full uppercase px-[0.60rem] py-[0.60rem] md:px-2 md:py-1 font-medium";
  const workStatusClass =
    configData.status == "on"
      ? "w-1.5 h-1.5 bg-[#109d5c] rounded-full"
      : "w-1.5 h-1.5 bg-[#f74d4d] rounded-full";
  const workStatusText =
    configData.status == "on" ? "avaılable for work" : "busy";

  return (
    <>
      <div className="flex items-center justify-between px-7 py-7">
        <div className="font-medium text-lg flex items-center gap-x-3">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          {configData.job}
        </div>
        <div className={workStatusTextClass}>
          <div className="text-sm font-medium flex items-center gap-x-1">
            <div className={workStatusClass}></div>
            <span className="hidden md:block">{workStatusText}</span>
          </div>
        </div>
      </div>
      <div className="px-7 py-7 flex flex-col flex-col-reverse md:flex md:flex-row md:items-center md:justify-between pt-3">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-4xl md:text-4xl font-semibold text-center md:text-justify tracking-tighter">
            Welcome, there!
          </h1>
          <p className="md:w-3/4 text-lg text-gray-500 font-normal tracking-tigh">
            {configData.desc}
          </p>
          <div className="flex items-center text-center md:text-justify justify-center md:justify-normal pt-6">
            <a href={`mailto:${configData.email}`}>
              <button
                type="button"
                className="gap-x-2 border border-[#000000] bg-[#050708] text-white shadow-2xl transition-all font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center mr-2 mb-2 hover:bg-purple-500 hover:border-purple-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM4 6h16l-8 5L4 6zm0 12V9.236l7.793 4.871a1 1 0 001.414 0L20 9.236V18H4z" />
                </svg>
                Contact Me
              </button>
            </a>
          </div>
        </div>
        <div className="rounded-full p-2 flex items-center justify-center mb-7">
          <div className="w-40 h-40 rounded-full bg-gradient-to-b from-gray-100 to-gray-300 border-2 flex items-center justify-center">
            <img
              src={profile}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
