import {
  FaCss3,
  FaNode,
  FaHtml5,
  FaJs,
  FaReact,
  FaGoogle,
  FaAmazon,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import {
  RiCactusFill,
  RiCheckboxMultipleFill,
  RiNetflixFill,
} from "react-icons/ri";

const skills = [
  { icon: <FaHtml5 color="#E34F26" />, name: "HTML" },
  { icon: <FaCss3 color="#1572B6" />, name: "CSS" },
  { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
  { icon: <FaReact color="#61DAFB" />, name: "React" },
  { icon: <FaNode color="#68A063" />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
  { icon: <SiPostman color="#E34F26" />, name: "Postman" },
];

const experiences = [
  {
    icon: <RiCheckboxMultipleFill color="#61DAFB" />,
    company: "CBM IT-Services",
    role: "Frontend Developer",
    date: "sep 2025 – jan 2026",
    points: [
      "Developed responsive UI components",
      "Improved performance and page load speed",
      "Worked closely with designers & backend teams",
    ],
  },
];

const Experience = () => {
  return (
    <section id="Experience" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Experience & <span className="text-indigo-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Tech Stack - MERN</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center gap-2 hover:scale-105 transition"
                >
                  <span className="text-4xl">{skill.icon}</span>
                  <p className="text-sm text-gray-300">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6 mt-13">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-indigo-400 transition"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-4xl">{exp.icon}</span>
                  <div>
                    <h4 className="text-xl font-semibold">
                      {exp.role} – {exp.company}
                    </h4>
                    <p className="text-sm text-gray-400">{exp.date}</p>
                  </div>
                </div>

                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
