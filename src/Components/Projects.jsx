import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import netflix_img from "../assets/netflix.png";
import projectImg from "../assets/projectImg.webp";
import E_commerce from "../assets/E_commerce_Img.png";

const projects = [
  {
    title: "Netflix-clone website",
    desc: "Full authentication system with JWT, refresh tokens, and role-based access.",
    image: netflix_img,
    tech: ["React", "Node", "Express", "MongoDB"],
    github: "https://github.com/sumitshankhwar7/Netflix-clone",
    live: "https://sumitshankhwar7.github.io/Netflix-clone/",
  },
  {
    title: "E-Commerce App",
    desc: "Full-stack shopping app with cart, payment & admin dashboard.",
    image: E_commerce,
    tech: ["React", "Node", "MongoDB"],
    github: "https://github.com/sumitshankhwar7/E-commerce",
    live: "https://sumitshankhwar7.github.io/E-commerce/",
  },
  {
    title: "Portfolio Website",
    desc: "Modern developer portfolio with animations and responsive design.",
    image: projectImg,
    tech: ["React", "Tailwind"],
    github: "#",
    live: "https://",
  },
];

const Projects = () => {
  return (
    <section id="Projects" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-indigo-400">Projects</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-xl"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover"
              />

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="text-gray-400 text-sm">{project.desc}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm hover:text-indigo-400 transition"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-sm hover:text-indigo-400 transition"
                  >
                    <FaExternalLinkAlt /> View Projects
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
