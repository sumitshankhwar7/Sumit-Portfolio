import AboutImg from "../assets/homeimg.png";
import { IoArrowForward } from "react-icons/io5";

const aboutData = [
  {
    title: "Frontend Developer",
    desc: "I build modern, responsive and user-friendly interfaces using React, Tailwind CSS and modern UI principles.",
  },
  {
    title: "Backend Developer",
    desc: "I develop secure and scalable backend APIs using Node.js, Express and JWT authentication.",
  },
  {
    title: "Database Developer",
    desc: "I design and manage efficient databases using MongoDB with optimized schemas and queries.",
  },
];

const About = () => {
  return (
    <section id="About" className="bg-slate-900 text-white py-20 px-6 ">
      <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          About <span className="text-indigo-400">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/30 blur-3xl rounded-full"></div>
            <img
              src={AboutImg}
              alt="About"
              className="relative w-72 md:w-80 rounded-xl border border-white/20 shadow-lg hover:scale-105 transition duration-300"
            />
          </div>

          {/* Content */}
          <div className="space-y-6  ">
            {aboutData.map((item, index) => (
              <div key={index} className="flex gap-4 ">
                <IoArrowForward
                  size={26}
                  className="text-indigo-400 mt-1 transition-all duration-300 hover:scale-150"
                />
                <div className="max-w-md">
                  <h3 className="text-xl md:text-2xl font-semibold ">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
