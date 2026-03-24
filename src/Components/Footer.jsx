import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-gray-300">
      {/* Top Glow Line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold text-white">
            Sumit
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Shankhwar
            </span>
          </h1>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Full Stack Web Developer crafting modern, fast & scalable web
            applications with clean UI and strong backend architecture.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Experience", "Projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="hover:text-indigo-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Connect With Me
          </h2>
          <div className="flex gap-4">
            {[
              { icon: <FaGithub />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 
                           hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sumit Shankhwar. Built with ❤️ using React
        & Tailwind.
      </div>
    </footer>
  );
};

export default Footer;
